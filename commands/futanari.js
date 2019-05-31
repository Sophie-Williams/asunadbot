const Discord = require("discord.js");
const superagent = require("superagent");

module.exports.run = async (client,message,args) => {
	  if (message.channel.nsfw){
    var user = message.author.username
    let {body} = await superagent
    .get(`https://nekos.life/api/v2/img/futanari`);
    message.channel.send(`${user} here is some futanari`, {file: body.url})
    }else message.channel.send("THINK OF THE KIDS!!!!!!!! THEY DONT WANT TO SEE THIS BAKA!!!!!!!! \nthis channel is not marked for nsfw content")
}


module.exports.help = {
    name: "futanari"
}
