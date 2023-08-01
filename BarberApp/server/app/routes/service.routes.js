module.exports = app => {
    const services = require("../controllers/service.controller.js");
    var router = require("express").Router();
    // Create a new product
    router.post("/", services.create);
    router.get("/", services.findAll);
    router.get("/:id", services.findOne);
    router.get("/servicesByCategories/:id", services.servicesByCategories);
    router.put("/:id", services.update);
    router.delete("/:id", services.delete);
    router.delete("/", services.deleteAll);
    app.use('/api/services', router);
};

