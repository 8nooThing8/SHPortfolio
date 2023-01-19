const Discord = require('discord.js');
const client = new Discord.Client();

client.login('MTA2NTYwNDIyMTI1ODQzNjY4OA.Gv9Nb7.sprp1KltiUe9BZP9-VU89CDwVMydEQhs1iudEs');

client.on('ready', () => {
  console.log(`Logged in as ${client.user.tag}!`);
});

function sendMessage() {
  const channel = client.channels.cache.get('1013835199752183831');
  channel.send('Hello everyone');
}
