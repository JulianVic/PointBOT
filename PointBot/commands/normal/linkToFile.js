const {MessageAttachment} = require("discord.js")
module.exports = {
	data:{
        name: "linktofile",
        aliases: ["l2f"],
        description: "Link to a file",
        usage: "linkToFile <link>",
        example: "linkToFile https://www.google.com/",
	}, 
	async execute(bot, message, args) {
        let link = args[0]
        if(!link) return message.channel.send("Please provide a link")
        let attachment = new MessageAttachment(link)
        message.channel.send({files: [attachment]}) 
}};