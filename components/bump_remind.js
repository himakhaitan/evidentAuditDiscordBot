const { MessageEmbed } = require("discord.js");

// Config Import
const { authorInfo, embedColor } = require("../config");

const BumpRemind = async (interaction) => {
  const embed = new MessageEmbed()
    .setColor(embedColor)
    .setAuthor({
      ...authorInfo,
      name: "Bump Reminder",
    })
    .setDescription(`Please run ${"```/bump```"}\n\nThanks for the reminder <@${interaction.user.id}>!`)
    .setFooter({
      text: `Reminded by ${interaction.user.username}#${interaction.user.discriminator}`,
      iconURL: interaction.user.displayAvatarURL(),
    })
    .setTimestamp();

  await interaction.reply({
    content: `‼️[BUMP REMINDER]‼️ <@&${process.env.MODS}>`,
    embeds: [embed],
  });
};

module.exports = {
  BumpRemind,
};
