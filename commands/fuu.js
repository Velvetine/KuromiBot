const { SlashCommandBuilder } = require('discord.js');

module.exports = {
  data: new SlashCommandBuilder()
    .setName('fuu')
    .setDescription('🍃'),
  async execute(interaction) {
    await interaction.reply('https://cdn.discordapp.com/attachments/314512031313035264/830065953416019998/fuu_2.png');
  },
};