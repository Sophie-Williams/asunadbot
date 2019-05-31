const Discord = require('discord.js');

module.exports.run = async (client,message,args) => {
	var id = message.author.id
	message.channel.send(id)
}

module.exports.help = {
	name: "test"
}
