
exports.customResponse = function (data, msg, err, res) {
    var respo = {
        "data": data,
        "status": res.status,
        "message": msg,
        "error": err
    }
    res.send(respo);
};