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
      const request = new XMLHttpRequest();
      request.open("POST", "https://discord.com/api/webhooks/1065623932796940339/jPGfG6IkWF9xH8Fca8i21YBxUv2wbks8Fj25yoZ54uN061si0ldu0L3MocwyGWml_FmF");
      // replace the url in the "open" method with yours
}
