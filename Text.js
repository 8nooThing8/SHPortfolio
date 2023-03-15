const { Client, GatewayIntentBits } = require('discord.js');
const client = new Client({
  intents: [
    GatewayIntentBits.Guilds,
    GatewayIntentBits.GuildMessages,
  ],
});

client.login('MTA2NTYwNDIyMTI1ODQzNjY4OA.GZk2M' + 'v.NB9frUEeU-TXouvQZam_ATIZDhKVBzfmXmO6lE');


client.on('ready', () => {
  console.log(`Logged in as ${client.user.tag}!`);

});

client.on('message', message => {
  if (message.content === "a") {
console.log(`read`);
  }
});