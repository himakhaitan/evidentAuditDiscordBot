const { MessageEmbed, MessageActionRow, MessageButton } = require("discord.js");

const { authorInfo, embedColor, emoji } = require("../config");
const Owner = async (interaction) => {
  const row = new MessageActionRow().addComponents(
    new MessageButton()
      .setStyle("LINK")
      .setLabel("Twitter")
      .setURL("https://twitter.com/hima_khaitan")
      .setEmoji(emoji.twitter),
    new MessageButton()
      .setStyle("LINK")
      .setLabel("LinkedIn")
      .setURL("https://linkedin.com/in/himakhaitan")
      .setEmoji(emoji.linkedin),
    new MessageButton()
      .setStyle("LINK")
      .setLabel("GitHub")
      .setURL("https://github.com/himakhaitan")
      .setEmoji(emoji.github)
  );

  const embed = new MessageEmbed()
    .setColor(embedColor)
    .setAuthor({
      ...authorInfo,
      name: "Owner Evident Audit",
    })
    .setTitle("Himanshu Khaitan")
    .setURL(authorInfo.url)
    .setFooter({
      text: "Connect with me below 🤩",
      iconURL:
        "https://github.com/himakhaitan/evidentAuditDiscordBot/blob/main/brand/logo.png?raw=true",
    });

  await interaction.reply({
    components: [row],
    embeds: [embed],
  });
};

module.exports = {
  Owner,
};
