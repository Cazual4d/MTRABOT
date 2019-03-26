const Botconfig = require("discord.js");
const Discord = require('discord.js');

module.exports.run = async (bot,message, args) =>{
  let rUser = message.guild.member(message.mentions.users.first() || message.guild.members.get(args[0]));
  if(!rUser) return message.channel.send("Couldn't find user.");
  let reason = args.join(" ").slice(22);

  let reportEmbed = new Discord.RichEmbed()
  .setDescription("Reports")
  .setColor("#f90404")
  .addField("User being reported", `${rUser}`)
  .addField("Who reported them", `${message.author}`)
  .addField("Channel", message.channel)
  .addField("Time", message.createdAt)
  .addField("Reason", reason);

    let reportschannel = message.guild.channels.find(c => c.name == "reports");
    if(!reportschannel) return message.channel.send("Couldn't find reports channel.");

    message.delete().catch(O_o=>{2});
    reportschannel.send(reportEmbed)

}

module.exports.help ={
  name:"report"
}
