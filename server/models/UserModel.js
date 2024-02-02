
const mongoose = require("mongoose")

const Schema = mongoose.Schema

const UserType = {
    username: {
        type: String,
        require: true,
        unique: true
    },
    password: {
        type: String,
        require: true,
    },
    email: {
        type: String,
        require: true,
        unique:true
    },
    avatar:String,

}

const UserModel = mongoose.model("user", new Schema(UserType))

module.exports = UserModel