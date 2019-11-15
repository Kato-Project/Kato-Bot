const Discord = require("discord.js");

module.exports.run = async (bot, message, args) => {
    const attachment = new Discord.Attachment('https://media.discordapp.net/attachments/447408276628307969/638731836641509407/FB_IMG_1571834909693.png');
       
     message.channel.send(attachment);
}
module.exports.help = {
    name: "pedo"
  }
  
