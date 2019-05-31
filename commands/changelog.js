const Discord = require("discord.js");

module.exports.run = async (client,message,args) => {
    var changeembed = new Discord.RichEmbed()
    .setTitle("latest update")
    .addField("resumed the updating of asuna and fixed bots playing status")
    .addField("added new image commands")
    .addField("added a createrole command", "creats a role with any name you want")
    .addField("fixed ban / kick", "fixed crash where membet was not tagged correctly or was no longer in the server")
    .addField("Added rate command", "rate command rates whatever you want it to with a score out of 10")
    .setColor('CC00EF')
    .setFooter("updated on 16 may 2018 11:00pm GMT" )
    message.channel.send(changeembed)
}

module.exports.help = {
    name: "changelog"
}
