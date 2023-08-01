
module.exports = mongoose => {
    var schema = mongoose.Schema(
        {
            name: String,
            description: String,
            location: String,
            image: String,
            isAvailable: Boolean,
            isPopularShop: Boolean,
            serviceCategories: [
                {
                    categoryId: String,
                    services: [String]
                }
            ]
        },
        { timestamps: true }
    );

    schema.method("toJSON", function () {
        const { __v, _id, ...object } = this.toObject();
        object.id = _id;
        return object;
    });

    const Barber = mongoose.model("barbers", schema);
    return Barber;
};