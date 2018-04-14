//Messibot Discord Bot. Author: ImTotallyNotMessi#5467

const Discord = require('discord.js');
const config = require("./config.json");
const client = new Discord.Client();

client.on('ready', () => {
  console.log('Messibot is online and ready to go!');
});

<<<<<<< HEAD
client.on("reconnecting", () => {
  console.log("Damnit, were'd that cable run off to... Reconnecting.");
});

client.on("disconnected", () => {
  console.log("Disconnected from Discord");
  process.exit(1);
});

=======
>>>>>>> e089d6aa2b28d85e9fa6a424d77d7ece92043ef0
// Gives the user information on the bot, including creators, donation link, etc.
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
/*client.on('message', message => {
  if (message.content === '-commands') {
    
  }
});*/

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