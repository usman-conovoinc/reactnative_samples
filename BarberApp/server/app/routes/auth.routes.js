module.exports = app => {
    const users = require("../controllers/user.controller");
    var router = require("express").Router();
    // Create a new User
    router.post("/", users.create);
    // Retrieve a single User with id
    router.get("/:id", users.findOne);
    // Update a User with id
    router.put("/:id", users.update);
    // Delete a User with id
    router.delete("/:id", users.delete);
    app.use('/api/auth', router);
};