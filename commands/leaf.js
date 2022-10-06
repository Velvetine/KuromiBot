const { SlashCommandBuilder } = require('discord.js');

module.exports = {
  data: new SlashCommandBuilder()
    .setName('leaf')
    .setDescription('yummy :)'),
  async execute(interaction) {
    await interaction.reply('https://cdn.discordapp.com/attachments/425323394704080899/742737541689507890/basara.mp4');
  },
};