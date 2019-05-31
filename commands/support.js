const Discord = require("discord.js");

module.exports.run = async (client,message,args) => {
    var embed = new Discord.RichEmbed()
        	.setTitle("confused?")        	
        	.addField("Need help with the bot?", "join Asuna's support [server](https://discord.gg/Jh3GMZN)")
    message.channel.send(embed);
}

module.exports.help = {
    name: "support"
}
