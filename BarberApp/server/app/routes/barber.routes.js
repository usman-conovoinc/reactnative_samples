module.exports = app => {
    const barbers = require("../controllers/barber.controller");
    var router = require("express").Router();
    // Create a new Barber
    router.post("/", barbers.create);
    // Retrieve all Barbers
    router.get("/", barbers.findAll);
    // Retrieve all published Barbers
    router.get("/popular", barbers.findPopularShops);
    // Retrieve all published Barbers
    router.get("/available", barbers.findAllAvailable);
    // Retrieve a single Barber with id
    router.get("/:id", barbers.findOne);
    // Update a Barber with id
    router.put("/:id", barbers.update);
    // Delete a Barber with id
    router.delete("/:id", barbers.delete);
    // Create a new Barber
    router.delete("/", barbers.deleteAll);
    app.use('/api/barbers', router);
};