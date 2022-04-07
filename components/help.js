const {
  MessageActionRow,
  MessageEmbed,
  MessageSelectMenu,
} = require("discord.js");

// Administrator
// Dev
// Mods
// Utilities
// Server
// Info

const helpOptions = [
  {
    label: "Administrator",
    description: "Commands for Administrator Category",
    value: "administrator",
  },
  {
    label: "Mods",
    description: "Commands for Mods Category",
    value: "mods",
  },
  {
    label: "Utilities",
    description: "Commands for Utilities Category",
    value: "utilities",
  },
  {
    label: "Server",
    description: "Commands for Server Category",
    value: "server",
  },
  {
    label: "Info",
    description: "Commands for Info Category",
    value: "info",
  },
  {
    label: "Dev",
    description: "Commands for Dev Category",
    value: "dev",
  },
];

const Helper = async (interaction) => {
  const row = new MessageActionRow().addComponents(
    new MessageSelectMenu()
      .setCustomId("category")
      .setPlaceholder("Please select a Category")
      .addOptions(helpOptions)
  );
  const embed = new MessageEmbed()
    .setColor("#56BBF1")
    .setTitle("Help for Evident Audit")
    .setDescription("Please choose a category from dropdown").setImage("https://github.com");

  await interaction.reply({
    components: [row],
    ephemeral: true,
    embeds: [embed],
    components: [row],
  });
};

module.exports = Helper;
