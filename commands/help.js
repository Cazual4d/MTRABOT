const botconfig = require("discord.js");
const Discord = require('discord.js');

module.exports.run = async (bot,message, args) =>{

    let hicon = bot.user.displayAvatarURL
    let helpEmbed = new Discord.RichEmbed()
    .setDescription("This is a list of the commands availble")
    .setColor("#f90404")
    .addField("Availble Commands", "!serverinfo, !botinfo, !kick, !ban, !report, !help")
    .setThumbnail(hicon)
    //.addField("How to apply", "To apply first read" )


return message.channel.send(helpEmbed);
  }

  module.exports.help ={
    name:"help"
  }
