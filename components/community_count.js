const { MessageEmbed } = require("discord.js");
const { embedColor, authorInfo } = require("../config");

const Community_count = async (interaction) => {

    const user = interaction.user;
    const guild = interaction.guild;
    const members = guild.memberCount;

    const embed = new MessageEmbed()
    .setColor(embedColor)
    .setAuthor({
      ...authorInfo,
      name: "Community Count for Evident Audit",
    })
    .setDescription(`**${members}** members`)
    .setFooter({
      text: user.tag,
      iconURL: user.displayAvatarURL(),
    })
    .setTimestamp()

    await interaction.reply({
        embeds: [embed],
      });
}

module.exports = {
    Community_count,
}