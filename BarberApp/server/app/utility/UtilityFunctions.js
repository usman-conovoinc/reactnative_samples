var tc = require("time-slots-generator");
const fs = require('fs/promises');
const path = require('path');
const http = require('http');

// const fs = require('fs');
const https = require('https');
// const http = require('http');
// const path = require('path');
const { URL } = require('url');

exports.customResponse = function (data, msg, err, res) {
    var respo = {
        "data": data,
        "status": res.status,
        "message": msg,
        "error": err
    }
    res.send(respo);
};

exports.generateTimeSlots = function () {
    const slots = tc.getTimeSlots([], true, "two")
    console.log("get me all the time slots of the day with time in 2hr intervals\n",
        slots
    );
};

exports.createFolderIfNotExists = async function (filePath) {
    try {
        await fs.access(filePath);
        // The check succeeded
    } catch (error) {
        try {
            console.log(error)
            await fs.mkdir(filePath, { recursive: true });
        } catch (error) {
            console.log(error)
        }
    }
};

exports.createFolder = async function (filePath) {
    try {
        const dirname = path.dirname(filePath);
        await fs.mkdir(dirname, { recursive: true });
    } catch (err) {
        throw new Error(err);
    }
}

exports.writeFile = async function (filePath, data) {
    try {
        const dirname = path.dirname(filePath);
        const exist = await isExists(dirname);
        if (!exist) {
            await fs.mkdir(dirname, { recursive: true });
        }

        await fs.writeFile(filePath, data, 'utf8');
    } catch (err) {
        throw new Error(err);
    }
}

const download = (url, dest, cb) => {
    const file = fs.createWriteStream(dest);

    const request = http.get(url, (response) => {
        // check if response is success
        if (response.statusCode !== 200) {
            return cb('Response status was ' + response.statusCode);
        }

        response.pipe(file);
    });

    // close() is async, call cb after close completes
    file.on('finish', () => file.close(cb));

    // check for request error too
    request.on('error', (err) => {
        fs.unlink(dest, () => cb(err.message)); // delete the (partial) file and then return the error
    });

    file.on('error', (err) => { // Handle errors
        fs.unlink(dest, () => cb(err.message)); // delete the (partial) file and then return the error
    });
};