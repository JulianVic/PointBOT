const {MessageEmbed} = require("discord.js")
const hastebin = require("hastebin-paste");

module.exports = {
	data:{
		name: "bintonumber",
        aliases : ["bton", "btonum", "btonumber"],
        description : "Converts a binary to number",
        usage : "binToNumber <number>",
        example: "binToNumber 255",
	}, 
	async execute(bot, message, args) {
        let binary = args[0]
        if(!binary) return message.channel.send("```Please provide a binary number```")
        if(isNaN(binary)) return message.channel.send("```Please provide a binary number```")
        let bin = parseInt(binary, 2)
        let embed = new MessageEmbed()
        .setTitle("Binary to Number")
        .setColor("RANDOM")
        .addField("Binary", binary)
        .addField("Number", " "+bin)
        message.channel.send({embeds: [embed]})
}};