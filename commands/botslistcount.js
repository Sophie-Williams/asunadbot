const Discord = require("discord.js");

module.exports.run = async (client,message,args) => {
  if (message.author.id ===("311187081135128576")){
  const Client = require('botlist.space');

const bot = new Client('420907324945989632', '5899c422a3aa1525152ef3f28adecdc14ac1e781c30e5851e7c60f47b64cc46d6cbb8bf7cf1b034dc13780a16db5681a65e8c7ecf54c67bf9427954abac358c5');      
 bot.postServerCount(client.guilds.size).then(() => { 
    console.log('Set the current bot\'s server count to ' + client.guilds.size + ' guilds.');
}).catch((e) => {
    console.error('Failed to post server count. ' + e.code);
});
  } else message.channel.send("you do not have permission to post server count to bl.s");
}


module.exports.help = {
    name: "bl.spost"
}
