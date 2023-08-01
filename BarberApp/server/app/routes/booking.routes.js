module.exports = app => {
    const bookings = require("../controllers/bookings.controller.js");
    var router = require("express").Router();
    // Create a new booking
    router.post("/", bookings.create);
    // Retrieve all bookings
    router.get("/", bookings.findAll);

    app.use('/api/bookings', router);
};