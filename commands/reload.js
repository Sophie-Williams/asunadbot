const discord = require("discord.js")

module.exports.run = async (client,message,args) => {
	if(!message.author.id === "165811958828761089") 
	message.reply(":white_check_mark: | Reloading all commands")
	loadcmd()
	else{
	message.reply(":x: | You are not authorized to use this command.")

}
}


module.exports.help = {
    name: "reload"
}
