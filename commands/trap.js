const Discord = require("discord.js");
const superagent = require("superagent");

module.exports.run = async (client,message,args) => {
	  if (message.channel.nsfw){
    var user = message.author.username
    let {body} = await superagent
    .get(`https://nekos.life/api/v2/img/trap`);
    message.channel.send(`${user} here a trap`, {file: body.url})
    }else message.channel.send("not saying traps are gay but THINK OF THE KIDS!!!!!!!! THEY DONT WANT TO SEE THIS BAKA!!!!!!!! \nthis channel is not marked for nsfw content")
}


module.exports.help = {
    name: "trap"
}
