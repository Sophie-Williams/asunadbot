const Discord = require("discord.js");
const superagent = require("superagent");

module.exports.run = async (client,message,args) => {
    let {body} = await superagent
    .get(`http://aws.random.cat//meow`);
    message.channel.send(":cat: | Here is a cat meow", {file: body.file})
}

module.exports.help = {
    name: "cat"
}
