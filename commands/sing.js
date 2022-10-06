const { SlashCommandBuilder } = require('discord.js');

module.exports = {
  data: new SlashCommandBuilder()
    .setName('sing')
    .setDescription('LISTEN TO MY SONG'),
  async execute(interaction) {
    await interaction.reply('https://cdn.discordapp.com/attachments/314512031313035264/548149785337790465/Moozzi2_Kaitou_Saint_Tail_-_04_BD_1440x1080_x.264-10Bit_Flac.mkv_snapshot_19.35_2018.12.02_23.36.45.png');
  },
};