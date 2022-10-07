const sgb = require("steam-game-browser");
const { MessageEmbed } = require("discord.js");
module.exports = {
	data:{
		name: "steam",
		aliases : ["ssteam"],
		description : "Searches for a game on steam",
		usage : "steam <game>",
		example: "steam Grand Theft Auto V",
		example2: "steam 271590",
	}, 
	async execute(bot, message, args) {
		let search = args.join(" ");
		if(!search) return message.channel.send("```Please enter a game to search for!```");
		let arr = ["ultimate bundle"]
		let messageContent = message.content.toLowerCase();
		if(arr.some(x => messageContent.includes(x))) {
			search = arr.map(x => search.replace(x, "")).join(" ");
			
		}
		if(!isNaN(search)) {
			sgb.searchById(search, (err, data) => {
				if(err) return message.channel.send("```Error: "+err+"```");
				try { 
					const embed = new MessageEmbed()
					.setColor("RANDOM")
					.setTitle(data.name +" | ID: "+ data.steam_appid)
					.setThumbnail("https://upload.wikimedia.org/wikipedia/commons/thumb/8/83/Steam_icon_logo.svg/480px-Steam_icon_logo.svg.png")
					data.header_image? embed.setImage(data.header_image): embed.setThumbnail("https://upload.wikimedia.org/wikipedia/commons/thumb/c/c1/Steam_2016_logo_black.svg/2560px-Steam_2016_logo_black.svg.png");
					data.website? embed.setURL(data.website) : null; 
					data.short_description?embed.setDescription(data.short_description):embed.setDescription("No description available")
					data.required_age?embed.addField("Required Age", data.required_age, true):null;			
					data.is_free? embed.addField("Is free?", Boolean(data.is_free)+" ", true) :null
					data.developers? embed.addField("Developers", data.developers.join(", "), true) : null;
					data.publishers? embed.addField("Publishers", data.publishers.join(", "), true) : null;
					embed.addField("ㅤ", "ㅤ", false);
					data.price_overview? embed.addField("Price Overview", `- Currency: ${data.price_overview.currency}\n- Initial: ${data.price_overview.initial}\n- Discount: ${data.price_overview.discount_percent}%\n- Final: ${data.price_overview.final}\n- Final formatted: ${data.price_overview.final_formatted}`, false) : null;
					embed.addField("ㅤ", "ㅤ", false);
					data.supported_languages? embed.addField("Supported Languages", data.supported_languages, true) : null;
					data.categories? embed.addField("Categories", data.categories.map(c => c.description).join(", "), true) : null;
					data.genres? embed.addField("Genres", data.genres.map(c => c.description).join(", "), true) : null;
					data.release_date? embed.setFooter({text: `Release Date • ${data.release_date.date}`, iconURL: message.author.displayAvatarURL({format: "png", dynamic: true})}) : null;
					message.channel.send({embeds:[embed]}) 
				} catch (error) {
					message.channel.send("```Steam API ERROR, try with another game```")			
				}
				return;
			})
		}else{
			sgb.searchByName(search, (err, data) => {
				if(err) return message.channel.send("```Error: "+err+"```");
				try { 
					const embed = new MessageEmbed()
					.setColor("RANDOM")
					.setTitle(data.name +" | ID: "+ data.steam_appid)
					.setThumbnail("https://upload.wikimedia.org/wikipedia/commons/thumb/8/83/Steam_icon_logo.svg/480px-Steam_icon_logo.svg.png")
					data.header_image? embed.setImage(data.header_image): embed.setThumbnail("https://upload.wikimedia.org/wikipedia/commons/thumb/c/c1/Steam_2016_logo_black.svg/2560px-Steam_2016_logo_black.svg.png");
					data.website? embed.setURL(data.website) : null; 
					data.short_description?embed.setDescription(data.short_description):embed.setDescription("No description available")
					data.required_age?embed.addField("Required Age", data.required_age, true):null;			
					data.is_free? embed.addField("Is free?", Boolean(data.is_free)+" ", true) :null
					data.developers? embed.addField("Developers", data.developers.join(", "), true) : null;
					data.publishers? embed.addField("Publishers", data.publishers.join(", "), true) : null;
					embed.addField("ㅤ", "ㅤ", false);
					data.price_overview? embed.addField("Price Overview", `- Currency: ${data.price_overview.currency}\n- Initial: ${data.price_overview.initial}\n- Discount: ${data.price_overview.discount_percent}%\n- Final: ${data.price_overview.final}\n- Final formatted: ${data.price_overview.final_formatted}`, false) : null;
					embed.addField("ㅤ", "ㅤ", false);
					data.supported_languages? embed.addField("Supported Languages", data.supported_languages, true) : null;
					data.categories? embed.addField("Categories", data.categories.map(c => c.description).join(", "), true) : null;
					data.genres? embed.addField("Genres", data.genres.map(c => c.description).join(", "), true) : null;
					data.release_date? embed.setFooter({text: `Release Date • ${data.release_date.date}`, iconURL: message.author.displayAvatarURL({format: "png", dynamic: true})}) : null;
					message.channel.send({embeds:[embed]}) 
				} catch (error) {
					message.channel.send("```Steam API ERROR, try with another game```")			
				}
			})
		}

	}	};
