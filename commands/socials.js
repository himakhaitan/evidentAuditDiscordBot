const { SlashCommandBuilder } = require("@discordjs/builders");
const { socials } = require("../utils/commands");

const data = new SlashCommandBuilder()
  .setName(socials)
  .setDescription("Connect with use below so that you don't miss out");

module.exports = data;
