const fs = require('fs');
const { REST } = require('@discordjs/rest');
const { Routes } = require('discord-api-types/v9');
const { guildId, token } = require('./config.json');
const commands = []; 


async function startSlash(bot){

	function getCommands (path, arr = []) {
		const commandFiles = fs.readdirSync(path)
	  
		for (const file of commandFiles) {
		  const stat = fs.lstatSync(path + "/"+file);
		  if (stat.isDirectory()) {
			getCommands(path + '/' + file, arr);
		  } else {
			if (!file.endsWith('.js')) continue;
			const cmd = require(path + '/' + file);
			arr.push(cmd);
		  }
		}
		return arr
	  }

const rest = new REST({ version: '10' }).setToken(token);
bot.guilds.cache.forEach(async(guild) => {
	const cmds = getCommands("./commands/slash");
	cmds.forEach((x) => bot.slashes.set(x.data.name, x));
	await rest.put(Routes.applicationGuildCommands(bot.user.id, guild.id), { body: cmds.map((x) => x.data) })

})
console.log("Comandos registrados correctamente")	
}
module.exports = {
	startSlash:startSlash
}