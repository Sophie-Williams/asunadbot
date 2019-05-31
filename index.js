const Discord = require("discord.js");
const config = require("./config.json");
const client = new Discord.Client({fetchAllMembers: true});
const DBL = require("dblapi.js");
const dbl = new DBL(config.dbl, client);
const bls = require('botlist.space');
const fs = require ("fs");
const superagent = require("superagent");
const wb = require("webhook-discord")
const Hook = new wb(config.hooks)
const ehook = new wb(config.error)
client.commands = new Discord.Collection();
const errorc = client.channels.get("574884816516808714");

fs.readdir("./commands/", (err, files) => {

    if(err) console.log(err);

    let jsfile = files.filter(f => f.split(".").pop() === "js")
    if(jsfile.length <= 0){
        console.log("couldn't fine commands.");
    return;
}

    jsfile.forEach((f, i) => {
        let props = require (`./commands/${f}`);
        console.log(`${f} loaded`);
        client.commands.set(props.help.name, props);
    })  

})

   dbl.on('posted', () => {
  console.log('Server count posted!');
})

dbl.on('error', e => {
 console.log(`Oops! ${e}`);
})

process.on('unhandledRejection', (reason, promise) => {
    console.log('Unhandled Rejection at:', reason.stack || reason)
      ehook.custom('Unhandled Rejection at:', reason.stack || reason)
  })


client.on('ready', () => {
    console.log("booted up");
    var channel = client.channels.get("437647273606905856")
    channel.send("booted up")
    client.user.setActivity(`${config.prefix}help | in ${client.guilds.size} servers`)
	
 
});

client.on("guildCreate", guild => { 
	var usericon = guild.iconURL
        var id = guild.id	
        client.user.setActivity(`${config.prefix}help | in ${client.guilds.size} servers`)
        Hook.custom("Asuna",`joined ${guild.name}\nguild created at ${guild.createdAt}\nguild id ${id}\nserver owner ${guild.owner.user.tag}\nmembercount ${guild.members.size}`,"joined a guild","#ff0048", `${usericon}`)
});

client.on("guildDelete" ,guild => {
	var usericon = guild.iconURL
        var id = guild.id
	 client.user.setActivity(`${config.prefix}help | in ${client.guilds.size} servers`)
	Hook.custom("Asuna",`left ${guild.name}\nguild created at ${guild.createdAt}\nguild id ${id}\nserver owner ${guild.owner.user.tag}\nmembercount ${guild.members.size}`,"left a guild","#ff0048", `${usericon}`)
})



client.on("message", async message => {
    if(message.author.bot) return;
    
    if(message.guild === null) {
    	let prefix = "%"
    	let messageArray = message.content.split(" ");
    let cmd = messageArray[0];
    let args = messageArray.slice(1);

    let commandfile = client.commands.get(cmd.slice(prefix.length));
    if(commandfile) commandfile.run(client,message,args);
    }
    if(message.guild === null) return;

    
    let prefixes = JSON.parse(fs.readFileSync("./prefixes.json", "utf8"));
    
    if(!prefixes[message.guild.id]){
    	prefixes[message.guild.id] = {
    		prefixes: config.prefix
    	};
    }
    
    let prefix = prefixes[message.guild.id].prefixes || new RegExp(`^<@!?${client.user.id}> `);
    
    if(!message.content.startsWith(prefix)) return;
    //let prefix = config.prefix;
    let messageArray = message.content.split(" ");
    let cmd = messageArray[0];
    let args = messageArray.slice(1);

    let commandfile = client.commands.get(cmd.slice(prefix.length));
    if(commandfile) commandfile.run(client,message,args);

   

})

client.login(config.token).catch(err => console.log(`${err.name} ${err.message}`));
