const { SlashCommandBuilder } = require('discord.js');

module.exports = {
  data: new SlashCommandBuilder()
    .setName('mugistrong')
    .setDescription('POWERFUL'),
  async execute(interaction) {
    await interaction.reply('https://cdn.discordapp.com/attachments/442810890371465236/470330971590361089/mugistrong.gif');
  },
};