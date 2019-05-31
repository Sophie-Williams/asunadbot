const Discord = require("discord.js");
const fs = require("fs");

module.exports.run = async (client,message,args) => {
    fs.readdir("./commands/", (err, files) => {

        if(err) console.log(err);
    
        let jsfile = files.filter(f => f.split(".").pop() === "js")
        if(jsfile.length <= 0){
            console.log("couldn't fine commands.");
        return;
    }
    
        jsfile.forEach((f, i) => {
            var modules = `./commands/${f}`
            message.channel.send(`${f} loaded`)
            
        })  
    
    })
}

module.exports.help = {
    name: "modules"
}