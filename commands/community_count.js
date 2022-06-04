const { SlashCommandBuilder } = require("@discordjs/builders");
const { community_count } = require("../utils/commands");

const data = new SlashCommandBuilder()
  .setName(community_count)
  .setDescription("Know your peers through stats");
module.exports = data;
