const { MessageEmbed } = require("discord.js");

const { embedColor } = require("../config");

const Clear = async (interaction) => {
  // Extracting amount
  let amount = interaction.options.getInteger("amount") || 50;

  //   Setting limits
  amount = amount > 100 ? 100 : amount;

  const user = interaction.member.user;

  //   Deleting Messages
  const data = await interaction.channel.bulkDelete(amount, true);

  const embed = new MessageEmbed()
    .setColor(embedColor)
    .setTimestamp()
    .setDescription(
      `‼️ Cleared ${data.size} ${data.size > 1 ? "messages" : "message"}`
    )
    .setFooter({
      text: `Requested by ${user.tag}`,
      iconURL: user.displayAvatarURL(),
    });

  // Reply
  await interaction.reply({
    embeds: [embed],
  });
};

module.exports = {
  Clear,
};
