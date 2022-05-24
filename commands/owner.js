const { SlashCommandBuilder } = require("@discordjs/builders");
const { owner } = require("../utils/commands");

const data = new SlashCommandBuilder()
  .setName(owner)
  .setDescription("Displays Owner's Information");
module.exports = data;
