const { MessageEmbed } = require("discord.js");

const { embedColor, authorInfo } = require("../config");

const Avatar = async (interaction) => {
  const obj = interaction.options.getMember("tag") || interaction;
  const user = obj.user;

  const embed = new MessageEmbed()
    .setColor(embedColor)
    .setTimestamp()
    .setDescription(`Avatar of ${user.tag}`)
    .setAuthor({
      ...authorInfo,
      name: "Member of Evident Audit",
    })
    .setImage(user.displayAvatarURL({ size: 1024, dynamic: true }))
    .setFooter({
      text: `Requested by ${interaction.user.username}`,
      iconURL: interaction.user.displayAvatarURL(),
    });

  await interaction.reply({
    embeds: [embed],
  });
};

module.exports = {
  Avatar,
};
