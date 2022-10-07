const {MessageEmbed} = require("discord.js")
const { SlashCommandBuilder } = require('@discordjs/builders');
const guildModel = require("../../models/guildSchema")
const fs = require('fs');
module.exports = {
	data : new SlashCommandBuilder()
		.setName("help")
		.setDescription("See all commands, or get help for a specific command.") 
		.addStringOption(option => 
		option.setName("command").setRequired(false).setDescription("The command to get help for.")
		.addChoices(
			{ name : "avatar", value: "avatar" },
			{ name : "binToNumber", value: "binToNumber" },
			{ name: "clear", value: "clear" },
		//	{ name: "emit", value: "emit" }, 
			{ name: "eval", value: "eval" }, 
			{ name: "haste", value: "haste" }, 
			{ name: "help", value: "help" },
		//	{ name: "invite", value: "invite" },
			{ name: "length", value: "length" }, 
			{ name: "linkToFile", value: "linkToFile" }, 
			{ name: "math", value: "math" },
			{ name: "mp4", value: "mp4" }, 
			{ name: "npm", value: "npm" },
			{ name: "numberToBin", value: "numberToBin" }, 
			{ name: "phub", value: "phub" }, 
			{ name: "ping", value: "ping" },
		//	{ name: "pop", value: "pop" },
		//	{ name: "push", value: "push" },
			{ name: "rae", value: "rae" }, 
			{ name: "replace", value: "replace" }, 
			{ name: "requirements" , value: "requirements" },
			{ name: "setprefix", value: "setprefix" }, 
			{ name: "steam", value: "steam" }, 
			{ name : "user", value: "user" },
			{ name: "up", value: "up" },)
		),
	async execute(bot, interaction) {
		if(interaction.guild){
			let guild = await guildModel.findOne({guildID:interaction.guild.id});
			if(guild.prefix){ 
				prefix = guild.prefix
			}
		} 
		let hay = interaction.options.getString("command")
		let commands = fs.readdirSync("./commands/normal/");
		let slashCommands = fs.readdirSync("./commands/slash/");
		let commandsList = [];
		let slashCommandsList = [];
		for(let i = 0; i < commands.length; i++){
			let command = commands[i].split(".")[0]
			commandsList.push(command)
		}
		for(let i = 0; i < slashCommands.length; i++){
			let command = slashCommands[i].split(".")[0]
			slashCommandsList.push(command)
		}
		if(hay) {
			try {
				let commandFile = `${process.cwd()}/commands/slash/${hay}.js`
				let  comande = require(commandFile)
				let embed1 =  new MessageEmbed()
				.setColor("RANDOM")
				.setTitle(`Help for ${comande.data.name}`)
				.setDescription(comande.data.description)
				.addField("Aliases", comande.data.aliases? comande.data.aliases : "```No aliases```", true)
				.addField("Usage", comande.data.usage? comande.data.usage : "```No usage```", true)
				.addField("Example", comande.data.example? comande.data.example : "```No example```", true)
				interaction.reply({embeds: [embed1]})	
			} catch (error) {
				let commandFile = `${process.cwd()}/commands/normal/${hay}.js`
				let  comande = require(commandFile)
				let embed1 =  new MessageEmbed()
				.setColor("RANDOM")
				.setTitle(`Help for ${comande.data.name}`)
				.setDescription(comande.data.description)
				.addField("Aliases", comande.data.aliases? "```"+comande.data.aliases.join(", ")+"```" : "No aliases", true)
				.addField("Usage", `${comande.data.usage? "```"+prefix+""+comande.data.usage+"```" : "No usage"}`, true)
				.addField("Example", comande.data.example? "```"+prefix+""+comande.data.example+"```" : "No example", true)
				comande.data.example2? embed1.addField("Example 2", "```"+prefix+""+comande.data.example2+"```", true) : null
				interaction.reply({embeds: [embed1]})	
			}

		}else{
			let embed = new MessageEmbed()
			.setDescription("**Commands\nHere are all my commands.**")
			.setColor("RANDOM")
			.addField("Prefix:", `\`\`\`${prefix}\`\`\``, true)
			.addField("Use", `\`\`\`/help <command>\`\`\``, true)
			.addField("Example", `\`\`\`/help help\`\`\``, true)
			.addField("Commands:", `\`\`\`${commandsList.join(", ")}\`\`\``)
			.addField("Slash Commands:", `\`\`\`${slashCommandsList.join(", ")}\`\`\``)
			return interaction.reply({embeds:[embed]})
		
		}
	} }

/*
			for(const subcarpet of fs.readdirSync("./commands/")){
				for (const file of fs.readdirSync(`./commands/${subcarpet}/`)) {
			si = require(`../../commands/${subcarpet}/${file}`)
			 
			let embed = new MessageEmbed()
			.setColor("RANDOM")
			.setTitle(`${si.data.name}`)
			.setDescription(`${si.data.description}`)
			.addField("Usage", `${si.data.usage}`)
			.addField("Aliases", `${hay.data.aliases}`)
			interaction.reply({embeds: [embed]}).catch(() => null )
			}}
*/