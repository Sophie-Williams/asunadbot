const Discord = require("discord.js");

module.exports.run = async (client,message,args) => {
    if(message.guild.id === "374071874222686211") return;
    if(message.guild === null)message.channel.send("this is a server only command");
    else{
    var member = message.mentions.members.first() || message.guild.members.get(args[0]);
    var reason = message.content.substring(27)
    if(message.member.hasPermission('ADMINISTRATOR' || 'KICK_MEMBERS')){
        if(args[0]){
            if(member){
            if(member.kickable){
            	member.send("you have been kicked from " + message.guild.name + " for " + reason)
            member.kick(reason)
            message.channel.send(member + " has been kicked for :" + reason)
            }
            else message.channel.send("cannot kick member my role is too low or they are admin")
            }
            else message.channel.send("please mention a valid user")
        }
        else message.channel.send("`%kick (user)`")
    }
    else message.channel.send("you do not have permission to kick")
    }
}

module.exports.help = {
    name: "kick"
}
