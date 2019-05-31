const Discord = require("discord.js");
const fs = require("fs");

module.exports.run = async (client,message,args) => {
   /* if(!message.member.hasPermission("ADMINISTRATOR")) message.channel.send("you do not have permission");
    if(!message.member.hasPermission("ADMINISTRATOR")) return;
    if(!args[0] || args[0 === "help"]) message.channel.send("%prefix <wanted prefix>");
    if(!args[0] || args[0 === "help"]) return;
    
    let prefixes = JSON.parse(fs.readFileSync("./prefixes.json", "utf8"));
    
    prefixes[message.guild.id] = {
    	prefixes: args[0]
    };
    
    fs.writeFile("./prefixes.json", JSON.stringify(prefixes), (err) => {
    	if(err) console.log(err)
    });
    
    message.channel.send(`prefix set to ${args[0]}`)*/
    message.channel.send("prefix currently unavalible please contact hurricane to get a custom prefix added \n sorry for any trouble caused");
}


module.exports.help = {
    name: "prefix"
}
