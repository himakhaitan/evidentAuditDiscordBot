const { SlashCommandBuilder } = require("@discordjs/builders");
const { rules } = require("../utils/commands");

const data = new SlashCommandBuilder()
  .setName(rules)
  .setDescription("Code of Conduct");
module.exports = data;
