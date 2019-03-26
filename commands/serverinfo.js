const Botconfig = require("discord.js");
const Discord = require('discord.js');

module.exports.run = async (bot,message, args) =>{


    let serverembed = new Discord.RichEmbed()
    .setColor("#f90404")
    .addField("Server Name", message.guild.name)
    .setDescription("Server Information")
    .addField("Created On", message.guild.createdAt)
    .addField("You Joined", message.member.joinedAt)
    .addField("Total Members", message.guild.memberCount);

    return message.channel.send(serverembed);
  }

  module.exports.help ={
    name:"serverinfo"
  }
