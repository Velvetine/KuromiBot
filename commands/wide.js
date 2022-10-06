const { SlashCommandBuilder } = require('discord.js');

module.exports = {
  data: new SlashCommandBuilder()
    .setName('wide')
    .setDescription('wiiiiiiiiiiiide'),
  async execute(interaction) {
    await interaction.reply('https://cdn.discordapp.com/attachments/425323394704080899/535599110951010325/wide.png');
  },
};