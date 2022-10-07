const {MessageEmbed} = require("discord.js")
const hastebin = require("hastebin-paste");

module.exports = {
	data:{
		name: "numbertobin",
        aliases : ["ntob", "ntobin"],
        description : "Converts a number to binary",
        usage : "numberToBin <number>",
        example: "numberToBin 255",
	}, 
	async execute(bot, message, args) {
        let number = args[0]
        if(!number) return message.channel.send("```Please provide a number```")
        if(isNaN(number)) return message.channel.send("```Please provide a number```")
        let numero = parseInt(number)
        let bin = (numero).toString(2)
        let embed = new MessageEmbed()
        .setTitle("Number to Binary")
        .setColor("RANDOM")
        .addField("Number", number)
        .addField("Binary", bin)
        message.channel.send({embeds: [embed]})        

}};