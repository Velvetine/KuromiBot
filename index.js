// Get those necessary discord.js classes in
const fs = require('node:fs');
const path = require('node:path');
const { Client, Collection, GatewayIntentBits } = require('discord.js');
const { token } = require('./config.json');

// Let's create a new client instance
const client = new Client({ intents: [GatewayIntentBits.Guilds] });

// Setting up the command handler!
client.commands = new Collection();
const commandsPath = path.join(__dirname, 'commands');
const commandFiles = fs.readdirSync(commandsPath).filter(file => file.endsWith('.js'));

for (const file of commandFiles) {
  const filePath = path.join(commandsPath, file);
  const command = require(filePath);
  // Let's set a new item in the Collection
  // With the key as the command name and the value as the exported module
  client.commands.set(command.data.name, command);
}

// Once the client is ready, run this code just once!
client.once('ready', () => {
  console.log('Open! Door of Dreams!');
});

// After running deploy-commmands.js, we now listen for interactions
client.on('interactionCreate', async interaction => {
  if (!interaction.isChatInputCommand()) return;

  const command = client.commands.get(interaction.commandName);

  if (!command) return;

  try {
    await command.execute(interaction);
  } catch (error) {
    console.error(error);
    await interaction.reply({ content: 'Ngah! Something broke! Definitely making a Kuromi note for this...', ephemeral: true });
  }
});

// And now we login to Discord with our token
client.login(token);