const config = require("../config.json")  
const guildModel = require("../models/guildSchema")
module.exports.run = async (bot, oldM, newM)=>{
    let prefix = config.prefix
	if(newM.guild){ 
		let guild = await guildModel.findOne({guildID:newM.guild.id});
		if(guild.prefix){
			prefix = guild.prefix
		}
	} 

    if((oldM.content !== newM.content) && newM.content.startsWith(prefix) && !oldM.ejecutoComando){
        bot.emit("messageCreate", newM) 
    }    
};  