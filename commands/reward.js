const { SlashCommandBuilder } = require("@discordjs/builders");
const { reward } = require("../utils/commands");

const data = new SlashCommandBuilder()
  .setName(reward)
  .setDescription("Reward a peer");

module.exports = data;