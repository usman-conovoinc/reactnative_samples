const dbConfig = require("../config/db.config");
const mongoose = require("mongoose");
mongoose.Promise = global.Promise;
const db = {};
db.mongoose = mongoose;
db.url = dbConfig.url;

db.user = require("./user.model.js")(mongoose);
db.barber = require("./barber.model.js")(mongoose);
db.category = require("./category.model.js")(mongoose);
db.service = require("./service.model.js")(mongoose);
db.booking = require("./booking.model.js")(mongoose);

module.exports = db;