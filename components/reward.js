const User = require("../models/User");
const { MessageEmbed } = require("discord.js");
const { embedColor, authorInfo } = require("../config");

const Reward = async (interaction) => {
  const tagged_user = interaction.options.getMember("user");

  try {
    const exisiting_user = await User.findOne({ discord_id: tagged_user.id });
    let new_user;
    if (!exisiting_user) {
      new_user = new User({
        discord_id: tagged_user.id,
        discriminator: tagged_user.user.discriminator,
        nickname: tagged_user.user.nickname,
        username: tagged_user.user.username,
      });
      new_user.point += 10;
      await new_user.save();
    } else {
      exisiting_user.point += 10;
      await exisiting_user.save();
    }

    const embed = new MessageEmbed()
      .setTitle("Reward")
      .setColor(embedColor)
      .setAuthor({
        name: `Rewarded by ${interaction.user.username}`,
        ...authorInfo,
      })
      .setDescription(`Yayyy! <@${tagged_user.id}> received a Thanks!`)
      .setFields(
        {
          name: "Total Points",
          value: `${exisiting_user.point || new_user.point}`,
        },
        {
          name: "Points Awarded",
          value: "10",
        }
      )
      .setTimestamp()
      .setFooter({
        text: `Thanks by ${interaction.user.username}`,
        iconURL: interaction.user.displayAvatarURL(),
      });
    interaction.reply({
      embeds: [embed],
    });
  } catch (err) {
    const error_embed = new MessageEmbed()
      .setColor(embedColor)
      .setTitle("Error")
      .setDescription("An Error Occured! Please try again later.")
      .setTimestamp();
    interaction.reply({
      embeds: [error_embed],
    });
    console.log(err);
  }
};

module.exports = { Reward };
