const { SlashCommandBuilder } = require('discord.js');
const fs = require('fs');
const file = 'txtfiles/chaos.txt';


module.exports = {
  data: new SlashCommandBuilder()
    .setName('chaos')
    .setDescription('What\'s a poll without a little CHAOS?'),

  async execute(interaction) {
    const kuromi = interaction.guild.emojis.cache.find(emoji => emoji.name === 'kuromiplotting')
    if (interaction.user.id == "171225691751317504" || interaction.user.id == "86257994576191488") {
      const text = fs.readFileSync(file).toString('utf-8');
      const textByLine = text.split('\n');
      const max = textByLine.length - 2;
      const selection = Math.floor(Math.random() * max);
      await interaction.reply(`${kuromi} ` + selection);
    }
    else {
      await interaction.reply('What makes you think YOU get to unleash chaos?');
    }
  }
};