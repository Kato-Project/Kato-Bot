const Discord = require("discord.js");

module.exports.run = async (client, message, args) => {


if (!message.member.hasPermissions(["MANAGE_ROLES", "KICK_MEMBERS"]) || !message.guild.owner) return message.channel.send('Kamu tidak Mempunyai Akses!');
if (!message.guild.me.hasPermissions(["MANAGE_ROLES", "ADMINISTRATOR"])) return message.channel.send("Aku tidak mempunyai akses!");

let elm = message.mentions.members.first() || message.guild.members.get(args[0]);
if(!elm) return message.channel.send("tag user yang ingin di elm!");

let reason = args.slice(1).join(" ");
if(!reason) reason = "-";

let copotsantai = message.guild.roles.find(r => r.name === "Santai");
elm.removeRole(copotsantai.id) 

let copotNSFW = message.guild.roles.find(r => r.name === "NSFW");
elm.removeRole(copotNSFW.id) 

let berimute = message.guild.roles.find(r => r.name === "ELM");

elm.addRole(berimute.id).then(() => {
    message.delete()
    elm.send(`kamu telah di ELM dengan alasan ${reason}`)
    message.channel.send(`${elm.user.username} telah selesai di ELM.`)
})

let embed = new Discord.RichEmbed()
.setTitle(`ELM | ${elm.tag}`)
.setColor("#985ce7")
.addField("User", elm , true)
.addField("Moderator", message.author, true)
.addField("Alasan", reason, true)
.setTimestamp()
.setFooter(`${message.member.id}`, message.guild.iconURL);

client.channels.get("438330646537044013").send(embed);
   
  message.guild.channels.find(c => c.name === "ruang-bk").send(`Hai **${elm.tag}**, Selamat datang di <#505005439792971776> , member yang hanya bisa melihat channel ini artinya sedang dalam hukuman karena telah melanggar sesuatu. Jika anda merasa pernah melakukan sesuatu yang melanggar rules, silahkan beritahu disini agar segera diproses oleh staff dan dapat melanjukan kembali aktivitas chat secara normal.`);
}

module.exports.help = {
    name : "elm"
}
