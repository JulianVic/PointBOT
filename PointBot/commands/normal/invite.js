const {MessageEmbed} = require("discord.js")

module.exports = {
	data:{
		name: "invite",
        aliases : ["invitelink"],
        description : "Invite link",
        usage : "invite",
        example: "invite",
	}, 
	async execute(bot, message, args) {
        if(message.author.id !== "491212266558193679") return;
        const embed = new MessageEmbed()
        .setTitle("Hey! click here")
        .setColor("RANDOM")
        .setDescription("Invite!")
        .setThumbnail("https://yt3.ggpht.com/-YwMpHcK-stA/AAAAAAAAAAI/AAAAAAAAAAA/oM7Sx_zO8S8/s900-c-k-no-mo-rj-c0xffffff/photo.jpg")
        .setURL("https://discord.com/oauth2/authorize?client_id=923707327918506014&permissions=8&scope=bot%20applications.commands")
		message.channel.send({embeds: [embed]})
	
	},
};