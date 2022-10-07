const {MessageAttachment} = require("discord.js")
module.exports = {
	data:{
		name: "rae",
        aliases: ["dicctionary", "meaning"],
        description: "Search the meaning of a word",
        usage: "rae <word>",
        example: "rae crotolamo",
	}, 
	async execute(bot, message, args) {
    if(args > 1) return message.reply("Just a word")
    const word = args[0]
    if(!word) return message.reply("```Put something```")
    let rae = `https://dle.rae.es/${word}?m=form`
    message.reply(rae)
	},
};