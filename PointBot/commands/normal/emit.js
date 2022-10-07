const fs = require('fs');
module.exports = { 
	data:{
		name: "emit",
        aliases : ["emite"],
        description : "Emit",
        usage : "emit <event>",
        example: "emit messageCreate",
	}, 
	async execute(bot, message, args) { 
    let member = message.mentions.members.first() || message.member;
    if(message.author.id !== "491212266558193679") return;
      let event = args[0]
      if(!event) return message.channel.send("```Please specify an event to emit```")
      let eventFile = `./events/${event}.js`
      if(!fs.existsSync(eventFile)) return message.channel.send("```Event does not exist```")
      switch (event) {
        case "guildMemberAdd":
          bot.emit("guildMemberAdd", member)
          break;
      case "guildMemberRemove":
          bot.emit("guildMemberRemove", member)
          break;
        default:
          message.channel.send("```Nothing to emit```")
          break;
      }
    }
  }