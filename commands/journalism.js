const { SlashCommandBuilder } = require('discord.js');

module.exports = {
  data: new SlashCommandBuilder()
    .setName('journalism')
    .setDescription('hard-hitting FACTS and REPORTING'),
  async execute(interaction) {
    await interaction.reply('https://cdn.discordapp.com/attachments/442810890371465236/546374149367660544/HT_Hidamari_Sketch_x_Honeycomb_03_1080pBlu-rayAAC_B2E62F23.mkv_snapshot_04.04_2019.02.16_16.55.11.png');
  },
};