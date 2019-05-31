const Discord = require("discord.js");

module.exports.run = async (client,message,args) => {
      if (args[1]) message.channel.send(message.author.toString() + " has given " + args[1].toString() + " a cookie! :cookie:") 
        else message.channel.send(":x: | Invalid usage (Correct usage: %cookie @username)")
}

module.exports.help = {
    name: "cookie"
}
