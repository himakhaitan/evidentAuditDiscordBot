const { Schema, model } = require("mongoose");

const UserSchema = new Schema({
    username: {
        type: String,
        required: true,
    },
    nickname: {
        type: String,
    },
    discord_id: {
        type: String,
        required: true,
    },
    discriminator: {
        type: String,
        required: true,
    },
    point: {
        type: Number,
        default: 0,
    }
})


const User = model("User", UserSchema);

module.exports = User;
