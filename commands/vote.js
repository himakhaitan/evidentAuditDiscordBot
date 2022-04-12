const { SlashCommandBuilder } = require("@discordjs/builders");
const { vote } = require("../utils/commands");

const data = new SlashCommandBuilder()
  .setName(vote)
  .setDescription("Vote for the Community");
module.exports = data;
