const Discord = require("discord.js");
const config = require("../config.json")
const Taihou = require("taihou")
const weebSH = new Taihou(config.weebtoken, true, {
   userAgent: 'Asuna beta / 1.0'
});


module.exports.run = async (client,message,args) => {
   const superagent = require("superagent");

       let {body} = await superagent
       .get("https://rra.ram.moe/i/r?type=owo")
      // message.channel.send({file: `https://rra.ram.moe${body.path}`})
       message.channel.send({
        "embed": {
          "description": `OwO`,
          "url": "https://discordapp.com",
          "color": 11733342,
          "footer": {
            "text": "powered by weeb.sh"
          },
          "image": {
            "url": `https://rra.ram.moe${body.path}`
          }
         
        }
       
       })}

module.exports.help = {
   name: "owo"
}
