const {MessageEmbed} = require("discord.js")
const hastebin = require("hastebin-paste");

module.exports = {
	data:{
		name: "haste",
        aliases : ["hastebin"],
        description : "Create a hastebin paste",
        usage : "haste <code>",
        example: "haste console.log('hello world')",
	}, 
	async execute(bot, message, args) {
        let contenido = args.join(" ") 
        if(!contenido) return message.reply("```Put the content```")
        hastebin(`${contenido}`, { extension: "txt" }).then(async haste => { 
        const embed = new MessageEmbed()
            .setTitle("Text saved!")
            .setDescription(haste) 
            .setColor("RANDOM") 
            await message.reply({embeds:[embed]});
            await setTimeout(() =>{
                message.delete().catch(() => null)
            }, 5e3) 
        }).catch(error => { 
            console.error(error); 
        });

}};