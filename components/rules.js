const { MessageEmbed, MessageActionRow, MessageButton } = require("discord.js");

const { embedColor, authorInfo, emoji } = require("../config");

const Rules = async (interaction) => {
  const row = new MessageActionRow().addComponents(
    new MessageButton()
      .setStyle("LINK")
      .setLabel("Report an issue")
      .setURL("https://github.com/hima_khaitan")
      .setEmoji(emoji.scam)
  );

  const embed = new MessageEmbed().setColor(embedColor).setAuthor({
    ...authorInfo,
    name: "Code of Conduct for Evident Audit",
  });

  await interaction.reply({
    components: [row],
    embeds: [embed],
  });
};

module.exports = {
  Rules,
};
