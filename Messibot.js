//Messibot Discord Bot. Author: ImTotallyNotMessi#5467

const Discord = require('discord.js');
const config = require("./config.json");
const radio = require("./radio.json");
const client = new Discord.Client();
const bot = false;
const inChannel = false;

// The ready event is vital, it means that your bot will only start reacting to information
// from Discord _after_ ready is emitted
client.on('ready', () => {
  console.log('Messibot is online and ready to go!');
});

client.on("disconnected", function () {
  console.log("Messibot shutdown");
  process.exit(1);
});

bot.on("message", function (message) {
  if (message.author.id != bot.user.id && (message.content[0] === "!" || message.content.indexOf (bot.user.mention()) == 0 )) {
      //console.log("Incoming command '" + message.content + "' from user " + message.author);
      var cmdTxt = message.content.split(" ")[0].substring(1);
      var suffix = message.content.substring(cmdTxt.length + 2);
      if (message.content.indexOf(bot.user.mention()) == 0){
          try {
              cmdTxt = message.content.split(" ")[1];
              suffix = message.content.substring(bot.user.mention().length+cmdTxt.length + 2);
          } catch (e){
              bot.sendMessage(message.channel,"Yes?");
              return;
          }
      }
      
      var rstat = radio[cmdTxt]
      
      if (cmdTxt === "-radio") {
          bot.sendMessage(message.channel, "__**Available radio stations:**__", function () { // message.author
              for(var fxes in radio) {
                  var info = "**-" + fxes + "**";
                  var usage = radio[fxes].usage;
                  
                  var name = radio[fxes].name;
                  if (name) {
                      info += "\n\t" + name;
                  }
                  
                  var url = radio[fxes].url;
                  if (url) {
                      info += "\n\t" + url;
                  }
                  bot.sendMessage(message.channel, info); // message.author
              }
          });
      }
      
      if (rstat && inChannel) {
              if (bot.voiceConnection.playing) {
                  bot.voiceConnection.stopPlaying();
              }
              bot.voiceConnection.playFile(rstat.url);
              bot.setStatus("idle", rstat.name);
      }
      
      if (cmdTxt === "-join") {
          if (suffix) {
              for (var channel of message.channel.server.channels) {
                  if (!suffix || channel.name === suffix) {
                      bot.joinVoiceChannel(channel, function (error) {
                          if (error != null) {
                              console.log(error);
                              process.exit(1);
                          }
                      });
                      inChannel = true;
                  }
              }
          }
      }
      
      if (cmdTxt === "-leave") {
          if (inChannel) {
              bot.setStatus("idle");
              bot.leaveVoiceChannel();
              inChannel = false;
          }
      }
      
      if (cmdTxt === "-stop") {
          if (inChannel) {
              bot.voiceConnection.stopPlaying();
              bot.setStatus("idle");
          }
      }
      
      if (message.author == bot.user) {
          return;
      }
  }
});

client.on('message', message => {
  if (message.content === '-info') {
    message.send = {
      "embed": {
        "title": "Welcome to _**Messibot**_",
        "description": "_**Thank You**_ for using the bot , this is a simple bot made by a teen from Maine, more features will come out as time goes on. :)",
        "color": 790106,
        "timestamp": "2018-03-10T18:49:59.062Z",
        "footer": {
          "icon_url": "https://cdn.discordapp.com/embed/avatars/0.png",
          "text": "For a full list of what the bot can do, do -commands"
        },
        "thumbnail": {
          "url": "https://cdn.discordapp.com/attachments/378363569051402243/422113228710084628/messi.png"
        },
        "author": {
          "name": "ImTotallyNotMessi#5467",
          "url": "https://discordapp.com",
          "icon_url": "https://cdn.discordapp.com/avatars/197118355033948160/60cc674fb15e4c69485138c498f85c47.png?size=2048"
        },
        "fields": [
          {
            "name": "💰Donations 💰",
            "value": "Feel free to donate to me by clicking [here](http://www.paypal.me/ImTotallyNotMessi), this supports the bots development, aswell as the price of an Official VPS to host. This is not required, 100% optional."
          },
          {
            "name": "💻People who helped MessiBot's Development💻",
            "value": "__**People who let me test the bot on their Server**__\n•_**Happy**_, *Happy Place*\n•_**Jackbooob**_, *Jacbooob and Vegene*\n•_**RapidFire**_, *Itasha Central*\n__**Developers**__\n•_**Messi**_, *Vertigo Gaming*"
          }
        ]
      }
    }
  }});

// Bot Commands
client.on('message', message => {
  if (message.content === '-commands') {
    
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

// Gives the user a list of their roles
client.on('message', message => {
  if (message.content === '-roles') {
    message.reply(message.author.roles);
  }
});

client.login(config.token);