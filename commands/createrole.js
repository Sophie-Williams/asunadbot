const Discord = require("discord.js");

module.exports.run = async (client,message,args) => {
    if(message.guild === null)message.channel.send(":x: You cannot use this command in DMs.")
    else{
        var rolename = args.slice().join(" ");
        if(message.member.hasPermission('ADMINISTRATOR' || 'MANAGE_ROLES')){
            if(args[0]){
            message.guild.createRole({
   name: rolename,
   hoist: false, 
   mentionable: false
   })
   message.channel.send(":white_check_mark: | Created role `" + rolename + "`")
   }
   else message.channel.send(":x: | **Error**: Cannot create a nameless role")
        }
        else message.channel.send(":x: | Insufficient permisions.")
    }
}

module.exports.help = {
    name: "createrole"
}
