const { MessageEmbed, MessageActionRow, MessageButton } = require("discord.js");
const { embedColor, authorInfo, emoji } = require("../config");

const Vote = async (interaction) => {
  const row = new MessageActionRow().addComponents(
    new MessageButton()
      .setEmoji(emoji.pepeyes)
      .setStyle("LINK")
      .setURL("https://www.github.com/himakhaitan")
      .setLabel("Vote")
  );

  const embed = new MessageEmbed()
    .setAuthor({
      ...authorInfo,
      name: "Vote for Evident Audit",
    })
    .setColor(embedColor)
    .setDescription(
      "**Vote**\nSupport the community by voting the server at [Top.gg](https://www.top.gg/)"
    )
    .setTimestamp();

  await interaction.reply({
    components: [row],
    embeds: [embed],
  });
};

module.exports = {
  Vote,
};
