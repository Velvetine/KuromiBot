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
        { name: '2', value: 'bonk*\ncatspopcorn\nchaos\ncry\ncureboom\ndarntootin\ndezaki*', inline: true },
        { name: '3', value: 'exciting\nexclusive\nfly\nfrench\nfriendship\nfumo*\nfuu', inline: true },
        { name: '4', value: 'gaming\ngeass\ngoosehouse\ngreatcat*\ngundoh\nhug*\nidoltime', inline: true },
        { name: '5', value: 'journalism\nkeyframes\nlaborcrime\nleaf\nletshearit\nlist\nlove', inline: true }
      );
    const page2 = new EmbedBuilder()
      .setTitle('COMMANDS LIST')
      .setDescription('Here are the commands you can use!')
      .setColor(0xf6a7c0)
      .setFooter({ text: 'Page 2/2' })
      .addFields(
        { name: 'Head\'s up!', value: 'For * commands, you can submit images/videos for this command in <#425323394704080899>!' },
        { name: '1', value: 'lum*\nlun*\nmacross7\nmoney\nmonopolymermaid\nmorning*\nmugistrong', inline: true },
        { name: '2', value: 'munch*\nnana\nnobodymove\noyoyo\npat*\nping\nproblematic*', inline: true },
        { name: '3', value: 'ran*\nrepeat\nroll\nserver\nsheri\nsick*\nsing', inline: true },
        { name: '4', value: 'sleep*\nsomebody\nstudy*\nthankyou\nthedog\ntogchamp\nunderstand*', inline: true },
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