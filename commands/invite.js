const Discord = require("discord.js");

module.exports.run = async (client,message,args) => {
    var embed = new Discord.RichEmbed()
        	.setTitle("Add me")        	
        	.addField("Want to add me to your server?", "use this invite [link](https://discordapp.com/api/oauth2/authorize?client_id=420907324945989632&permissions=1610018294&scope=bot)")
    message.channel.send(embed)
}

module.exports.help = {
    name: "invite"
}
