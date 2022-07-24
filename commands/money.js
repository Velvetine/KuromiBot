const { SlashCommandBuilder } = require('discord.js');

module.exports = {
  data: new SlashCommandBuilder()
    .setName('money')
    .setDescription('Posts a clip from the 1993 Tom & Jerry film.'),
  async execute(interaction) {
    await interaction.reply('https://www.youtube.com/watch?v=8CTeLy3Ujxc');
  },
};