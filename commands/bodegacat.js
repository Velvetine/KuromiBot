const { SlashCommandBuilder } = require('discord.js');

module.exports = {
  data: new SlashCommandBuilder()
    .setName('bodegacat')
    .setDescription('Taking pets like no problem')
    .addUserOption(option =>
      option.setName('user')
      .setDescription('Who?')),

  async execute(interaction) {
    const user = interaction.options.getUser('user');
    await interaction.reply(`<@${user.id}> takes a pet like no problem. Right? Not afraid at all! That's a great cat right there!\nhttps://fxtwitter.com/Bodegacats_/status/967020109167505408`);
  },
};