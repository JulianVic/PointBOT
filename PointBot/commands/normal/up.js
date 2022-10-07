const {MessageEmbed} = require("discord.js");
const { Linter } = require("eslint");

module.exports = {
	data:{
		name: "up",
        aliases : ["uplink"],
        description : "UPlink",
        usage : "up",
        example: "up",
	}, 
	async execute(bot, message, args) {
        const embed = new MessageEmbed()
        .setTitle("Hey! click here")
        .setColor("RANDOM")
        .setDescription("The UP website!")
        .setThumbnail("https://yt3.ggpht.com/-YwMpHcK-stA/AAAAAAAAAAI/AAAAAAAAAAA/oM7Sx_zO8S8/s900-c-k-no-mo-rj-c0xffffff/photo.jpg")
        .setURL("https://www.upchiapas.edu.mx")
		message.channel.send({embeds: [embed]})
	},
};