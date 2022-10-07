const guildSchema = require("../models/guildSchema")
const {prefix} = require("../config.json")  
module.exports.run = async (bot, guild)=>{
//Register guild
	 guildSchema.create({
		guildID : guild.id,
		});
//Register guild
};   