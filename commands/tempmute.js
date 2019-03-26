const Discord = require('discord.js');
const ms = require("ms");

module.exports.run = async (bot,message, args) =>{

  let tomute = message.mentions.members.first() || message.guild.member(args[0]);
  if(!tomute) return message.reply("Couldn't find user")
  if(!message.member.hasPermission("MANAGE_MESSAGES")) return message.reply("Sorry Sunshine, not allowed to do that!")
  if(tomute.hasPermission("MANAGE_MESSAGES")) return message.reply ("Can't mute that user");
  let muterole = message.guild.roles.find(`name`, "muted");
  if(!muterole){
    try{
      muterole = await message.guild.createRole({
        name: "muted",
        color: "#f90404",
        permissions:[]
      })
      message.guild.channels.forEach(async (channel, id) =>{
        await channel.overwritePermission(muterole, {
          SEND_MESSAGES: false,
          ADD_REACTIONS: false
        });
      });
  }catch(e){

    console.log(e.stack);
    }
  }
  let mutetime = args[1];
  if(!mutetime) return message.reply("You need to state how long!");

  await(tomute.addRole(muterole.id));
  message.reply(`<@${tomute.id}> Has been muted for ${ms(ms(mutetime))}`);
  setTimeout(function(){
    tomute.removeRole(muterole.id);
    message.channel.send(`<@${tomute.id}> Has been unmuted`)
  }, ms(mutetime));
}

  module.exports.help = {
    name: "tempmute"
  }
