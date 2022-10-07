module.exports = {
	data:{
		name: "length",
		aliases : ["lengthtext"],
		description : "Calculate the length of a text",
		usage : "length <text>",
		example: "length hello world",
	}, 
	async execute(bot, message, args) {
        let txt = args.join(" ")
		if(!txt) return message.reply("```Please, put the text```")
        message.channel.send("```The size of length: "+txt.length+"```")
    	}, 
};