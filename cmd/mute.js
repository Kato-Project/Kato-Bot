const Discord = require("discord.js");

module.exports.run = async (client, message, args) => {


if (!message.member.hasPermissions(["MUTE_MEMBERS", "KICK_MEMBERS"]) || !message.guild.owner) return message.channel.send('Kamu tidak Mempunyai Akses!');
if (!message.guild.me.hasPermissions(["MANAGE_ROLES", "ADMINISTRATOR"])) return message.channel.send("Aku tidak mempunyai akses!");

let mutee = message.mentions.members.first() || message.guild.members.get(args[0]);
if(!mutee) return message.channel.send("Tag user yang ingin di bisukan!");

let reason = args.slice(1).join(" ");
if(!reason) reason = "tidak diberi alasan";

let muterole = message.guild.roles.find(r => r.name === "Muted");

mutee.addRole(muterole.id).then(() => {
    mutee.send(`kamu telah dimute di ${message.guild.name} dengan alasan ${reason}`)
    message.channel.send(`${mutee.user.username} telah selesai di mute.`)
})

let embed = new Discord.RichEmbed()
.setTitle(`Mute | ${mutee.tag}`)
.setColor("#985ce7")
.addField("User", mutee , true)
.addField("Moderator", message.author, true)
.addField("Alasan", reason, true)
.setTimestamp()
.setFooter(`${message.member.id}`, message.guild.iconURL);

client.channels.get("438330646537044013").send(embed);
  
  
}

module.exports.help = {
    name : "bisu"
}
