const { SlashCommandBuilder } = require('discord.js');

module.exports = {
  data: new SlashCommandBuilder()
    .setName('wigan')
    .setDescription('Posts a video of !britishcuisine'),
  async execute(interaction) {
    await interaction.reply('https://www.youtube.com/watch?v=N_oIys5KS4A');
  },
};