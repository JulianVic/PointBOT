const mongoose = require("mongoose")

const evalSchema = new mongoose.Schema({
    userID: {type:String, require: true},
})
module.exports = mongoose.model("evalusers", evalSchema)    