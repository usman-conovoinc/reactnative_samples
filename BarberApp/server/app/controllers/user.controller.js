const db = require("../models");
const User = db.user;
const UtilityFunctions = require("../utility/UtilityFunctions")
const { fileDownload } = require("../utility/FileDownload.js")
const mongo = require('mongodb')

// Create and Save a new User
exports.create = async (req, res) => {

    // Validate request

    const body = req.body

    if (body?.type == null) {
        UtilityFunctions.customResponse(null, "", "Type field can not be empty!", res.status(400))
    }

    // console.log(body)

    // let mySuperAwesomeExtraneousId = new mongo.ObjectId()
    // console.log(mySuperAwesomeExtraneousId)

    // const data = 'Hello, World!';
    // UtilityFunctions.writeFile('dist/users/' + mySuperAwesomeExtraneousId + '/hello-world.html', data)


    // Save Barber in the database

    const user = new User({
        socialToken: body.socialToken,
        email: body.email,
        socialId: body.socialId,
        fullname: body.fullname,
        type: body.type,
        photo: body.photo
    });

    user.save(user).then(async data => {

        console.log(data.id)

        UtilityFunctions.customResponse(data, "Success", "", res)

        const userPhotoUrl = body?.photo
        const path = 'dist/users/' + data.id + '/'

        await UtilityFunctions.createFolderIfNotExists(path)

        let filename = new mongo.ObjectId() + '.jpg'

        fileDownload(userPhotoUrl, path, filename)
            .then(async (filename) => {
                const filter = { _id: data.id };
                const updateDocument = {
                    $set: {
                        photo: filename,
                    },
                };
                await collection("users").updateOne(filter, updateDocument);
                console.log('downloaded file no issues...')
            })
            .catch(e => {
                console.error('error while downloading', e)
            });

    }).catch(err => {
        UtilityFunctions.customResponse(null, "", err.message || "Some error occurred while creating the Barber.", res.status(500))
    });


    // const userPhotoUrl = body?.photo
    // const path = 'dist/users/648c18ccaf6a0ad582a885071/'
    // await UtilityFunctions.createFolderIfNotExists(path)
    // let filename = new mongo.ObjectId() + '.jpg'

    // fileDownload(userPhotoUrl, path, filename)
    //     .then((filename) => {
    //         console.log('downloaded file no issues...')
    //     })
    //     .catch(e => {
    //         console.error('error while downloading', e)
    //     });


};

// Find a single User with an id
exports.findOne = (req, res) => {
    const id = req.params.id;
    Barber.findById(id)
        .then(data => {
            if (!data) {
                UtilityFunctions.customResponse(null, "", "Not found Barber with id " + id, res.status(404));
            } else {
                UtilityFunctions.customResponse(data, "Success", "", res)
            }
        })
        .catch(err => {
            UtilityFunctions.customResponse(null, "", "Error retrieving Barber with id=" + id, res.status(500))
        });
};
// Update a User by the id in the request
exports.update = (req, res) => {
    if (!req.body) {
        UtilityFunctions.customResponse(null, "", "Data to update can not be empty!", res.status(400));
    }
    const id = req.params.id;
    Barber.findByIdAndUpdate(id, req.body, { useFindAndModify: false })
        .then(data => {
            if (!data) {
                UtilityFunctions.customResponse(null, "", "Cannot update Barber with id=${id}. Maybe Barber was not found!", res.status(404));
            } else {
                UtilityFunctions.customResponse(data, "Barber was updated successfully.", "", res);
            }
        })
        .catch(err => {
            UtilityFunctions.customResponse(null, "", "Error updating Barber with id=" + id, res.status(500));
        });
};

// Delete a User with the specified id in the request
exports.delete = (req, res) => {
    const id = req.params.id;
    Barber.findByIdAndRemove(id)
        .then(data => {
            if (!data) {
                res.status(404).send({
                    message: `Cannot delete Barber with id=${id}. Maybe Barber was not found!`
                });
            } else {
                res.send({
                    message: "Barber was deleted successfully!"
                });
            }
        })
        .catch(err => {
            res.status(500).send({
                message: "Could not delete Barber with id=" + id
            });
        });
};
