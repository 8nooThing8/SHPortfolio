const { Client, GatewayIntentBits } = require('discord.js');
const client = new Client({
  intents: [
    GatewayIntentBits.Guilds,
    GatewayIntentBits.GuildMessages,
  ],
});

client.login('MTA2NTYwNDIyMTI1ODQzNjY4OA.Gv1IKm.QctljS3yYwNUfUliaXZWuZe' + 'R3XScR8KHzYUcSs');

client.on('ready', () => {
  console.log(`Logged in as ${client.user.tag}!`);
});

function sendMessage() {
  const channel = client.channels.cache.get('1013835199752183831');
  channel.send('Hello everyone');
}
