const { SlashCommandBuilder } = require('discord.js');

module.exports = {
  data: new SlashCommandBuilder()
    .setName('fly')
    .setDescription('Posts a Patlabor track for when you wanna FLY'),
  async execute(interaction) {
    await interaction.reply('🛫 Just I\'m gonna fly away! 🛫\nhttps://www.youtube.com/watch?v=mdXI8rL2hKs');
  },
};