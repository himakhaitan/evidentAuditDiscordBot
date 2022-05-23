const { MessageEmbed, MessageActionRow, MessageButton } = require("discord.js");
const { embedColor, authorInfo, emoji } = require("../config");

const Socials = async (interaction) => {
  const row = new MessageActionRow().addComponents(
    new MessageButton()
      .setLabel("Twitter")
      .setStyle("LINK")
      .setURL("https://www.twitter.com/evidentaudit")
      .setEmoji(emoji.twitter),
    new MessageButton()
      .setLabel("Website")
      .setStyle("LINK")
      .setURL("https://www.twitter.com/evidentaudit")
      .setEmoji(emoji.evidentaudit),
    new MessageButton()
      .setLabel("Github")
      .setStyle("LINK")
      .setURL("https://www.twitter.com/evidentaudit")
      .setEmoji(emoji.github),
    new MessageButton()
      .setLabel("LinkedIn")
      .setStyle("LINK")
      .setURL("https://www.twitter.com/evidentaudit")
      .setEmoji(emoji.linkedin)
  );
  const user = interaction.member.user;

  const embed = new MessageEmbed()
    .setColor(embedColor)
    .setAuthor({
      ...authorInfo,
      name: "Socials for Evident Audit",
    })
    .setDescription(
      `**Our Social Presence**\n\n<:evidentaudit:${emoji.evidentaudit}>`
    )
    .setFooter({
      text: `Requested by ${user.tag}`,
      iconURL: user.displayAvatarURL(),
    })
    .setTimestamp();

  await interaction.reply({
    components: [row],
    embeds: [embed],
  });
};

module.exports = {
  Socials,
};
