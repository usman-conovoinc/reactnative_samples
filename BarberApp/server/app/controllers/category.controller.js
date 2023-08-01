const db = require("../models");
const UtilityFunctions = require("../utility/UtilityFunctions")

const url = require('url');
const querystring = require('querystring');

const Category = db.category;

// Create and Save a new Category
/*
const cats = [{
    "name": "Hair Cut",
    "image": "https://media.istockphoto.com/photos/barber-using-scissors-and-comb-picture-id640274128?k=20&m=640274128&s=612x612&w=0&h=XuetWJSNoLnN7f1t0CjGqLVi_P7uxdvuLG5iOvs7yjc=",
},

{
    "name": "Hair Coloring",
    "image": "https://www.byrdie.com/thmb/FocKzG7YxBVZVb78ixIQ7IN-J1U=/1034x776/smart/filters:no_upscale()/ScreenShot2020-04-17at2.00.20PM-b9d4c652619740ddae6fa6d6c503b41e.png",
},

{
    "name": "Shave",
    "image": "https://www.scienceabc.com/wp-content/uploads/ext-www.scienceabc.com/wp-content/uploads/2019/08/Skillful-beautician-preparing-to-shave-stubble-Image-Olena-Yakobchuks.jpg-.jpg",
},

{
    "name": "Facial",
    "image": "https://media.istockphoto.com/photos/closeup-of-a-man-receiving-facial-massage-at-the-spa-picture-id517752818?k=20&m=517752818&s=612x612&w=0&h=hck944LOGz5vkdMgpiW3DOxXv70yner_RhBfjMFhVcY=",
},

{
    "name": "Waxing",
    "image": "https://media.istockphoto.com/photos/applying-gold-colored-wax-with-spatula-on-womans-face-stock-photo-picture-id1219595426?k=20&m=1219595426&s=612x612&w=0&h=M76gm2EjGBjSvPb-aF3InZuVMtMOq6IlBKAxFUQF8Zk=",
}]
*/

exports.create = (req, res) => {

    // Validate request
    if (!req.body.name) {
        UtilityFunctions.customResponse(null, "", "Content can not be empty!", res.status(400))
        return;
    }
    // Create a Category
    const category = new Category({
        name: req.body.name,
        image: req.body.image,
    });

    // Save Category in the database
    category.save(category)
        .then(data => {
            UtilityFunctions.customResponse(data, "Success", "", res)
        })
        .catch(err => {
            UtilityFunctions.customResponse(null, "", err.message || "Some error occurred while creating the Category.", res.status(500))
        });
};

// Retrieve all Categorys from the database.
exports.findAll = (req, res) => {
    const name = req.query.name;

    var condition = name ? { name: { $regex: new RegExp(name), $options: "i" } } : {};
    Category.find(condition)
        .then(data => {
            console.log(data)
            UtilityFunctions.customResponse(data, "Success", "", res)
        })
        .catch(err => {
            UtilityFunctions.customResponse(null, "", err.message || "Some error occurred while retrieving Categorys.", res.status(500))
        });
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