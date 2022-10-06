const { SlashCommandBuilder } = require('discord.js');

module.exports = {
  data: new SlashCommandBuilder()
    .setName('keyframes')
    .setDescription('MAPPA be like'),
  async execute(interaction) {
    await interaction.reply('https://cdn.discordapp.com/attachments/425323394704080899/471742719513985028/kinema.png');
  },
};