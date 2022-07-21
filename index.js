// Get those necessary discord.js classes in
const { Client, GatewayIntentBits } = require('discord.js');
const { token } = require('./config.json');

// Let's create a new client instance
const client = new Client({ intents: [GatewayIntentBits.Guilds] });

// Once the client is ready, run this code just once!
client.once('ready', () => {
  console.log('Open! Door of Dreams!');
});

// And now we login to Discord with our token
client.login(token);