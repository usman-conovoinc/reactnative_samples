
module.exports = mongoose => {
    var schema = mongoose.Schema({
        name: String,
        image: String,
        price: String,
        categoryId: String,
        currency: String
    }, { timestamps: true }
    );

    schema.method("toJSON", function () {
        const { __v, _id, ...object } = this.toObject();
        object.id = _id;
        return object;
    });

    const Service = mongoose.model("services", schema);
    return Service;
};