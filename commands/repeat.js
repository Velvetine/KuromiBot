const { SlashCommandBuilder } = require('discord.js');

module.exports = {
  data: new SlashCommandBuilder()
    .setName('repeat')
    .setDescription('For more recursive situations'),
  async execute(interaction) {
    await interaction.reply('https://cdn.discordapp.com/attachments/314512031313035264/468457556470267904/15thousanddiscussions_Nagato.jpg');
  },
};