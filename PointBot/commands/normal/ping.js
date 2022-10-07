const {MessageEmbed, MessageAttachment} = require("discord.js")
const hd = require("humanize-duration");
module.exports = {
	data:{
		name: "ping",
        aliases: ["pong", "latency", "ms"],
		description: "See the latency of the bot",
		usage: "ping",
		example: "ping",
	}, 
	async execute(bot, message, args) {
		let uptime = hd(bot.uptime, {round: true, delimiter: ", ", largest: 4, units: ["y", "mo", "w", "d", "h", "m", "s"]});
		if(message.author.id === "491212266558193679") message.channel.send(" ```Uptime: "+uptime+" \nRAM: "+(process.memoryUsage().heapUsed / 1024 / 1024).toFixed(2) +" MB``` ")

		message.channel.send("```🏓 Pong! "+bot.ws.ping+" ms```")
	
    	},
};