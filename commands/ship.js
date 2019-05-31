const Discord = require('discord.js');

module.exports.run = async (client,message,args) => {
 
var ship = message.content.substring(6)
var fields = ship.split(' - ')
var s1 = fields[0];
var s2 = fields[1];
var emoji1 = "<:ship1:466641299856949259>"
var emoji2 = "<:ship2:466641375216271362>"
var sn = `${emoji1}${s1} \n${emoji2}${s2}` 
const r = Math.floor(Math.random() * 100) +1;

if(s2){
 
/* switch(r){
  case r >= 1 && r <= 10:
  var sembed = new Discord.RichEmbed()
  .setTitle(`shipping results`)
  .addField(`${r}%`, '█    \njust give up now')
  .setColor("#f243a0")
  message.channel.send(`${sn}`)
  message.channel.send(sembed)
   console.log(r)
   break;
   
   case r >= 11 && r <= 20:
  var  sembed = new Discord.RichEmbed()
 .setTitle(`shipping results`)
 .addField(`${r}%`, '██    \nbetter than my non existant dad')
 .setColor("#f243a0")
 message.channel.send(`${sn}`)
 message.channel.send(sembed)
   console.log(r)
   break;
   
   case r >= 21 && r <= 30:
  var sembed = new Discord.RichEmbed()
.setTitle(`shipping results`)
.addField(`${r}%`, '███    \nthis is what I would get if I shipped myself with kirito when we first met')
.setColor("#f243a0")
message.channel.send(`${sn}`)
message.channel.send(sembed)
   console.log(r)
   break;
   
   case r >= 31 && r <= 40:
 var sembed = new Discord.RichEmbed()
.setTitle(`shipping results`)
.addField(`${r}%`, '████    \ni would ship better with my ex body guard')
.setColor("#f243a0")
message.channel.send(`${sn}`)
message.channel.send(sembed) 
   console.log(r)
   break;
   
   case r >= 41 &&  r <= 50:
  var sembed = new Discord.RichEmbed()
.setTitle(`shipping results`)
.addField(`${r}%`, '█████    \nmeh could be better')
.setColor("#f243a0")
message.channel.send(`${sn}`)
message.channel.send(sembed)  
   console.log(r)
   break;
   
   case r >= 51 && r <= 60:
  var sembed = new Discord.RichEmbed()
.setTitle(`shipping results`)
.addField(`${r}%`, '█████    \nmeh could be better')
.setColor("#f243a0")
message.channel.send(`${sn}`)
message.channel.send(sembed) 
   console.log(r)
   break;
   
   case r >= 61 && r <= 70:
  var sembed = new Discord.RichEmbed()
.setTitle(`shipping results`)
.addField(`${r}%`, '███████    \ngreat friends')
.setColor("#f243a0")
message.channel.send(`${sn}`)
message.channel.send(sembed) 
   console.log(r)
   break;
   
   case r >= 71 && r <= 80:
 var sembed = new Discord.RichEmbed()
.setTitle(`shipping results`)
.addField(`${r}%`, '████████    \nthese should date')
.setColor("#f243a0")
message.channel.send(`${sn}`)
message.channel.send(sembed)
   console.log(r)
   break;
   
   case r >= 81 && r <= 90:
 var  sembed =  new Discord.RichEmbed()
.setTitle(`shipping results`)
.addField(`${r}%`, '█████████    \nKEEP GOING ALMOST PERFECT')
.setColor("#f243a0")
message.channel.send(`${sn}`)
message.channel.send(sembed) 
   console.log(r)
   break;
   
   case r >= 91 && r <= 100:
 var  sembed = new Discord.RichEmbed()
.setTitle(`shipping results`)
.addField(`${r}%`, '██████████    \nWAW PERFECT!!!')
.setColor("#f243a0")
message.channel.send(`${sn}`)
message.channel.send(sembed) 
   console.log(r)
   break;
   
   defualt:
   message.channel.send("something went wrong")
   console.log(r)
 } */
 
if(r >= 1 && r <= 10){
 var sembed = new Discord.RichEmbed()
.setTitle(`shipping results`)
.addField(`${r}%`, '█    \njust give up now')
.setColor("#f243a0")
message.channel.send(`${sn}`)
message.channel.send(sembed) 
  }

if(r >= 11 && r <= 20){
  var sembed = new Discord.RichEmbed()
 .setTitle(`shipping results`)
 .addField(`${r}%`, '██    \nbetter than my non existant dad')
 .setColor("#f243a0")
 message.channel.send(`${sn}`)
 message.channel.send(sembed) 
  }

if(r >= 21 && r <= 30){
  var sembed = new Discord.RichEmbed()
.setTitle(`shipping results`)
.addField(`${r}%`, '███    \nthis is what I would get if I shipped myself with kirito when we first met')
.setColor("#f243a0")
message.channel.send(`${sn}`)
message.channel.send(sembed)  
  }

if(r >= 31 && r <= 40){
  var sembed = new Discord.RichEmbed()
.setTitle(`shipping results`)
.addField(`${r}%`, '████    \ni would ship better with my ex body guard')
.setColor("#f243a0")
message.channel.send(`${sn}`)
message.channel.send(sembed) 
  }

if(r >= 41 && r <= 50){
  var sembed = new Discord.RichEmbed()
.setTitle(`shipping results`)
.addField(`${r}%`, '█████    \nmeh could be better')
.setColor("#f243a0")
message.channel.send(`${sn}`)
message.channel.send(sembed)  
  } 

if(r >= 51 && r <= 60){
  var sembed = new Discord.RichEmbed()
.setTitle(`shipping results`)
.addField(`${r}%`, '██████    \nlooks good i guess')
.setColor("#f243a0")
message.channel.send(`${sn}`)
message.channel.send(sembed)  
  }
 
 if(r >= 61 && r <= 70){
   var sembed = new Discord.RichEmbed()
.setTitle(`shipping results`)
.addField(`${r}%`, '███████    \ngreat friends')
.setColor("#f243a0")
message.channel.send(`${sn}`)
message.channel.send(sembed)   
  }

if(r >= 71 && r <= 80){
  var sembed = new Discord.RichEmbed()
.setTitle(`shipping results`)
.addField(`${r}%`, '████████    \nthese should date')
.setColor("#f243a0")
message.channel.send(`${sn}`)
message.channel.send(sembed)  
  }

if(r >= 81 && r <= 90){
  var sembed = new Discord.RichEmbed()
.setTitle(`shipping results`)
.addField(`${r}%`, '█████████    \nKEEP GOING ALMOST PERFECT')
.setColor("#f243a0")
message.channel.send(`${sn}`)
message.channel.send(sembed)  
  }

if(r >= 91 && r <= 100){
  var sembed = new Discord.RichEmbed()
.setTitle(`shipping results`)
.addField(`${r}%`, '██████████    \nWAW PERFECT!!!')
.setColor("#f243a0")
message.channel.send(`${sn}`)
message.channel.send(sembed)  
  } 
 } else message.channel.send("please pick 2 things to ship using `-` to sepperate the things being shipped")
}

module.exports.help = {
    name: "ship"
}
