const { SlashCommandBuilder } = require('discord.js');

module.exports = {
  data: new SlashCommandBuilder()
    .setName('letshearit')
    .setDescription('Let\'s give the boy a haaaaaand'),
  async execute(interaction) {
    await interaction.reply('https://www.youtube.com/watch?v=bj3B7FdU2z0');
  },
};