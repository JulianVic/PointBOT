const guildModel = require("../models/guildSchema")
const config = require("../config.json")
module.exports.run = async (bot, message)=>{
	if(message.author.bot) return;
	let prefix = config.prefix
	
	if(message.guild){
		let guild = await guildModel.findOne({guildID:message.guild.id});
		if(guild.prefix){ 
			prefix = guild.prefix
		}
	} 
	const args = message.content.slice(prefix.length).trim().split(/ +/g);
	let RegMention = new RegExp(`^<@!?${bot.user.id}>( |)$`);
	let noInvites = new RegExp(`/(https?:\/\/)?(www\.)?(discord\.(gg|io|me|li)|discordapp\.com\/invite)\/.+[a-z]/g ( |)$`).test(message.content)
	if(noInvites) message.delete()

	if (message.content.match(RegMention)) return message.channel.send("```Hey, wassup!!? my prefix is: "+prefix+"```")

	if(!message.content.startsWith(prefix)) return
    const command = args.shift().toLowerCase(); 
	const cmd = bot.commands.get(command) || bot.commands.find(cmd => cmd.data.aliases && cmd.data.aliases.includes(command))
		if(!cmd) return;
	cmd.execute(bot, message, args)
    message.ejecutoComando = true 
};  
