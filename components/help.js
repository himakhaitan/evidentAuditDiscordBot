const {
  MessageActionRow,
  MessageEmbed,
  MessageSelectMenu,
} = require("discord.js");

const { authorInfo, embedColor } = require("../config");

// Message Select Menu Data
const helpOptions = [
  {
    label: "Mods",
    description: "Commands for Mods Category",
    value: "Mods",
  },
  {
    label: "Utilities",
    description: "Commands for Utilities Category",
    value: "Utilities",
  },
  {
    label: "Server",
    description: "Commands for Server Category",
    value: "Server",
  },
  {
    label: "Info",
    description: "Commands for Info Category",
    value: "Info",
  }
];

// Initial function to execute after `/help` command
const Helper = async (interaction) => {
  const row = new MessageActionRow().addComponents(
    new MessageSelectMenu()
      .setCustomId("helpCategory")
      .setPlaceholder("Please select a Category")
      .addOptions(helpOptions)
  );
  const embed = new MessageEmbed()
    .setColor(embedColor)
    .setDescription("Please choose a category from dropdown")
    .setAuthor(
      {
        ...authorInfo,
        name: "Help for Evident Audit",
      }
      //  [Method is Deprecated!]  "Help for Evident Audit","https://github.com/himakhaitan/evidentAuditDiscordBot/blob/main/brand/logo.png?raw=true"
    );

  await interaction.reply({
    components: [row],
    embeds: [embed],
  });
};

// To Display Correct Output After Selection From Message Select Menu
const helpCategory = async (interaction) => {
  const selection = interaction.values[0];

  // Embed Creation

  const messageEmbed = new MessageEmbed()
    .setColor(embedColor)
    .setAuthor({
      ...authorInfo,
      name: "Help for Evident Audit",
    })
    .setDescription(`**${selection}** Commands`)
    .setFooter({
      text: interaction.user.tag,
      iconURL: interaction.user.displayAvatarURL(),
    });

  // Switch Case for possible enteries
  switch (selection) {
    case "Mods":
      messageEmbed.setFields({
        name: "`clear`",
        value: "Clear the chat",
      });
      await interaction.update({
        embeds: [messageEmbed],
      });
      break;
    case "Utilities":
      messageEmbed.setFields(
        {
          name: "`ask_help`",
          value: "Seek help from peers",
        },
        {
          name: "`avatar`",
          value: "Get avatar of a user",
        },
        {
          name: "`create_embed`",
          value: "Create an embed",
        },
        {
          name: "`help`",
          value: "Access help menu",
        }
      );
      await interaction.update({
        embeds: [messageEmbed],
      });
      break;
    case "Server":
      messageEmbed.setFields(
        {
          name: "`about_us`",
          value: "Displays the server information",
        },
        {
          name: "`rules`",
          value: "Displays the server rules",
        },
        {
          name: "`vote`",
          value: "Help server grow with your vote",
        }
      );
      await interaction.update({
        embeds: [messageEmbed],
      });
      break;
    case "Info":
      messageEmbed.setFields(
        {
          name: "`socials`",
          value: "Displays the server socials",
        },
        {
          name: "`community_count`",
          value: "Displays the server community count",
        }, {
          name: "`owner`",
          value: "Displays the server owner",
        }
      );
      await interaction.update({
        embeds: [messageEmbed],
      });
      break;
  }
};

module.exports = {
  Helper,
  helpCategory,
};
