// Class import
const { MessageEmbed } = require("discord.js");

// Config Import
const { embedColor } = require("../config");

// `/ask_help` handler
const AskHelp = async (interaction) => {
    
  // Extracting Options
  const topic = interaction.options.getString("topic");
  const description = interaction.options.getString("description");
  const role = interaction.options.getRole("ask_from");
  const user = interaction.member.user;

  //   Embed Creation
  const embed = new MessageEmbed()
    .setColor(embedColor)
    .setTimestamp()
    .setDescription(
      `**Topic:** ${topic}\n**Description:** \n${description}\n\n**Request by:** <@${user.id}>`
    )
    .setFooter({
      text: user.tag,
      iconURL: user.displayAvatarURL(),
    });

  // Reply
  await interaction.reply({
    embeds: [embed],
    emphereal: true,
    content: `${topic} [Help Request] :bangbang: <@&${role.id}>`,
  });
};

module.exports = {
  AskHelp,
};
