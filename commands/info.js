const Discord = require("discord.js");

module.exports.run = async (client,message,args) => {
	var owner = client.users.get("165811958828761089")
    var infoembed = new Discord.RichEmbed()
    .setTitle("Information")
    .addField("I am " + client.user.username , "Nice to meet you")
    .addField("In " + client.guilds.size + " servers")
    .addField("With " + client.users.size + " members" , "So many masters >~<")
    .addField(`Made by ${owner.username}#3375 and hosted by LocalSysadmin` , "gifs are generated using the nekos.life api")
    .setColor('#ff0093')
    .setFooter("%invite to add me")
    message.channel.send(infoembed)
}

module.exports.help = {
    name: "info"
}
