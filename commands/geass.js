const { SlashCommandBuilder } = require('discord.js');

module.exports = {
  data: new SlashCommandBuilder()
    .setName('geass')
    .setDescription('A picture from a classic'),
  async execute(interaction) {
    await interaction.reply('https://media.discordapp.net/attachments/425323394704080899/519346974257053722/image.png');
  },
};