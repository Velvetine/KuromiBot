const { SlashCommandBuilder } = require('discord.js');

module.exports = {
  data: new SlashCommandBuilder()
    .setName('cry')
    .setDescription('So never cry'),
  async execute(interaction) {
    const labra = interaction.guild.emojis.cache.find(emoji => emoji.name === 'labracry');
    await interaction.reply(`${labra} So never cry ${labra}\nhttps://www.youtube.com/watch?v=d2f13rxiThs`);
  },
};