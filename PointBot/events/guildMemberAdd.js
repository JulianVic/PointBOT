const {MessageAttachment} = require("discord.js")
module.exports.run = async (bot, member)=>{
	if(member.guild.id === "999043905695797298"){
		member.setNickname("u/"+member.user.username)
		let channel = member.guild.channels.resolve("999043905695797301")
		const att = new MessageAttachment("https://distok.top/stickers/749043879713701898/749044136589393960.gif", "gif.gif")
		let array = [`${member} just landed`, `${member} has joined at the guild`, `${member} welcome to ${member.guild.name}`, `Welcome ${member}, do you bring pizza?`, `${member} just joined`, `${member} say Hi!`]
		let random = array[Math.floor(Math.random() * array.length)]
		channel.send({content: random+" please, check <#999046171391709306> and <#999058055138377788>", files: [att]})		
	}
};   