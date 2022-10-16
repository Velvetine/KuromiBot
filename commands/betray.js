const { SlashCommandBuilder } = require('discord.js');

module.exports = {
  data: new SlashCommandBuilder()
    .setName('betray')
    .setDescription('we have left God\'s country'),
  async execute(interaction) {
    await interaction.reply('https://waa.ai/fN8a.png');
  },
};