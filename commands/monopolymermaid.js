const { SlashCommandBuilder } = require('discord.js');

module.exports = {
  data: new SlashCommandBuilder()
    .setName('monopolymermaid')
    .setDescription(':lauracrown:'),
  async execute(interaction) {
    await interaction.reply('https://www.youtube.com/watch?v=gk8XGnKLhfU');
  },
};