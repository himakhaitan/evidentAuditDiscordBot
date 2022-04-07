const { SlashCommandBuilder } = require("@discordjs/builders");
const { help } = require("../utils/commands");

// Administrator
// Dev
// Mods
// Utilities
// Server
// Info

const data = new SlashCommandBuilder()
  .setName(help)
  .setDescription("Displays All Bot Commands and Description");

module.exports = data;
