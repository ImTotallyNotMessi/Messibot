//Messibot Discord Bot. Author: ImTotallyNotMessi#5467

const Discord = require('discord.js');
const config = require("./config.json");
const client = new Discord.Client();
var RichEmbed;
var embed;
var buffer = 0;
var fortune = [
  "It is certain",
  "It is decidedly so",
  "Without a doubt",
  "Yes definitely",
  "You may rely on it",
  "As I see it, yes",
  "Most Likely",
  "Outlook good",
  "Yes",
  "Signs point to yes",
  "Reply hazy try again",
  "Ask again later",
  "Better not tell you now",
  "Cannot predict now",
  "Concentrate and ask again",
  "Don't count on it",
  "My count on it",
  "My reply is no",
  "My sources say no",
  "Outlook not so good",
  "Very doubtful"
  ]

client.on('ready', () => {
  console.log('Messibot is online and ready to go!');
});

// Bot Info
client.on('message', message => {
  if (message.content === '-info') {
    let embed = new Discord.RichEmbed()
      .addField("Welcome to messibot :D")
      .setColor(0xf4c430)
      .setFooter("Your family tree lgbt")
      .setThumbnail(message.author.avatarURL)
    }
});

// Gives user 8ball response
client.on('message', message => {
  if(message.content == '-8ball'){
    message.channel.send(fortune[(Math.floor(Math.random()*20))]);
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

// Gives the user their id
client.on('message', message => {
  if (message.content === '-id') {
    message.reply(message.author.id);
  }
});

client.login(config.token);