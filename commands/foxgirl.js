const Discord = require("discord.js");
const superagent = require("superagent");

module.exports.run = async (client,message,args) => {
    var user = message.author.username
    let {body} = await superagent
    .get(`https://nekos.life/api/v2/img/fox_girl`);
    message.channel.send(`${user} here is a cute fox girl`, {file: body.url})
}


module.exports.help = {
    name: "foxgirl"
}