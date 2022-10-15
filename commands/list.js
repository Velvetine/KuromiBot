const { SlashCommandBuilder, ActionRowBuilder, ButtonStyle } = require('discord.js');
const { EmbedBuilder, ButtonBuilder } = require('discord.js');

module.exports = {
  data: new SlashCommandBuilder()
    .setName('list')
    .setDescription('Lists out all the commands I have to offer!'),
  async execute(interaction) {
    const row1 = new ActionRowBuilder()
      .addComponents(
        new ButtonBuilder()
          .setCustomId('pgnx')
          .setLabel('>')
          .setStyle(ButtonStyle.Primary));
    const row2 = new ActionRowBuilder()
      .addComponents(
        new ButtonBuilder()
          .setCustomId('pgbk')
          .setLabel('<')
          .setStyle(ButtonStyle.Primary));
    const page1 = new EmbedBuilder()
      .setTitle('COMMANDS LIST')
      .setDescription('Here are the commands you can use!')
      .setColor(0xf6a7c0)
      .setFooter({ text: 'Page 1/2' })
      .addFields(
        { name: 'Head\'s up!', value: 'For * commands, you can submit images/videos for this command in <#425323394704080899>!' },
        { name: '1', value: 'annesmash\nanno*\nbananice\nbang*\nbetray\nbirthday*\nbodegacat', inline: true },
        { name: '2', value: 'bonk*\ncatspopcorn\ncry\ncureboom\ndarntootin\ndezaki*\nexciting', inline: true },
        { name: '3', value: 'exclusive\nfly\nfrench\nfriendship\nfumo*\nfuu\ngaming', inline: true },
        { name: '4', value: 'geass\ngoosehouse\ngreatcat*\ngundoh\nhug*\nidoltime\journalism', inline: true },
        { name: '5', value: 'keyframes\nlaborcrime\nleaf\nletshearit\nlist\nlove\nlum*', inline: true }
      );
    const page2 = new EmbedBuilder()
      .setTitle('COMMANDS LIST')
      .setDescription('Here are the commands you can use!')
      .setColor(0xf6a7c0)
      .setFooter({ text: 'Page 2/2' })
      .addFields(
        { name: 'Head\'s up!', value: 'For * commands, you can submit images/videos for this command in <#425323394704080899>!' },
        { name: '1', value: 'lun*\nmacross7\nmoney\nmonopolymermaid\nmorning*\nmugistrong\nmunch*', inline: true },
        { name: '2', value: 'nana\nnobodymove\noyoyo\npat*\nping\nproblematic*\nran*', inline: true },
        { name: '3', value: 'repeat\nroll\nserver\nsheri\nsick*\nsing\nsleep*', inline: true },
        { name: '4', value: 'somebody\nsource\nstudy*\nthankyou\nthedog\ntogchamp\nunderstand*', inline: true },
        { name: '5', value: 'user\nweh\nwide\nwigan\nwork*\nworldpremiere', inline: true },
      );
    
    await interaction.reply({ embeds: [page1], components: [row1] });
    const filter = i => i.customId;
    const collector = interaction.channel.createMessageComponentCollector({ filter, time: 90000 });
    collector.on('collect', async i => {
      if (i.customId === 'pgnx') {
        await i.update({ components: [row2], embeds: [page2] });
      }
      else if (i.customId === 'pgbk') {
        await i.update({ components: [row1], embeds: [page1] });
      }
    });
  },
};