const { MessageEmbed } = require("discord.js");
const { embedColor, authorInfo } = require("../config");

const Vote = async (interaction) => {
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
    embeds: [embed],
  });
};

module.exports = {
  Vote,
};
