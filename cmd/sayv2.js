// NPM Package = discord.js
const Discord = require("discord.js");

module.exports.run = async (bot, message, args) => {
    let pesan = args.slice(0).join(" ");
    if (pesan == "") pesan = " ";    
    if (message.attachments.size > 0){
        let mAuthor = message.author.lastMessageID;
        let message_id = message.channel.messages.get(`${mAuthor}`);
        let gAttachment = message_id.attachments.map(file => file.id);
        let attachment_id = message_id.attachments.get(`${gAttachment}`);
        let attached = `${attachment_id.url}`;

        message.delete();

        message.channel.send(`${pesan}`, {disableEveryone : true, files: [`${attached}`]});
    }
    else {
        if(!args[0]){
            return;
        } else{
            message.delete();

            message.channel.send(`${pesan}`, {disableEveryone : true});
        }
    }    
}
module.exports.help = {
    name: "say"
}
