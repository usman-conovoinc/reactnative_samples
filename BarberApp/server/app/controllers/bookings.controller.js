const db = require("../models");
const UtilityFunctions = require("../utility/UtilityFunctions")

const url = require('url');
const querystring = require('querystring');

const Booking = db.booking;
const Service = db.service;
const Barber = db.barber;

// Create and Save a new Booking
exports.create = (req, res) => {

    const booking = new Booking({
        userId: req.body.userId,
        email: req.body.email,
        phoneNumber: req.body.phoneNumber,
        shop: req.body.shop,
        time: req.body.time,
        services: req.body.services
    });

    // Save booking in the database
    booking.save(booking)
        .then(data => {
            UtilityFunctions.customResponse(data, "Success", "", res)
        })
        .catch(err => {
            UtilityFunctions.customResponse(null, "", err.message || "Some error occurred while creating the Category.", res.status(500))
        });

};

// Retrieve all Categorys from the database.
exports.findAll = async (req, res) => {

    try {

        const dbBookings = await Booking.find().lean();
        if (dbBookings.length > 0) {

            let bookings = []
            for (let i = 0; i < dbBookings.length; i++) {
                let booking = dbBookings[i]
                let serviceQueryArray = []

                booking.services.forEach(serviceId => {
                    serviceQueryArray.push({ _id: serviceId })
                });

                var query = { $or: serviceQueryArray }
                let services = await Service.find(query).lean()

                let shopId = booking['shop']

                let shop = await Barber.findOne({ "_id": shopId }).lean()

                booking.services = services
                booking.shop = shop
                bookings.push(booking)
            }
            UtilityFunctions.customResponse(bookings, "Success", "", res)
        } else {
            UtilityFunctions.customResponse(null, "", "Services are not available ", res.status(404));
        }

    } catch (error) {
        console.log(error)
        UtilityFunctions.customResponse(null, "", "Error retrieving Services", res.status(500))
    }
};

// Find a single Category with an id
exports.findOne = (req, res) => {
    console.log('findOne');
    const id = req.params.id;
    Category.findById(id)
        .then(data => {
            if (!data) {
                UtilityFunctions.customResponse(null, "", "Not found Category with id " + id, res.status(404));
            } else {
                UtilityFunctions.customResponse(data, "Success", "", res)
            }
        })
        .catch(err => {
            UtilityFunctions.customResponse(null, "", "Error retrieving Category with id=" + id, res.status(500))
        });
};

// Update a Category by the id in the request
exports.update = (req, res) => {
    if (!req.body) {
        UtilityFunctions.customResponse(null, "", "Data to update can not be empty!", res.status(400));
    }
    const id = req.params.id;
    Category.findByIdAndUpdate(id, req.body, { useFindAndModify: false })
        .then(data => {
            if (!data) {
                UtilityFunctions.customResponse(null, "", "Cannot update Category with id=${id}. Maybe Category was not found!", res.status(404));
            } else {
                UtilityFunctions.customResponse(data, "Category was updated successfully.", "", res);
            }
        })
        .catch(err => {
            UtilityFunctions.customResponse(null, "", "Error updating Category with id=" + id, res.status(500));
        });
};
// Delete a Category with the specified id in the request
exports.delete = (req, res) => {
    const id = req.params.id;
    Category.findByIdAndRemove(id)
        .then(data => {
            if (!data) {
                res.status(404).send({
                    message: `Cannot delete Category with id=${id}. Maybe Category was not found!`
                });
            } else {
                res.send({
                    message: "Category was deleted successfully!"
                });
            }
        })
        .catch(err => {
            res.status(500).send({
                message: "Could not delete Ser with id=" + id
            });
        });
};
// Delete all Categorys from the database.
exports.deleteAll = (req, res) => {
    Category.deleteMany({})
        .then(data => {
            res.send({
                message: `${data.deletedCount} Category were deleted successfully!`
            });
        })
        .catch(err => {
            res.status(500).send({
                message:
                    err.message || "Some error occurred while removing all Categorys."
            });
        });
};