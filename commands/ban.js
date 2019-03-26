const Botconfig = require("discord.js");
const Discord = require('discord.js');

module.exports.run = async (bot,message, args) =>{
  let bUser = message.mentions.members.first() || message.guild.member(args[0]);
  if(!bUser) return message.channel.send("Cant find user!");
  let bReason = args.join(" ").slice(22);
  if(!message.member.hasPermission("MANAGE_MESSAGES")) return message.channel.send("Not today Sunshine");
  if(bUser.hasPermission("MANAGE_MESSAGES")) return message.channel.send("That User can't be Banned!");

  let banEmbed = new Discord.RichEmbed()
  .setDescription("~Ban~")
  .setColor("#f90404")
  .addField("Banned User", `${bUser}`)
  .addField("Banned By", `${message.author}`)
  .addField("Banned From", message.channel)
  .addField("Time", message.createdAt)
  .addField("Reason", bReason);

  let banchannel = message.guild.channels.find(c => c.name == "bans");
  if(!banchannel) return message.channel.send("Can't Find Bans channel.");


  message.guild.member(bUser).ban(bReason);
  banchannel.send(banEmbed);


  return;

}

  module.exports.help ={
  name:"ban"
}
