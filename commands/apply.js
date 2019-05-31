const Discord = require("discord.js");

module.exports.run = async (client,message,args) => {
    var channel = client.channels.get('422518703624552471');
    var applyMsg = message.content.substring(6);
    var id = message.author.id
    var member = message.author.tag
if (args[0]) message.channel.send("your application has been submitted")
if (args[0])	channel.send(`${member} has applied \n${applyMsg} \nwith the id of ${id}`);
else message.channel.send("to apply please type `%apply (application)`. the application will be sent to the support server to be looked at");

}

module.exports.help = {
    name: "apply"
}
