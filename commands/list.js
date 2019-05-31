const Discord = require("discord.js");

module.exports.run = async (client,message,args) => {
    message.channel.send(client.guilds.map(g=>g.name).join('\n'));
}

module.exports.help = {
    name: "list"
}