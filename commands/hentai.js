const Discord = require("discord.js");
const superagent = require("superagent");

module.exports.run = async (client,message,args) => {
	  if (message.channel.nsfw){
    var user = message.author.username
    let {body} = await superagent
    .get(`https://nekos.life/api/v2/img/hentai`);
    message.channel.send(`${user} here is some hentai`, {file: body.url})
    }else message.channel.send("YOU PERVERT DO NOT DO THIS IN PUBLIC!!!!!!!!!!!  \nchannel is not marrked for nsfw content")
}


module.exports.help = {
    name: "hentai"
}
