const { ActionRowBuilder } = require('discord.js');
const { SlashCommandBuilder } = require('discord.js');
const { EmbedBuilder, ButtonBuilder } = require('discord.js');
const { ButtonStyle } = require('discord.js');

module.exports = {
  data: new SlashCommandBuilder()
    .setName('source')
    .setDescription('View the source code for Kuromi!'),
  
  async execute(interaction) {
    const row = new ActionRowBuilder()
      .addComponents(
        new ButtonBuilder()
          .setLabel('Source Code')
          .setURL('https://github.com/Velvetine/kuromibot')
          .setStyle(ButtonStyle.Link),
        new ButtonBuilder()
          .setLabel('Bug Report')
          .setURL('https://github.com/Velvetine/kuromibot/issues')
          .setStyle(ButtonStyle.Link),
      );
    
    const embed = new EmbedBuilder()
      .setTitle('はあ？？？？？？？？')
      .setDescription('What do ya MEAN you wanna see how I work? What makes ya think I have PROBLEMS?\nI am PERFECT! Just look at me! But FINE! Here\'s my inner workings! Bleh!')
      .setColor(0xf6a7c0)
      .setImage('https://cdn.discordapp.com/attachments/978420465016115282/1001947739355095150/unknown.png');
    
    await interaction.reply({ embeds: [embed], components: [row] });
  }
}