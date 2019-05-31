const Discord = require("discord.js");
const config = require("../config.json")
const Taihou = require("taihou")
const weebSH = new Taihou(config.weebtoken, true, {
   userAgent: 'Asuna beta / 1.0'
});


module.exports.run = async (client,message,args) => {

   var tagged = message.mentions.members.first() || message.guild.members.get(args[0]);
   var user = message.author.username
  
   if(!tagged)message.channel.send(":x: | Invalid usage.")
   else{
    if (tagged.id === client.user.id) {
       message.channel.send(":blush: | I love pats *smiles*")
   }
   else {
   if (tagged.id === message.author.id){
   message.channel.send(":hugging: | Aww dont be like that *pats*")    
   }
   else{	    
   var member = tagged.user.username
   weebSH.toph.getRandomImage('pat')
   .then(image => message.channel.send({
       "embed": {
         "description": `${user} has petted ${member}`,
         "url": "https://discordapp.com",
         "color": 11733342,
         "footer": {
           "text": "powered by weeb.sh"
         },
         "image": {
           "url": image.url
         }
        
       }
     }))
   .catch(err => console.error(`Oopsie, an error occurred: ${err}`));
  } 
 }
} 
}
module.exports.help = {
   name: "pat"
}
