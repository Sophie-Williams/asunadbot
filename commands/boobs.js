const Discord = require("discord.js");
const superagent = require("superagent");

module.exports.run = async (client,message,args) => {
	  if (message.channel.nsfw){
    var user = message.author.username
    let {body} = await superagent
    .get(`https://nekos.life/api/v2/img/boobs`);
    message.channel.send(`${user} here are some boobs`, {file: body.url})
    }else message.channel.send(":x: | This is not an NSFW channel.")
}


module.exports.help = {
    name: "boobs"
}
