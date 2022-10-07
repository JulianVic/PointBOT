const {MessageEmbed} = require("discord.js")
const evalSchema = require("../../models/evalSchema") 
module.exports = {
	data:{
		name: "pop",
        aliases: ["remove", "pope", "removeeval"],
        description: "Remove someone from eval array",
        usage: "pop <User>",
        example: "pop Point",
	}, 
	async execute(bot, message, args) {
    if(message.author.id !== "491212266558193679") return;
    const userID = message.mentions.users.first()?.id || args[0]
    if (!userID) return message.reply("```Please mention a user```");
    const userExists = await evalSchema.findOne({ userID });
    if (!userExists) return message.reply("```User not found in database```");
    await userExists.remove();
    message.channel.send("```Removed "+userID.toString()+" from the database```");
	},
};