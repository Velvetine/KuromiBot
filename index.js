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

const eventsPath = path.join(__dirname, 'events');
const eventFiles = fs.readdirSync(eventsPath).filter(file => file.endsWith('.js'));

for (const file of eventFiles) {
  const filePath = path.join(eventsPath, file);
  const event = require(filePath);
  if (event.once) {
    client.once(event.name, (...args) => event.execute(...args));
  }
  else {
    client.on(event.name, (...args) => event.execute(...args));
  }
}
// After running deploy-commmands.js, we now listen for interactions
client.on('interactionCreate', async interaction => {
  if (!interaction.isChatInputCommand() && !interaction.isButton() && !interaction.isUserContextMenuCommand()) return;

  const command = client.commands.get(interaction.commandName);

  if (!command) return;

  try {
    await command.execute(interaction);
  } catch (error) {
    console.error(error);
    await interaction.reply('Ngah! Something broke! Definitely making a Kuromi note for this...');
  }
});

// The following will break once Discord makes message content a privileged intent for ALL bots.
// TODO: Find an alternate way of doing this before then.
client.on('messageCreate', async message => {
  if (!message.author.bot) {
    if (message.content.includes(':erikasquish:') || message.content.includes(':erikasquishloop:') || message.content.includes(':erikasquishfastloop:'))
      message.channel.send('<@713528433069654069> has been squished!');
    else if (message.content.includes(':papayatwirl:') || message.content.includes(':papayatwirlfast:'))
      message.channel.send('<@270445864080637953> has spun around!');
    else if (message.content.includes(':tsubomistretch:'))
      message.channel.send('<@171225691751317504> has been stretched!');
    else return;
  } else return;
});

// And now we login to Discord with our token
client.login(token);