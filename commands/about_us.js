const { SlashCommandBuilder } = require("@discordjs/builders");
const { about_us } = require("../utils/commands");

const data = new SlashCommandBuilder()
  .setName(about_us)
  .setDescription("Know about the Community");
module.exports = data;
