const sgb = require("steam-game-browser");
const { MessageEmbed } = require("discord.js");
module.exports = {
	data:{
		name: "requirements",
		aliases : ["req", "reqs"],
		description : "See the requirements for a game.",
		usage : "requirements <platform> <game>",
		example: "requirements pc GTA V",
		example2: "requirements mac 271590",
	}, 
	async execute(bot, message, args) {
		let platform = args[0]
		if(!platform) return message.channel.send("Please specify a platform, like PC, Mac, or Linux.")
		let search = args.splice(1).join(" ");
		if(!search) return message.channel.send("```Please enter a game to search for!```");
		let arr = ["ultimate bundle"]
		let messageContent = message.content.toLowerCase();
		if(arr.some(x => messageContent.includes(x))) {
			search = arr.map(x => search.replace(x, "")).join(" ");
			
		}
		if(!isNaN(search)) {
			sgb.searchById(search, (err, data) => {
				if(err) return message.channel.send("```Error: "+err+"```");
				switch (platform) {
					case "pc":
						try { 
							const embed = new MessageEmbed()
							.setColor("RANDOM")
							.setThumbnail("https://upload.wikimedia.org/wikipedia/commons/thumb/8/83/Steam_icon_logo.svg/480px-Steam_icon_logo.svg.png")
							data.header_image? embed.setImage(data.header_image): embed.setThumbnail("https://upload.wikimedia.org/wikipedia/commons/thumb/c/c1/Steam_2016_logo_black.svg/2560px-Steam_2016_logo_black.svg.png");
							data.website? embed.setURL(data.website) : null; 
							data.pc_requirements? embed.setTitle("PC Requirements") : null;
							data.pc_requirements? embed.setDescription(data.pc_requirements.minimum+"\n\n"+data.pc_requirements.recommended) : null;
							message.channel.send({embeds:[embed]}) 
						} catch (error) {
							messsage.channel.send("```Steam API ERROR, try another game```");			
						}
						break;
					case "mac":
						try { 
							const embed = new MessageEmbed()
							.setColor("RANDOM")
							.setThumbnail("https://upload.wikimedia.org/wikipedia/commons/thumb/8/83/Steam_icon_logo.svg/480px-Steam_icon_logo.svg.png")
							data.header_image? embed.setImage(data.header_image): embed.setThumbnail("https://upload.wikimedia.org/wikipedia/commons/thumb/c/c1/Steam_2016_logo_black.svg/2560px-Steam_2016_logo_black.svg.png");
							data.website? embed.setURL(data.website) : null; 
							data.mac_requirements? embed.setTitle("MAC Requirements") : null;
							data.mac_requirements? embed.setDescription(data.mac_requirements.minimum+"\n\n"+data.mac_requirements.recommended) : null;
							message.channel.send({embeds:[embed]}) 
						} catch (error) {
							messsage.channel.send("```Steam API ERROR, try another game```");			
						}
						break;
					case "linux":
						try { 
							const embed = new MessageEmbed()
							.setColor("RANDOM")
							.setThumbnail("https://upload.wikimedia.org/wikipedia/commons/thumb/8/83/Steam_icon_logo.svg/480px-Steam_icon_logo.svg.png")
							data.header_image? embed.setImage(data.header_image): embed.setThumbnail("https://upload.wikimedia.org/wikipedia/commons/thumb/c/c1/Steam_2016_logo_black.svg/2560px-Steam_2016_logo_black.svg.png");
							data.website? embed.setURL(data.website) : null; 
							data.linux_requirements? embed.setTitle("Linux Requirements") : null;
							data.linux_requirements? embed.setDescription(data.linux_requirements.minimum+"\n\n"+data.linux_requirements.recommended) : null;
							message.channel.send({embeds:[embed]}) 
						} catch (error) {
							messsage.channel.send("```Steam API ERROR, try another game```");			
						}
						break;
				
					default:
						break;
				}
				return;
			})
		}else{
			sgb.searchByName(search, (err, data) => {
				if(err) return message.channel.send("```Error: "+err+"```");
				switch (platform) {
					case "pc":
						try { 
							const embed = new MessageEmbed()
							.setColor("RANDOM")
							.setThumbnail("https://upload.wikimedia.org/wikipedia/commons/thumb/8/83/Steam_icon_logo.svg/480px-Steam_icon_logo.svg.png")
							data.header_image? embed.setImage(data.header_image): embed.setThumbnail("https://upload.wikimedia.org/wikipedia/commons/thumb/c/c1/Steam_2016_logo_black.svg/2560px-Steam_2016_logo_black.svg.png");
							data.website? embed.setURL(data.website) : null; 
							data.pc_requirements? embed.setTitle("PC Requirements") : null;
							data.pc_requirements? embed.setDescription(data.pc_requirements.minimum+"\n\n"+data.pc_requirements.recommended) : null;
							message.channel.send({embeds:[embed]}) 
						} catch (error) {
							messsage.channel.send("```Steam API ERROR, try another game```");			
						}
						break;
					case "mac":
						try { 
							const embed = new MessageEmbed()
							.setColor("RANDOM")
							.setThumbnail("https://upload.wikimedia.org/wikipedia/commons/thumb/8/83/Steam_icon_logo.svg/480px-Steam_icon_logo.svg.png")
							data.header_image? embed.setImage(data.header_image): embed.setThumbnail("https://upload.wikimedia.org/wikipedia/commons/thumb/c/c1/Steam_2016_logo_black.svg/2560px-Steam_2016_logo_black.svg.png");
							data.website? embed.setURL(data.website) : null; 
							data.mac_requirements? embed.setTitle("MAC Requirements") : null;
							data.mac_requirements? embed.setDescription(data.mac_requirements.minimum+"\n\n"+data.mac_requirements.recommended) : null;
							message.channel.send({embeds:[embed]}) 
						} catch (error) {
							messsage.channel.send("```Steam API ERROR, try another game```");			
						}
						break;
					case "linux":
						try { 
							const embed = new MessageEmbed()
							.setColor("RANDOM")
							.setThumbnail("https://upload.wikimedia.org/wikipedia/commons/thumb/8/83/Steam_icon_logo.svg/480px-Steam_icon_logo.svg.png")
							data.header_image? embed.setImage(data.header_image): embed.setThumbnail("https://upload.wikimedia.org/wikipedia/commons/thumb/c/c1/Steam_2016_logo_black.svg/2560px-Steam_2016_logo_black.svg.png");
							data.website? embed.setURL(data.website) : null; 
							data.linux_requirements? embed.setTitle("Linux Requirements") : null;
							data.linux_requirements? embed.setDescription(data.linux_requirements.minimum+"\n\n"+data.linux_requirements.recommended) : null;
							message.channel.send({embeds:[embed]}) 
						} catch (error) {
							messsage.channel.send("```Steam API ERROR, try another game```");			
						}
						break;
				
					default:
						break;
				}
			})
		}

	}	};
