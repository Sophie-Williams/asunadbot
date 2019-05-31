const discord = require("discord.js")

module.exports.run = async (client,message,args) => {
	if(!message.author.id === "165811958828761089") message.reply("you do not have permission to reload commands")
	else{
	message.reply("reloadig all commands")
	loadcmd()
}
}


module.exports.help = {
    name: "reload"
}