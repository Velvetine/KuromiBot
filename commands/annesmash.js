const { SlashCommandBuilder } = require('discord.js');

module.exports = {
  data: new SlashCommandBuilder()
    .setName('annesmash')
    .setDescription('ANNE COMING IN WITH THE WOODEN CHAIR'),
  async execute(interaction) {
    await interaction.reply('https://media.discordapp.net/attachments/425323394704080899/495581931531010048/Akage_no_Anne_-_14_BD-rip_960x720_x264_FLAC.mkv_00_09_53.509_0001.png');
  },
};