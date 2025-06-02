const mongoose = require("mongoose")
const {Schema} = mongoose

const photoSchema = new Schema({
    image: String,
    title: String,
    like: Array,
    comments: Array,
    useId: mongoose.isObjectId,
    userName: String,
}, {
    timestamps: true
})

const photo = mongoose.model("Photo", photoSchema)

module.exports = photo