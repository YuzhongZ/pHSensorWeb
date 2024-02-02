
const mongoose = require("mongoose")

const Schema = mongoose.Schema


const DataType = {
    username: {
        type: String,
        required: true,
    },
    email: {
        type: String,
        required: true,
    },
    date: {
        type: String,
        required: true,
    },
    ph: {
        type: Number,
        required: true
    },
    latitude: {
        type: Number,
        required:true
    },
    longitude: {
        type: Number,
        required: true
    },
    address: {
        type: String,
        default: ""
    },
    isShared: {
        type:Boolean,
        default: true
    }

}

const PhDataModel = mongoose.model("phData", new Schema(DataType))

module.exports = PhDataModel