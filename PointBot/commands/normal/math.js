const {MessageEmbed} = require("discord.js")
const math = require("math-expression-evaluator")

module.exports = {
	data:{
		name: "math",
        aliases : ["calc"],
        description : "Calculate a math expression",
        usage : "math <expression>",
        example: "math 2+2",
	}, 
	async execute(bot, message, args) {
        const start = Date.now();
        const embed = new MessageEmbed()
        .setColor("RANDOM")
        if(!args[0]){
            return await message.reply("```Put something```")
        }
        let resultado;
        try {
            resultado = math.eval(args.join(" "))
        } catch (e) {
            resultado = "SyntaxError: Invalid input"
        }
        embed.setTitle("Result")
        embed.addField("Input:", `\`\`\`js\n${args.join(" ")}\`\`\``)
        .addField("Output", `\`\`\`js\n${resultado}\`\`\``)
        .addField("Time response:", `\`\`\`${(Date.now() - start)}ms\`\`\``);
        await message.reply({embeds:[embed]})
	},
};