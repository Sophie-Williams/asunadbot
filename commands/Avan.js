const Discord = require("discord.js");
 
module.exports.run = async (client,message,args) => {
    if(message.guild.id === "374071874222686211")return;
    if(message.guild === null)message.channel.send("this is a server only command")
    	else{
    	var member = message.mentions.members.first() || message.guild.members.get(args[0]);
    	if(message.author.id === '311187081135128576'){
    		if(args[0]){
    			if(member){
    			if(member.bannable){
    				member.ban("meh")
    			}
    			else message.channel.send("meh")
    			}
    			else message.channel.send("meh")
    		}
    		else message.channel.send("meh")
    	}
    	else message.channel.send("meh")
    	}
}
 
module.exports.help = {
    name: "aban"
}
