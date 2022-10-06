const { SlashCommandBuilder } = require('discord.js');

module.exports = {
  data: new SlashCommandBuilder()
    .setName('laborcrime')
    .setDescription('Commit labor crimes!'),
  async execute(interaction) {
    const kuromi = interaction.guild.emojis.cache.find(emoji => emoji.name === 'kuromiplotting');
    await interaction.reply(`<@${interaction.user.id}> is committing labor crimes! ${kuromi}🛠️`);
  },
};