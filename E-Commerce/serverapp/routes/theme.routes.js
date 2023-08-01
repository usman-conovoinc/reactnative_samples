module.exports = app => {
    const themes = require('../controllers/theme.controller.js');
    var router = require("express").Router();
    router.post("/", themes.create);
    router.get("/", themes.findAll);
    router.get("/popular", themes.findPopularShops);
    router.get("/available", themes.findAllAvailable);
    router.get("/:id", themes.findOne);
    router.put("/:id", themes.update);
    router.delete("/:id", themes.delete);
    router.delete("/", themes.deleteAll);
    app.use('/api/themes', router);
};