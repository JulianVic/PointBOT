module.exports = {
	data:{
		name: "replace",
        aliases : ["replacetxt"],
        description : "Replace letters in a text",
        usage: "replace <letter or aeiou> <new letter> <text>",
        example: "replace a b aaaaaa",
        example2: "replace aeiou e mi moto alpina de repente", 
	}, 
	async execute(bot, message, args) {
        let de = args[0]
        if(de === "aeiou"){
                let a = args[1]
                let txt = args.slice(2).join(" ")
                if(!de) return message.channel.send("```Put the text you wanna replace for```")
                if(!a) return message.channel.send("```Put the text you wanna put in the text```")
                if(!txt) return message.channel.send("```Put the text!!```")
                let remplazo = txt.replace(/[aeiou]/ig, a)
                    message.channel.send("```"+remplazo+"```")
        }else{
                let a = args[1]
                let txt = args.slice(2).join(" ")
                if(!de) return message.channel.send("```Put the text you wanna replace for```")
                if(!a) return message.channel.send("```Put the text you wanna put in the text```")
                if(!txt) return message.channel.send("```Put the text!!```")
                let remplazo = txt.replaceAll(de, a)
                    message.channel.send("```"+remplazo+"```")
        }

    	},
};