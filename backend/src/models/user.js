const mongoose = require("mongoose");

const userSchema = mongoose.schema({
    userName: {
        type: "string",
        required: true,
    },
    password: {
        type: "string",
        required: true,
    },
    email: {
        type: "string",
        required: true,
    }
});

const userModal = mongoose.model("User", userSchema);

module.exports = {
    userModal
} 