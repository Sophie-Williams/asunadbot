const Discord = require("discord.js");

var spank = [
    "https://media1.giphy.com/media/6BZaFXBVPBtok/200w.webp",
    "https://images.sex.com/images/pinporn/2015/08/07/300/13441590.gif",
    "https://images.sex.com/images/pinporn/2015/05/19/300/11991195.gif",
    "https://images.sex.com/images/pinporn/2017/03/05/300/17444239.gif",
    "https://images.sex.com/images/pinporn/2016/05/17/300/15712632.gif",
    "https://images.sex.com/images/pinporn/2015/01/13/300/10003697.gif",
    "https://images.sex.com/images/pinporn/2016/05/12/300/15677158.gif",
    "https://images.sex.com/images/pinporn/2017/12/28/300/18858174.gif",
    "https://images.sex.com/images/pinporn/2017/10/31/300/18585417.gif",
    "https://images.sex.com/images/pinporn/2014/09/03/300/7797708.gif",
    "https://images.sex.com/images/pinporn/2014/07/07/300/6829516.gif",
    "https://images.sex.com/images/pinporn/2016/05/10/300/15665494.gif",
    "https://images.sex.com/images/pinporn/2016/01/30/300/14892357.gif",
    "https://images.sex.com/images/pinporn/2013/12/24/300/4455594.gif",
    "https://images.sex.com/images/pinporn/2018/02/23/300/19149720.gif",
    "https://images.sex.com/images/pinporn/2017/06/24/300/17953645.gif"
]

module.exports.run = async (client,message,args) => {
    var spanks = (spank[Math.floor(Math.random() * spank.length)]);
    if (message.channel.nsfw){
    	if (args[0])message.channel.send(message.author.toString() + " has spanked " + args[0].toString(), {file: spanks})
    else	message.channel.send("who do you want to spank (%spank (user))")
    } 
    else message.channel.send("THINK OF THE KIDS!!!!!!!! THEY DONT WANT TO SEE THIS BAKA!!!!!!!! \nthis channel is not marked for nsfw content")  
    
}

module.exports.help = {
    name: "spank"
}
