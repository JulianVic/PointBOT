const mongoose = require("mongoose");

const guildSchema = new mongoose.Schema({
  guildID: { type: String, require: true, unique: true },
  prefix: { type: String, default: null },
});

const model = mongoose.model("guilds", guildSchema);

module.exports = model;