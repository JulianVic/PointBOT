const { inspect } = require('util')
const evalSchema = require("../../models/evalSchema")
module.exports = {
    data : {
      name: 'eval',
      aliases: ["e"],
      description: "Evaluate code",
      usage: "eval <code>",
      example: "eval console.log('hello world')",
},
    async execute(bot, message, args) {
    
  const users = await evalSchema.find({})
  if (!users.some((x) => x.userID === message.member.id)) return message.reply("```Insufficient permissions```")
    if(!args[0]) return message.reply("```Usage: eval <code>```");
    const start = Date.now();
    const code = args.join(' ');
    const isAsync = code.includes('await');
    try {
        let result = await eval(isAsync ? `(async () => { ${code} })();` : code);
        let type = typeof(result); type = type[0].toUpperCase() + type.slice(1).toLowerCase();
  
        if (typeof result !== 'string') result = inspect(result, { depth: 0, showHidden: true });
  
        if (result.length > 2000) result = `${result.slice(0, 1950)}...`;
  
        return message.channel.send([('**[' + type + ']** ' + (Date.now() - start) + 'ms'), ((!result || !result.length) ? 'Nothing...' : blockCode(bot, result, 'js'))].join('\n'));
      } catch (err) {
        return message.channel.send([('**[' + (err?.name || 'UnkownError') + ']** ' + (Date.now() - start) + 'ms'), blockCode(bot, `${err.message ?? err}`, 'js')].join('\n'));
      }
    }
  }
  
  function blockCode (bot, input, code) {
    const tokens = [
      bot.token,
      '491212266558193679',
      '923707327918506014'
    ];
  
    input = input.replace(new RegExp(tokens.join('|'), 'g'), 'Unknown');
    input = input.replace(/`/g, '`\u200b');
    return [('```' + code),
        input,
      ('```')].join('\n');
  }
    