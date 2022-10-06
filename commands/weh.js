const { SlashCommandBuilder } = require('discord.js');

module.exports = {
  data: new SlashCommandBuilder()
    .setName('weh')
    .setDescription('WEH!'),
  async execute(interaction) {
    await interaction.reply('https://fxtwitter.com/animegirlnoises/status/1219339374535405569');
  },
};