const guildSchema = require("../models/guildSchema")
const {prefix} = require("../config.json");  
const { findOneAndDelete } = require("../models/guildSchema");
module.exports.run = async (bot, guild)=>{
//Deleted guild

        guildSchema.findOneAndDelete({
            guildID: guild.id
        }).exec().catch(console.log)
//Deleted guild
};   