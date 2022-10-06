const { SlashCommandBuilder } = require('discord.js');

module.exports = {
  data: new SlashCommandBuilder()
    .setName('friendship')
    .setDescription('kamen friendship W'),
  async execute(interaction) {
    await interaction.reply('https://cdn.discordapp.com/attachments/568749204541800478/823247786773839912/video066.mp4');
  },
};