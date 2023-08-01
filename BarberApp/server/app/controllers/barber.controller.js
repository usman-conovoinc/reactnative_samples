const db = require("../models");
const Barber = db.barber;

const UtilityFunctions = require("../utility/UtilityFunctions")

// Create and Save a new Barber
exports.create = (req, res) => {

  // Validate request
  if (!req.body.name) {
    UtilityFunctions.customResponse(null, "", "Content can not be empty!", res.status(400))
    return;
  }

  // Create a Barber

  let serviceCategories = []
  req.body.serviceCategories.forEach(element => {
    const service = {
      "categoryId": element.categoryId,
      "services": element.services
    }
    serviceCategories.push(service);
  });

  const barber = new Barber({
    name: req.body.name,
    description: req.body.description,
    image: req.body.image,
    location: req.body.location,
    serviceCategories: serviceCategories
  });

  // Save Barber in the database
  barber
    .save(barber)
    .then(data => {
      UtilityFunctions.customResponse(data, "Success", "", res)
    })
    .catch(err => {
      UtilityFunctions.customResponse(null, "", err.message || "Some error occurred while creating the Barber.", res.status(500))
    });
};
// Retrieve all Barbers from the database.
exports.findAll = (req, res) => {
  const name = req.query.name;
  var condition = name ? { name: { $regex: new RegExp(name), $options: "i" } } : {};
  Barber.find(condition)
    .then(data => {
      console.log(res)
      UtilityFunctions.customResponse(data, "Success", "", res)
    })
    .catch(err => {
      UtilityFunctions.customResponse(null, "", err.message || "Some error occurred while retrieving Barbers.", res.status(500))
    });
};

// Retrieve all Barbers from the database.
exports.findPopularShops = (req, res) => {

  const count = req.query.count;
  let condition = { isPopularShop: true };
  Barber.find(condition).limit(count)
    .then(data => {
      UtilityFunctions.customResponse(data, "Success", "", res)
    })
    .catch(err => {
      UtilityFunctions.customResponse(null, "", err.message || "Some error occurred while retrieving Barbers.", res.status(500))
    });
};


// Find a single Barber with an id
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
// Update a Barber by the id in the request
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
// Delete a Barber with the specified id in the request
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
// Delete all Barbers from the database.
exports.deleteAll = (req, res) => {
  Barber.deleteMany({})
    .then(data => {
      res.send({
        message: `${data.deletedCount} Barber were deleted successfully!`
      });
    })
    .catch(err => {
      res.status(500).send({
        message:
          err.message || "Some error occurred while removing all Barbers."
      });
    });
};
// Find all available Barbers
exports.findAllAvailable = (req, res) => {
  Barber.find({ isAvalable: true })
    .then(data => {
      res.send(data);
    })
    .catch(err => {
      res.status(500).send({
        message:
          err.message || "Some error occurred while retrieving barbers."
      });
    });
};