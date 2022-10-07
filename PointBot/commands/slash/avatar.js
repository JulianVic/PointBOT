const {MessageEmbed} = require("discord.js")
const { SlashCommandBuilder } = require('@discordjs/builders');

module.exports = {
	data : new SlashCommandBuilder()
		.setName("avatar")
		.setDescription("See the pp of an user")
		.addUserOption(option => option.setName("target").setDescription("The user"))
		,
	async execute(bot, interaction) {
		let user = interaction.options.getUser("target") || interaction.user 
		const embed = new MessageEmbed()
		.setColor("GREEN")
		.setImage(user.displayAvatarURL({dynamic:true, size:2048}));
		interaction.reply({embeds: [embed]})
	
	},
};