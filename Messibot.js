//Messibot Discord Bot. Author: ImTotallyNotMessi#5467

const Discord = require('discord.js');
const config = require("./config.json");
const client = new Discord.Client();

client.on('ready', () => {
  console.log('Messibot is online and ready to go!');
});



// Bot Commands
client.on('message', message => {
  if (message.content === '-commands') {
    embed = new Discord.RichEmbed()
      .addField("Welcome to messibot :D")
      .setColor(0xf4c430)
      .setFooter("Your family tree lgbt")
      .setThumbnail(message.author.avatarURL)
  }
});

// Gives user client (bot) ping
client.on('message', message => {
  if (message.content === '-ping') {
    message.reply(message.client.ping);
  }
});

// Gives @everyone response
client.on('message', message => {
    if (message.content === '-fuckoff') {
        message.channel.send({ files: ["./img/fuckoff.png"]});
    }
});

// Gives the user their avatar url
client.on('message', message => {
  if (message.content === '-pfp') {
    message.reply(message.author.avatarURL);
  }
});

// Gives the user their joindate
client.on('message', message => {
  if (message.content === '-joindate') {
    message.reply(message.guild.joinedTimestamp);
  }
});

// Gives the user their id
client.on('message', message => {
  if (message.content === '-id') {
    message.reply(message.author.id);
  }
});

client.login(config.token);