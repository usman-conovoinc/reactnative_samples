const express = require("express");
// const bodyParser = require("body-parser"); /* deprecated */
const cors = require("cors");
const app = express();
const Joi = require('joi');

const UtilityFunctions = require("./app/utility/UtilityFunctions.js")

var corsOptions = {
  origin: "http://localhost:8080"
};

app.use(cors(corsOptions));

// parse requests of content-type - application/json
app.use(express.json());  /* bodyParser.json() is deprecated */

// parse requests of content-type - application/x-www-form-urlencoded
app.use(express.urlencoded({ extended: true }));   /* bodyParser.urlencoded() is deprecated */

var consoleHolder = console;
function debug(bool) {
  if (!bool) {
    consoleHolder = console;
    console = {};
    Object.keys(consoleHolder).forEach(function (key) {
      console[key] = function () { };
    })
  } else {
    console = consoleHolder;
  }
}
debug(true);

const db = require("./app/models");
db.mongoose
  .connect(db.url, {
    useNewUrlParser: true,
    useUnifiedTopology: true
  }).then(() => {
    // UtilityFunctions.generateTimeSlots();
    console.log("Connected to the database!");
  }).catch(err => {
    console.log("Cannot connect to the database!", err);
    process.exit();
  });

// simple route
app.get("/", (req, res) => {
  res.json({ message: "We are closed." });
});

app.post("/", (req, res) => {
  const schema = Joi.object({
    name: Joi.string().min(3).required()
  })

  const result = schema.validate(req.body);

  if (result.error != null) {
    res.json({ message: result.error.details[0].message })
  }

});

require("./app/routes/auth.routes.js")(app);
require("./app/routes/barber.routes")(app);
require("./app/routes/category.routes.js")(app);
require("./app/routes/service.routes.js")(app);
require("./app/routes/booking.routes.js")(app);

// set port, listen for requests
const PORT = process.env.PORT || 8080;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}.`);
});