const { SlashCommandBuilder } = require('discord.js');

module.exports = {
  data: new SlashCommandBuilder()
    .setName('worldpremiere')
    .setDescription('For when you want to world premiere something'),
  async execute(interaction) {
    await interaction.reply('https://www.youtube.com/watch?v=To9ECJaAEIo');
  },
};