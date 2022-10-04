require('dotenv').config();
const { SlashCommandBuilder } = require('discord.js');
const rdo = require('@randomorg/core');
const fs = require('fs');

module.exports = {
  data: new SlashCommandBuilder()
    .setName('roll')
    .setDescription('Let Kuromi decide your fate with TRUE RANDOMNESS')
    .addIntegerOption(option =>
      option.setName('min')
        .setDescription('Your lower limit (inclusive)')
        .setRequired(true))
    .addIntegerOption(option =>
      option.setName('max')
        .setDescription('Your upper limit (inclusive)')
        .setRequired(true))
    .addIntegerOption(option =>
      option.setName('iterations')
        .setDescription('How many times do you want to run this?')
        .setRequired(false)),
  async execute(interaction) {
    const lower = interaction.options.getInteger('min');
    const upper = interaction.options.getInteger('max');
    const iterations = interaction.options.getInteger('iterations') || 1;
    if (lower > upper) {
      await interaction.reply({ content: 'You need to switch your limits!', ephemeral: true });
    }
    else {
      let random = new rdo.RandomOrgClient(process.env.RANDOM_KEY);
      await random.generateIntegers(iterations, lower, upper).then(val => interaction.reply(`I voted for **${val}!**`));
    }
  },
};