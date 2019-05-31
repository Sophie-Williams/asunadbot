const Discord = require("discord.js");

var eightball = [ 
        "yes!",
        "no...",
        "maybe?",
        "probably",
        "I don't think so.",
        "never!",
        "you can try...",
        "up to you!",
        "OH HELLL NAW!!!!!!",
]

module.exports.run = async (client,message,args) => {
     if (args[0] != null) message.channel.send(eightball[Math.floor(Math.random() * eightball.length).toString(16)]); // if args[1], post random answer
     else message.channel.send("what is your question? {usage %8ball question}")
}

module.exports.help = {
    name: "8ball"
}
