const { SlashCommandBuilder } = require('discord.js');

module.exports = {
  data: new SlashCommandBuilder()
    .setName('bananice')
    .setDescription('DAIBA NANA DID NOTHING WRONG'),
  async execute(interaction) {
    await interaction.reply('https://cdn.discordapp.com/attachments/442810890371465236/481935320523472906/dBKfb3i.gif');
  },
};