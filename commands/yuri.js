const Discord = require("discord.js");
const superagent = require("superagent");

module.exports.run = async (client,message,args) => {
	  if (message.channel.nsfw){
    var user = message.author.username
    let {body} = await superagent
    .get(`https://nekos.life/api/v2/img/yuri`);
    message.channel.send(`${user} here is some yuri`, {file: body.url})
    }else message.channel.send("sometimes we need to look at 2 girls butt.... \nTHINK OF THE KIDS!!!!!!!! THEY DONT WANT TO SEE THIS BAKA!!!!!!!! \nthis channel is not marked for nsfw content")
}


module.exports.help = {
    name: "yuri"
}
