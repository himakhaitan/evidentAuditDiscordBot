const {
  MessageActionRow,
  MessageEmbed,
  MessageSelectMenu,
} = require("discord.js");

const { authorInfo, embedColor } = require("../config");

// Message Select Menu Data
const helpOptions = [
  {
    label: "Administrator",
    description: "Commands for Administrator Category",
    value: "Administrator",
  },
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
  },
  {
    label: "Dev",
    description: "Commands for Dev Category",
    value: "Dev",
  },
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
      authorInfo
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
    .setAuthor(authorInfo)
    .setDescription(`${selection} Command List`);

  // Switch Case for possible enteries
  switch (selection) {
    case "Administrator":
      await interaction.update({
        embeds: [messageEmbed],
      });
      break;
    case "Mods":
      await interaction.update({
        embeds: [messageEmbed],
      });
      break;
    case "Utilities":
      await interaction.update({
        embeds: [messageEmbed],
      });
      break;
    case "Server":
      await interaction.update({
        embeds: [messageEmbed],
      });
      break;
    case "Info":
      await interaction.update({
        embeds: [messageEmbed],
      });
      break;
    case "Dev":
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
