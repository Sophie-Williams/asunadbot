const Discord = require("discord.js");
const superagent = require("superagent");

module.exports.run = async (client,message,args) => {
	  if (message.channel.nsfw){
    var user = message.author.username
    let {body} = await superagent
    .get(`https://nekos.life/api/v2/img/pussy`);
    message.channel.send(`${user} here a pussy`, {file: body.url})
    }else message.channel.send("THIS IS NOT FOR CATS BAKA!!!!!!!!!!!!!!! \n this channel is not marked as nsfw")
}


module.exports.help = {
    name: "pussy"
}
