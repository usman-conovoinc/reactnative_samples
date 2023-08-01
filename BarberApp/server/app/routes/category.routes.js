module.exports = app => {
    const categories = require("../controllers/category.controller.js");
    var router = require("express").Router();
    // Create a new category
    router.post("/", categories.create);
    router.get("/getCategories", categories.findAll);
    router.get("/getCategory", categories.findOne);
    // router.get("/getMultiple/:ids", categories.getMultiple)
    router.put("/:id", categories.update);
    router.delete("/:id", categories.delete);
    router.delete("/", categories.deleteAll);

    app.use('/api/categories', router);
};

/*


{
    "name" : "Hair Cut",
    "image" : "https://media.istockphoto.com/photos/barber-using-scissors-and-comb-picture-id640274128?k=20&m=640274128&s=612x612&w=0&h=XuetWJSNoLnN7f1t0CjGqLVi_P7uxdvuLG5iOvs7yjc=",
},

{
    "name" : "Hair Coloring",
    "image" : "https://www.byrdie.com/thmb/FocKzG7YxBVZVb78ixIQ7IN-J1U=/1034x776/smart/filters:no_upscale()/ScreenShot2020-04-17at2.00.20PM-b9d4c652619740ddae6fa6d6c503b41e.png",
},

{
    "name" : "Shave",
    "image" : "https://www.scienceabc.com/wp-content/uploads/ext-www.scienceabc.com/wp-content/uploads/2019/08/Skillful-beautician-preparing-to-shave-stubble-Image-Olena-Yakobchuks.jpg-.jpg",
},

{
    "name" : "Facial",
    "image" : "https://media.istockphoto.com/photos/closeup-of-a-man-receiving-facial-massage-at-the-spa-picture-id517752818?k=20&m=517752818&s=612x612&w=0&h=hck944LOGz5vkdMgpiW3DOxXv70yner_RhBfjMFhVcY=",
},

{
    "name" : "Waxing",
    "image" : "https://media.istockphoto.com/photos/applying-gold-colored-wax-with-spatula-on-womans-face-stock-photo-picture-id1219595426?k=20&m=1219595426&s=612x612&w=0&h=M76gm2EjGBjSvPb-aF3InZuVMtMOq6IlBKAxFUQF8Zk=",
}

*/