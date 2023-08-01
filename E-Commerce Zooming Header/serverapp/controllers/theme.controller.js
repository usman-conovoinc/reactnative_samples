const db = require("../models");
const Theme = db.theme;

const UtilityFunctions = require("../utility/UtilityFunctions")

exports.create = (req, res) => {

  for (let index = 0; index < req.body.themes.length; index++) {

    const obj = req.body.themes[index]

    const theme = new Theme({
      black: obj.black,
      white: obj.white,
      error: obj.error,
      success: obj.success,
      editableColorSet: {
        five: obj.editableColorSet.five,
        four: obj.editableColorSet.four,
        three: obj.editableColorSet.three,
        two: obj.editableColorSet.two,
        one: obj.editableColorSet.one
      },
      mainTheme: {
        five: obj.mainTheme.five,
        four: obj.mainTheme.four,
        three: obj.mainTheme.three,
        two: obj.mainTheme.two,
        one: obj.mainTheme.one
      }
    });

    // Save Theme in the database
    theme.save(theme)
  }

  UtilityFunctions.customResponse(null, "Success", "", res)

};
// Retrieve all Themes from the database.
exports.findAll = (req, res) => {
  Theme.find()
    .then(data => {
      UtilityFunctions.customResponse(data, "Success", "", res)
    })
    .catch(err => {
      UtilityFunctions.customResponse(null, "", err.message || "Some error occurred while retrieving Themes.", res.status(500))
    });
};

// Retrieve all Themes from the database.
exports.findPopularShops = (req, res) => {

  const count = req.query.count;
  let condition = { isPopularShop: true };
  Theme.find(condition).limit(count)
    .then(data => {
      UtilityFunctions.customResponse(data, "Success", "", res)
    })
    .catch(err => {
      UtilityFunctions.customResponse(null, "", err.message || "Some error occurred while retrieving Themes.", res.status(500))
    });
};


// Find a single Theme with an id
exports.findOne = (req, res) => {
  const id = req.params.id;
  Theme.findById(id)
    .then(data => {
      if (!data) {
        UtilityFunctions.customResponse(null, "", "Not found Theme with id " + id, res.status(404));
      } else {
        UtilityFunctions.customResponse(data, "Success", "", res)
      }
    })
    .catch(err => {
      UtilityFunctions.customResponse(null, "", "Error retrieving Theme with id=" + id, res.status(500))
    });
};
// Update a Theme by the id in the request
exports.update = (req, res) => {
  if (!req.body) {
    UtilityFunctions.customResponse(null, "", "Data to update can not be empty!", res.status(400));
  }
  const id = req.params.id;
  Theme.findByIdAndUpdate(id, req.body, { useFindAndModify: false })
    .then(data => {
      if (!data) {
        UtilityFunctions.customResponse(null, "", "Cannot update Theme with id=${id}. Maybe Theme was not found!", res.status(404));
      } else {
        UtilityFunctions.customResponse(data, "Theme was updated successfully.", "", res);
      }
    })
    .catch(err => {
      UtilityFunctions.customResponse(null, "", "Error updating Theme with id=" + id, res.status(500));
    });
};
// Delete a Theme with the specified id in the request
exports.delete = (req, res) => {
  const id = req.params.id;
  Theme.findByIdAndRemove(id)
    .then(data => {
      if (!data) {
        res.status(404).send({
          message: `Cannot delete Theme with id=${id}. Maybe Theme was not found!`
        });
      } else {
        res.send({
          message: "Theme was deleted successfully!"
        });
      }
    })
    .catch(err => {
      res.status(500).send({
        message: "Could not delete Theme with id=" + id
      });
    });
};
// Delete all Themes from the database.
exports.deleteAll = (req, res) => {
  Theme.deleteMany({})
    .then(data => {
      res.send({
        message: `${data.deletedCount} Theme were deleted successfully!`
      });
    })
    .catch(err => {
      res.status(500).send({
        message:
          err.message || "Some error occurred while removing all Themes."
      });
    });
};
// Find all available Themes
exports.findAllAvailable = (req, res) => {
  Theme.find({ isAvalable: true })
    .then(data => {
      res.send(data);
    })
    .catch(err => {
      res.status(500).send({
        message:
          err.message || "Some error occurred while retrieving Themes."
      });
    });
};