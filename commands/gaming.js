const { SlashCommandBuilder } = require('discord.js');

module.exports = {
  data: new SlashCommandBuilder()
    .setName('gaming')
    .setDescription('gaming'),
  async execute(interaction) {
    await interaction.reply('https://cdn.discordapp.com/attachments/425323394704080899/851728444017606726/gaming.mp4');
  },
};