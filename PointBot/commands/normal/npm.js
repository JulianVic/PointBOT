const Discord = require("discord.js");
const fetch = (...args) => import('node-fetch').then(({default: fetch}) => fetch(...args));
module.exports = {
	data:{
		name: "npm",
        aliases : ["npmjs"],
        description : "Search for a package on npmjs",
        usage : "npm <package>",
        example: "npm discord.js",
	}, 
	async execute(bot, message, args) {
	const search = args.join(' ');
    if(!search) return message.channel.send('```Please provide a package name.```');
    const request = await fetch(`https://www.npmjs.com/search/suggestions?q=${search}&size=1`);
    const json = await request.json();
    if(!json.length) return message.channel.send('```No results found.```');
    let links = Object.keys(json[0].links).filter((key) => key !== 'npm');
    links = links.length? links.map((key) => {
        const link = key[0].toUpperCase() + key.slice(1).toLowerCase();
        return `**${link}**\n${json[0].links[link.toLowerCase()]}`
    }).join('\n') : 'No links found.';
    const maintainers = json[0].maintainers.length?`${json[0].maintainers.map((x) => x.username).join(', ')}` : 'No maintainers found.';
    const ola = await fetch(`https://registry.npmjs.org/${json[0].name}`);
    const NPMEmbed = new Discord.MessageEmbed() // Ahora comenzamos a construir el embed.
    .setTitle('NPM Search')
    .setDescription(`Results **${Discord.Util.escapeMarkdown(search)}**`) 
    .addField('Package name', `${json[0].name}`, true)
    .addField('Visit', `[Click aquí](${json[0].links.npm})`, true)
    .addField('Version', `${json[0].version}`, true)
    .addField('Description', `${json[0].description.length ? json[0].description : 'Not found'}`)
    .addField('Links', `${links}`)
    .addField('Author', json[0].author? json[0].author.name:"Not found", true)
    .addField('Published by', json[0].publisher.username, true)
    .addField('Maintainers ['+json[0].maintainers.length+']', maintainers)
    .setColor('RED')
    .setFooter({text: 'Requested by '+message.author.tag+' • Last update: ' +  new Date(json[0].date).toLocaleDateString(), iconURL: message.author.displayAvatarURL({format: 'png', dynamic: true})})
    .setThumbnail("https://avatars.githubusercontent.com/u/6078720?s=200&v=4")
   json[0].keywords ? NPMEmbed.addField('Keywords', `${json[0].keywords.length ? json[0].keywords.join(', ') : 'Not found'}`) :null
    message.channel.send({embeds:[NPMEmbed]});

    },
}