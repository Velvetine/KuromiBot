const { SlashCommandBuilder } = require('discord.js');

module.exports = {
  data: new SlashCommandBuilder()
    .setName('gundoh')
    .setDescription('Posts a clip from one of the greatest anime ever made'),
  async execute(interaction) {
    await interaction.reply('https://www.youtube.com/watch?v=43COTO1sE4I');
  },
};