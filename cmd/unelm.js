const Discord = require("discord.js");



module.exports.run = async (client, message, args) => {


if (!message.member.hasPermissions(["MANAGE_ROLES", "KICK_MEMBERS"]) || !message.guild.owner) return message.channel.send('Kamu tidak Mempunyai Akses!');
if (!message.guild.me.hasPermissions(["MANAGE_ROLES", "ADMINISTRATOR"])) return message.channel.send("Aku tidak mempunyai akses!");

let korban = message.mentions.members.first() || message.guild.members.get(args[0]);
if(!korban) return message.channel.send("tag user yang ingin di unelm!");


let psantai = message.guild.roles.get("627312787776864276");
korban.addRole(psantai) 

let pNSFW = message.guild.roles.get("594866301529227282");
korban.addRole(pNSFW) 

let ELM = message.guild.roles.get("505004825621168128");

korban.removeRole(ELM).then(() => {
    message.delete()
    
    message.channel.send(`${korban.user.username} telah selesai di unelm.`)
})

let embed = new Discord.RichEmbed()
.setTitle(`UNELM | ${korban.tag}`)
.setColor("#985ce7")
.addField("User", korban , true)
.addField("Moderator", message.author, true)
.setTimestamp()
.setFooter(`${message.member.id}`, message.guild.iconURL)

client.channels.get("438330646537044013").send(embed);

}

module.exports.help = {
    name : "unelm"
}
