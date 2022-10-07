const {MessageEmbed} = require("discord.js")
const guildSchema = require("../../models/guildSchema")
module.exports = {
	data:{
		name: "setprefix",
        aliases: ["prefix", "newprefix"],
        description: "Change the prefix of the bot",
        usage: "setprefix <prefix>",
        example: "setprefix !",
	}, 
	async execute(bot, message, args) {
    if(!message.guild) return
    if(!message.member.permissions.has("MANAGE_GUILD")) return; 
    let server = message.guild
    if(!server) return;
    let prefix = args[0]
    if(!prefix) return message.reply("```Please, put the new prefix```")
    if(prefix.length > 3) return message.reply("```The prefix can't be longer than 3 characters```")
    if(prefix.length < 1) return message.reply("```The prefix can't be shorter than 1 character```")
        let guild = await guildSchema.findOne({server})
        if(guild){
            guildSchema.findOneAndUpdate({server}, {prefix}).exec().catch(console.log)
        }else{  
            guildSchema.create({
                guildID: message.guild.id,
                guildName: message.guild.name,
                prefix
            }).catch(console.log)
        }
        await message.reply(`The prefix has been updated: ${prefix}`)
	},
};