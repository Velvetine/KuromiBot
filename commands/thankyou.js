const { SlashCommandBuilder } = require('discord.js');

module.exports = {
  data: new SlashCommandBuilder()
    .setName('thankyou')
    .setDescription('you\'re welcome'),
  async execute(interaction) {
    await interaction.reply('https://puu.sh/F3llf/81e4d52dde.webm');
  },
};