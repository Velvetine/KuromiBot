const { SlashCommandBuilder } = require('discord.js');

module.exports = {
  data: new SlashCommandBuilder()
    .setName('oyoyo')
    .setDescription('DESS'),
  async execute(interaction) {
    await interaction.reply('https://cdn.discordapp.com/attachments/425323394704080899/602921585304797242/oyoyooo.mp4');
  },
};