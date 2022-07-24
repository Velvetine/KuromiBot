const { SlashCommandBuilder } = require('discord.js');

module.exports = {
  data: new SlashCommandBuilder()
    .setName('sheri')
    .setDescription('!sheri'),
  async execute(interaction) {
    await interaction.reply('https://cdn.discordapp.com/attachments/314512031313035264/701734959987294288/Prillya_Panic.png');
  },
};