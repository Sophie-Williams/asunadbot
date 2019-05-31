const Discord = require("discord.js");
const superagent = require("superagent");

module.exports.run = async (client,message,args) => {
    let {body} = await superagent
    .get(`https://random.dog/woof.json`);
    message.channel.send("here is a doggo woof", {file: body.url})
}

module.exports.help = {
    name: "doggo"
}
