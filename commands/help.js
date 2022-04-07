const { SlashCommandBuilder } = require("@discordjs/builders");
const { help } = require("../utils/commands");

const data = new SlashCommandBuilder()
  .setName(help)
  .setDescription("Displays All Bot Commands and Description");
module.exports = data;
