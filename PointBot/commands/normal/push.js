const {MessageEmbed} = require("discord.js")
const evalSchema = require("../../models/evalSchema") 
module.exports = {
	data:{
		name: "push",
        aliases: ["add", "pushe", "addeval"],
        description: "Push someone to eval array",
        usage: "push <User>",
        example: "addeval Point",
	}, 
	async execute(bot, message, args) {
    if(message.author.id !== "491212266558193679") return;
    const userID = message.mentions.users.first()?.id || args[0]
    if (!userID) return message.reply("```Please mention a user```");

    let user = await evalSchema.findOne({ userID });
    if (user) return message.reply("```User already in database```");

    user = new evalSchema({ userID });
    await user.save();

    message.reply("```User added to database```");
	},
};