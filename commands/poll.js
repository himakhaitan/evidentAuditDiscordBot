const { SlashCommandBuilder } = require("@discordjs/builders");
const { poll } = require("../utils/commands");

const data = new SlashCommandBuilder()
  .setName(poll)
  .setDescription("Create a poll");
module.exports = data;
