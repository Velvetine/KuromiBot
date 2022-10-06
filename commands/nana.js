const { SlashCommandBuilder } = require('discord.js');

module.exports = {
  data: new SlashCommandBuilder()
    .setName('nana')
    .setDescription('77777777777777'),
  async execute(interaction) {
    await interaction.reply('https://twitter.com/CassKaasan/status/1178036571116720128');
  },
};