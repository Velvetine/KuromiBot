const { SlashCommandBuilder } = require('discord.js');

module.exports = {
  data: new SlashCommandBuilder()
    .setName('somebody')
    .setDescription('APPEAR'),
  async execute(interaction) {
    await interaction.reply('https://cdn.discordapp.com/attachments/314512031313035264/376118253057081354/arianatural6.gif');
  },
};