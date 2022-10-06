const { SlashCommandBuilder } = require('discord.js');

module.exports = {
  data: new SlashCommandBuilder()
    .setName('macross7')
    .setDescription('FUCK HARMONY GOLD'),
  async execute(interaction) {
    await interaction.reply('🌃 WE BUILT THIS CITY! 🌃\nhttps://streamable.com/wlnrw');
  },
};