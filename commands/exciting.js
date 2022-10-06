const { SlashCommandBuilder } = require('discord.js');

module.exports = {
  data: new SlashCommandBuilder()
    .setName('exciting')
    .setDescription('For when things are EXCITING'),
  async execute(interaction) {
    await interaction.reply('https://cdn.discordapp.com/attachments/442810890371465236/501153160170045470/exciting.jpg');
  },
};