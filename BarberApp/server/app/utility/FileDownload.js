var http = require('http');
var https = require('https');
var fs = require('fs');

/**
 * Download a resource from `url` to `dest`.
 * @param {string} url - Valid URL to attempt download of resource
 * @param {string} dest - Valid path to save the file.
 * @param {string} filename - File name with extension.
 * @returns {Promise<void>} - Returns asynchronously when successfully completed download
 */

exports.fileDownload = (url, dest, filename) => {

    const finalPath = dest + filename
    var file = fs.createWriteStream(finalPath);
    const pkg = url.toLowerCase().startsWith('https:') ? https : http

    return new Promise((resolve, reject) => {
        var responseSent = false; // flag to make sure that response is sent only once.
        pkg.get(url, response => {
            response.pipe(file);
            file.on('finish', () => {
                file.close(() => {
                    if (responseSent) return;
                    responseSent = true;
                    resolve(filename);
                });
            });
        }).on('error', err => {
            if (responseSent) return;
            responseSent = true;
            reject(err);
        });
    });
}