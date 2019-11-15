const discord = require('discord.js');
const client = new discord.Client();
const config = require("./botconfig.json");
let prefix = config.prefix;
let token = config.token;
const fs = require("fs"); //fs ini perlu
client.commands = new discord.Collection();

 fs.readdir("./cmd", (err, files) => {
  if(err) console.log(err);
  let filejs = files.filter(f => f.split(".").pop() === "js");
  if(filejs.length <= 0){
    console.log("This command is not found.");
    return;
  }

  
  filejs.forEach((f, i) => {
    let props = require(`./cmd/${f}`);
    client.commands.set(props.help.name, props);
  });
});


client.on("ready", () => {
  console.log("lapor, bot telah aktif!");

  function banyakStatus() {
    let genre1 = "with Kato";
    let genre2 = "type k!help";
    let genre3 = "tanpa kato hidup serasa hampa"
    let status = [
        genre1,
        genre2,
        genre3
    ]

    let statusR = Math.floor(Math.random() * status.length);
    client.user.setActivity(status[statusR] , {type : "WATCHING" , status : "Idle"});
  };
  setInterval(banyakStatus, 10000);
});

client.on('message', msg => {
  const attachment = new discord.Attachment('https://cdn.discordapp.com/attachments/519859252966457369/641764949198241823/ezgif.com-optimize.gif')
  if (msg.content === 'see') { 
    msg.channel.send(attachment);
  }
});

client.on('message', m => {
  const attachment = new discord.Attachment('https://cdn.discordapp.com/attachments/519859252966457369/641765228987809802/FB_IMG_1571834909693.png')
  if (m.content === 'pedo') { 
    m.channel.send(attachment);
  }
});

client.on("message", async message => {
  if(message.author.bot) return;

  let messageArray = message.content.split(" ");
  let cmd = messageArray[0];
  let args = messageArray.slice(1);
  

 if(!cmd.startsWith(prefix)) return;

  let filecmd = client.commands.get(cmd.replace(prefix, ''));
  if(filecmd) filecmd.run(client, message, args);
});



client.login(token);
