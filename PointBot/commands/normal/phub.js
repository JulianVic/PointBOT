const {MessageAttachment, MessageEmbed} = require("discord.js")

module.exports = {
	data:{
		name: "phub",
        aliases: ["phubcomment", "commentphub", "pornhubcomment", "phcomment"],
        description: "Create a comment in Pornhub",
        usage: "phub <text>",
        example: "phub This is a comment",
	}, 
	async execute(bot, message, args) {
        message.delete()
        let txt = args.join("%20")
        if(!txt) return message.channel.send("```Put something```")
        let autor = message.member
        let attachment = await new MessageAttachment(`https://nekobot.xyz/api/imagegen?type=phcomment&image=${message.author.displayAvatarURL()}&text=${txt}&username=${autor.nickname}&raw=1`, "hola.png")
        await message.channel.send({
            files: [attachment]
          })
	},
};