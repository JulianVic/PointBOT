const fs = require('fs');
const { Client, Collection, Intents, Partials } = require('discord.js');
const { token, DB } = require('./config.json');
const { off } = require('process');
const evalModel = require('./models/evalSchema');
const bot = new Client({ intents: ['GUILDS', "GUILD_PRESENCES", 'GUILD_MEMBERS', 'GUILD_MESSAGES', 'DIRECT_MESSAGES', "GUILD_MESSAGE_REACTIONS", "GUILD_MESSAGE_TYPING", "GUILD_VOICE_STATES"], partials: ["CHANNEL"] });

//%Mongo
 const mongoose = require("mongoose")

 mongoose.connect(DB, {
	useNewUrlParser: true,
	useUnifiedTopology: true,
 })
 .then(() => {
	console.log("MongoDB connected")
 })
 .catch((e) => 
 console.log(e))
 
//%



bot.commands = new Collection();
bot.slashes = new Collection();
bot.prefix = "."

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

  for (const cmd of getCommands('./commands/normal')) {
	bot.commands.set(cmd.data.name, cmd);
  }
  

const eventFiles = fs.readdirSync('./events').filter(file => file.endsWith('.js'));

for (const file of eventFiles) {
	const eventos = require(`./events/${file}`);
	if(eventos.event && typeof eventos.event !== "string") continue;
	eventos.event = eventos.event || file.replace(".js", "")
	bot.on(eventos.event, (...args) => eventos.run(bot, ...args))

}
bot.login(token);