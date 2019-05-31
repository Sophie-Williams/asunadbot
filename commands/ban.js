const Discord = require("discord.js");

module.exports.run = async (client,message,args) => {
    if(message.guild.id === "374071874222686211")return;
    if(message.guild === null)message.channel.send("this is a server only command")
    	else{
    	var member = message.mentions.members.first() || message.guild.members.get(args[0]);
    	var reason = message.content.substring(27)
    	if(message.member.hasPermission('ADMINISTRATOR' || 'BAN_MEMBERS')){
    		if(args[0]){
    			if(member){
    			if(member.bannable){
    				member.ban(reason)
    				message.channel.send(member + " had been banned for :" + reason)
    				member.send("you have been banned for " + reason)
    			}
    			else message.channel.send("cannot ban member my role is too low or they are admin")
    			}
    			else message.channel.send("please mention a valid user")
    		}
    		else message.channel.send("`%ban (user)`")
    	}
    	else message.channel.send("you do not have permission to ban")
    	}
}

module.exports.help = {
    name: "ban"
}
