const Discord = require('discord.js');
const client = new Discord.Client();

client.on('ready', () => {
  console.log(`Logged in as ${client.user.tag}!`);
});

client.on('message', msg => {
  if (msg.content === 'سلام عليكم') {
    msg.reply('وعليكم سلام حياك');
  }
});


client.on("ready", function() {
  var words = [`By Re Team With FanForMe`, "Re,FanForMe™", "?help"];
  var l = -1;
  var b = 0;
  var mss = "4000";
  setInterval(function() {
    if (l == -1) {
      b = 1;
    }
    if (l == words.length - 1) {
       b = -1;
    }
    l = l + b;
    client.user.setGame(words[l], `http://www.twitch.tv/${client.user.username}`);
  
  }, mss);
});


client.login(process.env.BOT_TOKEN);
