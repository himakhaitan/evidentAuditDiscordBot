const { MessageEmbed } = require("discord.js");

const { embedColor, authorInfo, emoji } = require("../config");

const Suggest = async (interaction) => {
  const title = interaction.options.getString("title");
  const description = interaction.options.getString("description");
  const private = interaction.options.getBoolean("private") || false;

  const user = interaction.user;
  const embed = new MessageEmbed()
    .setColor(embedColor)
    .setAuthor({
      ...authorInfo,
      name: title,
    })
    .setDescription(description)
    .setFooter({
      text: `Suggestion by ${private ? "Anonymous" : user.tag}`,
      iconURL: private
        ? "https://github.com/himakhaitan/evidentAuditDiscordBot/blob/main/brand/logo.png?raw=true"
        : user.displayAvatarURL(),
    })
    .setTimestamp();

  const Suggestion_Channel = interaction.client.channels.cache.get(
    `${process.env.SUGGESTION}`
  );

  Suggestion_Channel.send({
    embeds: [embed],
  });

  interaction.reply({
    content: `Suggestion Posted on <#${process.env.SUGGESTION}>`,
    ephemeral: true,
  })
};

module.exports = {
  Suggest,
};
