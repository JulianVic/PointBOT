const {MessageEmbed} = require("discord.js")

module.exports = {
	data:{
		name: "clear",
        aliases : ["del", "bulkdelete"],
        description : "Clear messages",
        usage : "clear <amount>",
        example: "clear 100",
	}, 
	async execute(bot, message, args) {
    if(!message.guild) return 
    if (!message.channel.permissionsFor(message.member).has("MANAGE_MESSAGES")) return message.reply("```Insfufficient permissions```")
    if (!message.channel.permissionsFor(message.guild.me).has("MANAGE_MESSAGES")) return message.reply("```I need the permission to manage messages```");
    if (!args[0] || (isNaN(args[0]))) return message.reply('```How many messages should I delete? Specify it please.```');
    if(args[0] < 1 || args[0] > 100) return message.channel.send("```I just can delete from 1 to 100 messages!```")
    let enteros = parseInt(args[0])
    let menosElMio = await message.channel.messages.fetch({before:message.id, limit:enteros})
       let mensajes = await message.channel.bulkDelete(menosElMio).catch(() => null)
       if(!mensajes) return message.reply("```Can't delete messsages older than 14 days```")    

       let cantidad = mensajes.size
        await message.reply("```"+cantidad+ " messages were successfully deleted```").then(m => {setTimeout(()=> m.delete().catch(() => null), 10e3)})
        await setTimeout(() =>{
            message.delete().catch(() => null)
        }, 10e3)
	},
};
// let obj =  {"DiscordAPIError: Unknown Message":"Unknown Message"}