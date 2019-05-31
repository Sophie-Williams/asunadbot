const Discord = require("discord.js");

module.exports.run = async (client,message,args) => {
    if(message.guild.id === "374071874222686211")return;
    if(message.guild === null)message.channel.send(":x: | This command cannot be used in DMs.")
    	else{
    	var member = message.mentions.members.first() || message.guild.members.get(args[0]);
    	var reason = message.content.substring(27)
    	if(message.member.hasPermission('ADMINISTRATOR' || 'BAN_MEMBERS')){
    		if(args[0]){
    			if(member){
    			if(member.bannable){
    				member.ban(reason)
    				message.channel.send(":white_check_mark: | " member + " had been banned for :" + reason)
    				member.send(":exclamation: | You have been banned for " + reason)
    			}
    			else message.channel.send(":x: | Cannot ban specified user.")
    			}
    			else message.channel.send(":x: | Please mention a valid user")
    		}
    		else message.channel.send("`%ban (user)`")
    	}
    	else message.channel.send(":x: | Insufficient Permissions.")
    	}
}

module.exports.help = {
    name: "ban"
}
