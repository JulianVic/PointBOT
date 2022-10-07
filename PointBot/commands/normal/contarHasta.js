const {MessageEmbed} = require("discord.js")
const hastebin = require("hastebin-paste");

module.exports = {
	data:{
		name: "sumarhasta",
        aliases : ["contarhasta", "sh", "sumarto"],
        description : "Converts a binary to number",
        usage : "sumarhasta <number> <number> ",
        example: "sumarhasta 1 2",
	}, 
	async execute(bot, message, args) {
        let num1 = args[0]
        let num2 = args[1]
    

}};