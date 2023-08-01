
module.exports = mongoose => {
    var schema = mongoose.Schema({
        userId: String,
        email: String,
        phoneNumber: String,
        shop: String,
        time: String,
        services: [String]
    }, { timestamps: true }
    );

    schema.method("toJSON", function () {
        const { __v, _id, ...object } = this.toObject();
        object.id = _id;
        return object;
    });

    const Booking = mongoose.model("bookings", schema);
    return Booking;
};