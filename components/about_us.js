// Discord JS Class Import
const { MessageEmbed, MessageActionRow, MessageButton } = require("discord.js");

// Config Import
const { authorInfo, embedColor, emoji } = require("../config");

const About = async (interaction) => {
 
  // Action Row for Buttons/Social Links
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

  // Embed Creation
  const embed = new MessageEmbed()
    .setColor(embedColor)
    .setAuthor(authorInfo)
    .setTitle("About Us")
    .setURL(authorInfo.url)
    .setFooter({
      text: "Connect with us below so that you don't miss out 🤩",
      iconURL:
        "https://github.com/himakhaitan/evidentAuditDiscordBot/blob/main/brand/logo.png?raw=true",
    });
  
  await interaction.reply({
    components: [row],
    embeds: [embed],
  });
};

module.exports = { About };
