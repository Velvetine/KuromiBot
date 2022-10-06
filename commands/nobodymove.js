const { SlashCommandBuilder } = require('discord.js');

module.exports = {
  data: new SlashCommandBuilder()
    .setName('nobodymove')
    .setDescription('Stop right there, criminal scum'),
  async execute(interaction) {
    await interaction.reply('https://waa.ai/tiiT');
  },
};