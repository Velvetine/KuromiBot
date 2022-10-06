const { SlashCommandBuilder } = require('discord.js');

module.exports = {
  data: new SlashCommandBuilder()
    .setName('catspopcorn')
    .setDescription('Maximum rarity, zero value'),
  async execute(interaction) {
    await interaction.reply('https://cdn.discordapp.com/attachments/442810890371465236/669997287900184597/IMG_20200118_190224.jpg');
  },
};