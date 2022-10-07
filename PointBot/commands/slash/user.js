const {MessageEmbed, Message} = require("discord.js")
const { SlashCommandBuilder } = require('@discordjs/builders');

module.exports = {
	data : new SlashCommandBuilder()
		.setName("user")
		.setDescription("See the info of an user")
		.addUserOption(option => option.setName("target").setDescription("The user"))
		,
	async execute(bot, interaction) {
		let user = interaction.options.getMember("target") || interaction.member 
        let activity = user.presence?.activities?.[0] || "No activities";
        let nickname = user.nickname ? user.nickname : "``Without nickname``"
        let status1 = { 
            "online":"🟢 Online",
            "dnd":"⛔ Do Not Disturb",
            "idle":"🌙   Idle",
            "offline":"⚪ Offline",
            "No":"⚪ Offline"
        }
        let type = { 
            "LISTENING":"Listening",
            "WATCHING":"Watching",
            "PLAYING":"Playing",
            "CUSTOM":"Custom",
            "STREAMING":"Streaming",
            "COMPETING":"Competing",
            "undefined": "<:no:999432149516169368>"
        }
        let qhace = type[activity.type]
        let tieneestado = user.presence?.status || "No";
        let si1 = qhace
        let si = user.presence?.activities?.[0]?.details /*+" from "+ activity.state*/ || "<:no:999432149516169368>";
        let roles = user.roles.cache.filter(r => r.id != interaction.guild.id).map(r => r.name).join("``, ``")
		const embed = new MessageEmbed()
		.setColor("RANDOM")
		.setThumbnail(user.user.displayAvatarURL({dynamic:true, size:2048}))
        .setTitle(`${user.user.username}'s info`)
        .addField("Nickname", nickname, true)
        .addField(`Tag:`, user.user.tag, true)
        .addField("ID:", user.user.id, true)
        .addField("User name:", user.user.username, true)
        .addField("Discriminator:", `#${user.user.discriminator}`, true)
        .addField("Status:", " "+status1[tieneestado], true)
        .addField("Activity:", qhace+" ``"+activity+"``", true) 
        .addField("Activity details:", si1+ ": "+si, true)
        .addField("Created at:", user.user.createdAt.toLocaleDateString("es-pe"), true)
        .addField("Joined at:", user.joinedAt.toLocaleDateString("es-pe"), true);
        if(roles.length > 0) embed.addField("Roles:", "``"+roles+"``")
        interaction.reply({embeds: [embed]}) 
	
	},
};