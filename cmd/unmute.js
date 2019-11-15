const Discord = require('discord.js');
const moment = require('moment')

module.exports.run = async (client, message, args) => {
  
let userID = message.guild.members.get(args[0]);
 let userMention = message.mentions.users.first();
  
  // userMention
if (userMention) {
// roleMuted
let roleMuted = message.guild.roles.find(role => role.name === "Muted");
if (!message.guild.member(userMention).roles.has(roleMuted.id)) return message.channel.send("User tidak memiliki role itu.");

// eksekusi
await message.guild.member(userMention).removeRole(roleMuted.id);

// pesan
  message.channel.send(`${userMention.tag} telah di unmute!`);

//log
let embed = new Discord.RichEmbed()
.setTitle(`Unmute | ${userMention.tag}`)
.setColor("#985ce7")
.addField("User", userMention , true)
.addField("Moderator", message.author, true)
.setTimestamp()
.setFooter(`${message.member.id}`, message.guild.iconURL);
let ID = client.channels.get("438330646537044013").send(embed)
  
};
 // userID
if (userID) {
// roleMuted
let roleMuted = message.guild.roles.find(role => role.name === "Muted");
if (!message.guild.member(userID).roles.has(roleMuted.id)) return message.channel.send("User tidak memiliki role itu.");

// eksekusi
await message.guild.member(userID).removeRole(roleMuted.id);

// pesan
  message.channel.send(`${userID.user.tag} telah di unmute!`);
  
// log
let embed = new Discord.RichEmbed()
.setTitle(`Mute | ${userID.tag}`)
.setColor("#985ce7")
.addField("User", userID , true)
.addField("Moderator", message.author, true)
.setTimestamp()
.setFooter(`${message.member.id}`, message.guild.iconURL);
client.channels.get("438330646537044013").send(embed)
  
};

}


module.exports.help = {
    name : "unbisu"
}
