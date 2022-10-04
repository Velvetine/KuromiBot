const { SlashCommandBuilder } = require('discord.js');

module.exports = {
  data: new SlashCommandBuilder()
    .setName('exclusive')
    .setDescription('For when you want to exclusive something'),
  async execute(interaction) {
    await interaction.reply('https://www.youtube.com/watch?v=cNtyAKv9al4');
  },
};