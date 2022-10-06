const { SlashCommandBuilder } = require('discord.js');

module.exports = {
  data: new SlashCommandBuilder()
    .setName('betray')
    .setDescription('https://waa.ai/tBKY'),
  async execute(interaction) {
    await interaction.reply('https://cdn.discordapp.com/attachments/314512031313035264/699623867924086884/image0.jpg');
  },
};