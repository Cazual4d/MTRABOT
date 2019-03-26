const botconfig = require("discord.js");
const Discord = require('discord.js');

module.exports.run = async (bot,message, args) =>{


    let bicon = bot.user.displayAvatarURL;
    let botembed = new Discord.RichEmbed()
    .setDescription("This Bot Is Used for Loan Applications, For more help Use !help")
    .setColor("#f904045")
    .setThumbnail(bicon)
    .addField("Bot Name", bot.user.username)
    .addField("Created on", bot.user.createdAt);

    return message.channel.send(botembed);
  }

  module.exports.help ={
    name:"botinfo"
  }
