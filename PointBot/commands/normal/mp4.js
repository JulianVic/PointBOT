const { MessageAttachment } = require("discord.js")
const ytdl = require("ytdl-core")

module.exports = {
  data: {
    name: "mp4",
    aliases: ["ytdl", "ytmp4", "videodownload", "downloadvideo", "ytdlmp4"],
    description: "Download a video from youtube and convert it to mp4",
    usage: "mp4 <url>",
    example: "mp4 https://www.youtube.com/watch?v=dQw4w9WgXcQ", //no mames que buen rick roll se clavo el copilot xd bien ahi
  }, 
  async execute(bot, message, args) {
    const link = args[0];
    if (!link) return message.reply("```Please, put the link```");
    const es = ytdl.validateURL(link);
    if (!es) return message.reply("```Please, put a valid link```");
    const mensaje = await message.reply("```Wait a moment...```");
    const video = ytdl(link);
    const buffer = await getBuffer(video);
    if (Buffer.byteLength(buffer) > 8e+6) return message.reply("```Sorry for the delay, I was talking with Wumpus and he told me: 'Discord API does not allow you to send videos larger than 8MB'```");
    const x = await ytdl.getBasicInfo(link);
    const y = await x.videoDetails.title;
    const att = new MessageAttachment(buffer, y + ".mp4");
    await mensaje.edit({ files: [att] });
  }
}

function getBuffer(stream) {
  return new Promise((res) => {
    const buffers = [];
    stream.on("data", (d) => buffers.push(d));
    stream.on("end", () => {
      res(Buffer.concat(buffers));
    });
  });
}