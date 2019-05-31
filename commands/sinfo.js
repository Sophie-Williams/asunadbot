const discord = require("discord.js");

module.exports.run = async (client,message,args) => {
	var guild = client.guilds.get("447774628442800139")
  var icon = guild.iconURL
  var name = guild.name
  var owner = guild.user.owner.tag
  var sembed = new Discord.RichEmbed()
  .addtitle(`info for ${args[0]}`)
  .addField(`server name`, name)
  .addField(`owner`, owner)
  .setThumbnail(icon)
  .setColor("#0745f2")
  message.channel.send(sembed);
}

module.exports.help = {
    name: "sinfo"
}
