const { SlashCommandBuilder } = require("@discordjs/builders");
const { bump_remind } = require("../utils/commands");

const data = new SlashCommandBuilder()
  .setName(bump_remind)
  .setDescription("Reminds server staff to bump their server");
module.exports = data;
