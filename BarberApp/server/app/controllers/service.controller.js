const { barber } = require("../models");
const db = require("../models");
const UtilityFunctions = require("../utility/UtilityFunctions")

const Barber = db.barber;
const Category = db.category;
const Service = db.service;


// Create and Save a new Service
exports.create = (req, res) => {

    // Validate request
    if (!req.body.name) {
        UtilityFunctions.customResponse(null, "", "Content can not be empty!", res.status(400))
        return;
    }
    // Create a Service
    /*
    const services = [
        {
            "name": "Men’s haircut",
            "image": "https://media.istockphoto.com/photos/styling-hair-by-professional-hairdresser-picture-id1040997928?k=20&m=1040997928&s=612x612&w=0&h=JdNnP5zMEAPaQ48-67NnRXD4JlyVga1i2wJSwf0LoHw=",
            "price": "19",
            "categoryId": "627cc08014067993ba49af37",
            "currency": "$",
        },

        {
            "name": "Women’s haircut (including wash+cut+style)",
            "image": "https://media.istockphoto.com/photos/hair-cutting-during-pandemic-picture-id1225156964?k=20&m=1225156964&s=612x612&w=0&h=MRSjCs7srUUt-lZk8h3I_gjKPNBI-hR-90jkvA_f8_c=",
            "price": "45",
            "categoryId": "627cc08014067993ba49af37",
            "currency": "$",
        },

        {
            "name": "Boys’s haircut (under 8)",
            "image": "https://media.istockphoto.com/photos/year-old-getting-a-haircut-picture-id825461082?k=20&m=825461082&s=612x612&w=0&h=LtN3aR49MiCefCYkfJVAsV-1Zn5ha8Mm8ns-gxkc6gs=",
            "price": "17",
            "categoryId": "627cc08014067993ba49af37",
            "currency": "$",
        },

        {
            "name": "Girl’s haircut (under 8)",
            "image": "https://media.istockphoto.com/photos/toddler-child-getting-his-first-haircut-picture-id491315054?k=20&m=491315054&s=612x612&w=0&h=UI2XcwwRbesL-2jeEKuBN6zr2Rlj4qY-5h0uNp_N7bY=",
            "price": "20",
            "categoryId": "627cc08014067993ba49af37",
            "currency": "$",
        },

        {
            "name": "Military member’s haircut",
            "image": "https://media.istockphoto.com/photos/beautician-using-electric-clippers-picture-id1173388915?k=20&m=1173388915&s=612x612&w=0&h=1rTgferf0xrQjeqjJTLTf2jxe6LmDJxqDgcQqaioMMY=",
            "price": "17",
            "categoryId": "627cc08014067993ba49af37",
            "currency": "$",
        },

        {
            "name": "Beard trim",
            "image": "https://media.istockphoto.com/photos/beard-grooming-picture-id506514230?k=20&m=506514230&s=612x612&w=0&h=YbxQjEWFBHJd2VIh8kXUCe_QhSlDprR78JCFm2E3Z2Q=",
            "price": "20",
            "categoryId": "627cc08014067993ba49af37",
            "currency": "$",
        },

        {
            "name": "Men’s head shave",
            "image": "https://media.istockphoto.com/photos/stylist-shaves-mans-head-picture-id495666415?k=20&m=495666415&s=612x612&w=0&h=mrgeZLQoCYffedBo6PLYPLx4iOxxa_QOtI68FT08zgY=",
            "price": "20",
            "categoryId": "627cc08014067993ba49af37",
            "currency": "$",
        },

        {
            "name": "Regular shave (incl. hot towel lather shave)",
            "image": "https://media.istockphoto.com/photos/skillful-hairdresser-using-blade-for-shaving-beard-picture-id640276472?k=20&m=640276472&s=612x612&w=0&h=Jh8RFQiCdlzwQr5nRhSvONT07MOmubxmbINLK2Alz6M=",
            "price": "20",
            "categoryId": "627cc08014067993ba49af39",
            "currency": "$",
        },

        {
            "name": "Release stress shave (incl. regular shave & 10min facial)",
            "image": "https://media.istockphoto.com/photos/at-the-barbers-picture-id1219172973?k=20&m=1219172973&s=612x612&w=0&h=U9TDzY2pqhkVf29WszEol2v-5qDoZFbiDrxfkJ41Z5s=",
            "price": "30",
            "categoryId": "627cc08014067993ba49af39",
            "currency": "$",
        },

        {
            "name": "Men’s hair colouring",
            "image": "https://media.istockphoto.com/photos/cool-attitude-picture-id1173159452?k=20&m=1173159452&s=612x612&w=0&h=ySIs8teManrkE1HwCJvEC1Y12rhprzYay-0TSqF_5x4=",
            "price": "40",
            "categoryId": "627cc08014067993ba49af38",
            "currency": "$",
        },

        {
            "name": "Women’s hair colouring",
            "image": "https://media.istockphoto.com/photos/blond-woman-with-long-and-shiny-hair-picture-id1189883719?k=20&m=1189883719&s=612x612&w=0&h=MT54YPnNMqcttqQ7kuyeyVZHzoh4XmTVC__NGZkhhkI=",
            "price": "75",
            "categoryId": "627cc08014067993ba49af38",
            "currency": "$",
        }]

    services.forEach(element => {
        const service = new Service({
            name: element.name,
            image: element.image,
            price: element.price,
            categoryId: element.categoryId,
            currency: element.currency
        });

        service.save(service)
    });
    */

    const service = new Service({
        name: req.body.name,
        image: req.body.image,
        price: req.body.price,
        categoryId: req.body.categoryId,
        currency: req.body.currency
    });

    // Save Service in the database
    service.save(service)
        .then(data => {
            UtilityFunctions.customResponse(data, "Success", "", res)
        })
        .catch(err => {
            UtilityFunctions.customResponse(null, "", err.message || "Some error occurred while creating the Service.", res.status(500))
        });
};

// Retrieve all Services from the database.
exports.findAll = (req, res) => {
    const categoryId = req.query.categoryId;
    var condition = categoryId ? { categoryId: { $regex: new RegExp(categoryId), $options: "i" } } : {};
    Service.find(condition)
        .then(data => {
            UtilityFunctions.customResponse(data, "Success", "", res)
        })
        .catch(err => {
            UtilityFunctions.customResponse(null, "", err.message || "Some error occurred while retrieving Services.", res.status(500))
        });
};

// Find a single Service with an id
exports.findOne = (req, res) => {
    const id = req.params.id;
    Service.findById(id)
        .then(data => {
            if (!data) {
                UtilityFunctions.customResponse(null, "", "Not found Service with id " + id, res.status(404));
            } else {
                UtilityFunctions.customResponse(data, "Success", "", res)
            }
        })
        .catch(err => {
            UtilityFunctions.customResponse(null, "", "Error retrieving Service with id=" + id, res.status(500))
        });
};

function sortByName(array) {
    return array.sort((a, b) => a.category['name'].localeCompare(b.category['name']))
}

// Find a multiple Category with an id
exports.servicesByCategories = async (req, res) => {
    try {

        const id = req.params.id
        const barber = await Barber.findOne({ _id: id });

        if (barber.serviceCategories.length > 0) {

            let serviceCategories = []
            // const promises = barber.serviceCategories.map(async cat => {

            for (let index = 0; index < barber.serviceCategories.length; index++) {

                const cat = barber.serviceCategories[index];

                const categoryId = cat.categoryId
                const serviceIds = cat.services
                const category = await Category.findById(categoryId)
                let services = []
                let serviceQueryArray = []

                serviceIds.forEach(serviceId => {
                    // console.log(serviceId)
                    serviceQueryArray.push({ _id: serviceId })
                });

                var query = { $or: serviceQueryArray }
                services = await Service.find(query)

                let data = { 'category': category, 'services': services }
                serviceCategories.push(data)
            }

            // })


            // const _ = await Promise.all(promises)
            sortByName(serviceCategories)
            UtilityFunctions.customResponse(serviceCategories, "Success", "", res)
        } else {
            UtilityFunctions.customResponse(null, "", "Services are not available ", res.status(404));
        }

    } catch (error) {
        console.log(error)
        UtilityFunctions.customResponse(null, "", "Error retrieving Services", res.status(500))
    }
};

// Update a Service by the id in the request
exports.update = (req, res) => {
    if (!req.body) {
        UtilityFunctions.customResponse(null, "", "Data to update can not be empty!", res.status(400));
    }
    const id = req.params.id;
    Service.findByIdAndUpdate(id, req.body, { useFindAndModify: false })
        .then(data => {
            if (!data) {
                UtilityFunctions.customResponse(null, "", "Cannot update Service with id=${id}. Maybe Service was not found!", res.status(404));
            } else {
                UtilityFunctions.customResponse(data, "Service was updated successfully.", "", res);
            }
        })
        .catch(err => {
            UtilityFunctions.customResponse(null, "", "Error updating Service with id=" + id, res.status(500));
        });
};

// Delete a Service with the specified id in the request
exports.delete = (req, res) => {
    const id = req.params.id;
    Service.findByIdAndRemove(id)
        .then(data => {
            if (!data) {
                res.status(404).send({
                    message: `Cannot delete Service with id=${id}. Maybe Service was not found!`
                });
            } else {
                res.send({
                    message: "Service was deleted successfully!"
                });
            }
        })
        .catch(err => {
            res.status(500).send({
                message: "Could not delete Ser with id=" + id
            });
        });
};

// Delete all Services from the database.
exports.deleteAll = (req, res) => {
    Service.deleteMany({})
        .then(data => {
            res.send({
                message: `${data.deletedCount} Service were deleted successfully!`
            });
        })
        .catch(err => {
            res.status(500).send({
                message:
                    err.message || "Some error occurred while removing all Services."
            });
        });
};