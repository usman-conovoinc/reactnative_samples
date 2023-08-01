
module.exports = mongoose => {
    var schema = mongoose.Schema({
        name: String,
        image: String,
    }, { timestamps: true }
    );

    schema.method("toJSON", function () {
        const { __v, _id, ...object } = this.toObject();
        object.id = _id;
        return object;
    });

    const Category = mongoose.model("categories", schema);
    return Category;
};