const mongoose = require("mongoose");

const UserSchema = mongoose.Schema({
    segment_name: String,
    schema: Array
});

const UserModel = mongoose.model("Adduser", UserSchema);

module.exports = UserModel;
