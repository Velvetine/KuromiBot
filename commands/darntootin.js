const { SlashCommandBuilder } = require('discord.js');

module.exports = {
  data: new SlashCommandBuilder()
    .setName('darntootin')
    .setDescription('Speaks for itself, I would say!'),
  async execute(interaction) {
    await interaction.reply('https://media.discordapp.net/attachments/425323394704080899/519546867889995776/IMG_20180130_095432.jpg');
  },
};