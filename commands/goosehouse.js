const { SlashCommandBuilder } = require('discord.js');

module.exports = {
  data: new SlashCommandBuilder()
    .setName('goosehouse')
    .setDescription('Posts a lovely track!'),
  async execute(interaction) {
    await interaction.reply('https://www.youtube.com/watch?v=aEu2fSfd3j0');
  },
};