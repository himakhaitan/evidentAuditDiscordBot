const { MessageEmbed } = require("discord.js");

const { embedColor, authorInfo } = require("../config");

const Poll = async (interaction) => {
  const question = interaction.options.getString("question");
  const optionOne = interaction.options.getString("option-one");
  const emojiOne = interaction.options.getString("emoji-one");
  const optionTwo = interaction.options.getString("option-two");
  const emojiTwo = interaction.options.getString("emoji-two");

  const embed = new MessageEmbed()
    .setColor(embedColor)
    .setAuthor({ ...authorInfo, name: "Poll Alert 🥳" })
    .setDescription(
      `**${question}**\n\n${emojiOne} **-** ${optionOne}\n${emojiTwo} **-** ${optionTwo}`
    )
    .setFooter({
      text: "Poll created by " + interaction.user.username,
      iconURL: interaction.user.avatarURL(),
    })
    .setTimestamp();
  await interaction.reply({ content: "Poll Created", ephemeral: true });

  await interaction.channel
    .send({
      embeds: [embed],
    })
    .then(async (embedMessage) => {
      embedMessage.react(emojiOne);
      embedMessage.react(emojiTwo);
    });
};

module.exports = { Poll };
