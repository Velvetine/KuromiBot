const { SlashCommandBuilder } = require('discord.js');

module.exports = {
  data: new SlashCommandBuilder()
    .setName('cureboom')
    .setDescription('Watch Cure Black unleash her ultimate attack!'),
  async execute(interaction) {
    await interaction.reply('https://cdn.discordapp.com/attachments/314512031313035264/457305533272293377/spin2.gif');
  },
};