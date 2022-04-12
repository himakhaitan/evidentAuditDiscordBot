const { MessageEmbed } = require("discord.js");
const { embedColor, authorInfo } = require("../config");

const CreateEmbed = async (interaction) => {
  // Accepting Data
  const author_name = interaction.options.getString("author_name");
  const description = interaction.options.getString("description");
  const color = interaction.options.getString("color") || embedColor;

  // Getting User
  const user = interaction.member.user;

  // Creating Embed
  const embed = new MessageEmbed()
    .setColor(color)
    .setAuthor({
      ...authorInfo,
      name: author_name,
    })
    .setDescription(description)
    .setFooter({
      text: user.tag,
      iconURL: user.displayAvatarURL(),
    })
    .setTimestamp();

  // Reply
  await interaction.channel.send({ embeds: [embed] });
};

module.exports = {
  CreateEmbed,
};
