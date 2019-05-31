const Discord = require('discord.js');

module.exports.run = async (client, message, args) => {
          	var helpembed = new Discord.RichEmbed()
        	.setTitle("list of commands")
        	.setColor('#FE55FE')
        	.addField("Fun", "8ball, rate, roll, fact")
        	.addField("Images", "neko, foxgirl, cat, doggo, ship, hug, cuddle, waifu, pat, tickle, slap, poke, kiss, nya, owo")
        	.addField("Nsfw", "spank, hentai, yuri, pussy, bj, trap, anal, boobs, fdom, futanari, feet, cum,")
        	.addField("Util", "%server gives you stats on a minecraft server (usage %server {server ip})\n%suggestion send in any feedback or suggestions \n%ban bans a user \n %kick kicks a user \n %say copys what you say \n %help shows you this \n %info shows you info about me \n  %membercount shows sever membercount \n %createrole creates a role \n %ping ")
          .addField("Links", "<:PPtransparent:457295151396814848>   [donate](https://www.paypal.me/FloodL) \n:link:   [bot invite](https://bots.discord.pw/bots/420907324945989632) \n:link:   [support server](https://discord.gg/xm5jxZq)")
           message.author.send(helpembed)
        	if (!message.guild)return;
        	else{
                    if(message.guild.id === "374071874222686211")return;
                    else{
        		message.channel.send("check your dm for help")
                    }
 
}
}

module.exports.help = {
    name: "help"
}
