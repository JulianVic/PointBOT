const mongoose = require("mongoose")

const usersSchema = new mongoose.Schema({
    userID: {type:String, require: true},
    canalID: {type: String, require: true}
})
module.exports = mongoose.model("canalvoz", usersSchema)    