const { SlashCommandBuilder } = require('discord.js');

module.exports = {
  data: new SlashCommandBuilder()
    .setName('thedog')
    .setDescription('what the dog doin'),
  async execute(interaction) {
    await interaction.reply('https://cdn.discordapp.com/attachments/399954211816865792/767058889509175296/Serenae_Healin_GoodPrecure_-_16_720p.mkv_snapshot_01.22.635.png');
  },
};