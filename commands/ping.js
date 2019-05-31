const Discord = require('discord.js');

module.exports.run = async (client,message,args) => {
     message.channel.send("PONG! API Latency is " + Math.round(client.ping) + "ms");
}

module.exports.help = {
    name: "ping"
}