const Discord = require("discord.js");
const superagent = require("superagent");

module.exports.run = async (client,message,args) => {
	  if (message.channel.nsfw){
    var user = message.author.username
    let {body} = await superagent
    .get(`https://nekos.life/api/v2/img/trap`);
    message.channel.send(`${user} here a trap`, {file: body.url})
    }else message.channel.send(":x: | This is not a NSFW channel.")
}


module.exports.help = {
    name: "trap"
}
