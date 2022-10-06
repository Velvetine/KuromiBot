const { SlashCommandBuilder } = require('discord.js');

module.exports = {
  data: new SlashCommandBuilder()
    .setName('idoltime')
    .setDescription('NEWS: Please welcome Idol Time Pripara to the Crunchyroll Family ~'),
  async execute(interaction) {
    await interaction.reply('https://twitter.com/Crunchyroll/status/1359241445333323779');
  },
};