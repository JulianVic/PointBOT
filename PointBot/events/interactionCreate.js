module.exports.run = async (bot, interaction)=>{
	const cmd = bot.slashes.get(interaction.commandName)
	if(!cmd) return;
	cmd.execute(bot, interaction)
	interaction.ejecutoComando = true
};
