const Botconfig = require("discord.js");
const Discord = require('discord.js');

module.exports.run = async (bot,message, args) =>{
    let kUser = message.guild.member(message.mentions.users.first() || message.guild.members.get(args[0]));
    if(!kUser) return message.channel.send("Cant find user!");
    let kReason = args.join(" ").slice(22);
    if(!message.member.hasPermission("MANAGE_MESSAGES")) return mesage.channel.send("Not today Sunshine");
    if(kUser.hasPermission("MANAGE_MESSAGES")) return message.channel.send("That User can't be kicked!");

    let kickEmbed = new Discord.RichEmbed()
    .setDescription("~Kick~")
    .setColor("#f90404")
    .addField("Kicked User", `${kUser}`)
    .addField("Kicked By", `${message.author}`)
    .addField("Kicked From", message.channel)
    .addField("Time", message.createdAt)
    .addField("Reason", kReason);

    let kickchannel = message.guild.channels.find(c => c.name == "incidents");
    if(!kickchannel) return message.channel.send("Can't Find Incidents channel.");

    message.guild.member(kUser).kick(kReason);
    kickchannel.send(kickEmbed);

  return;
}


  module.exports.help ={
    name:"kick"
  }
