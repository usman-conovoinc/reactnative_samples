
module.exports = mongoose => {
    var schema = mongoose.Schema(
        {
            black: String,
            white: String,
            error: String,
            success: String,

            editableColorSet: {
                five: String,
                four: String,
                three: String,
                two: String,
                one: String
            },
            mainTheme: {
                five: String,
                four: String,
                three: String,
                two: String,
                one: String
            }

        },
        { timestamps: true }
    );

    schema.method("toJSON", function () {
        const { __v, _id, ...object } = this.toObject();
        object.id = _id;
        return object;
    });

    const Theme = mongoose.model("theme", schema);
    return Theme;
};