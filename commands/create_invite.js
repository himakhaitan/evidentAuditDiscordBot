const { SlashCommandBuilder } = require("@discordjs/builders");
const { create_invite } = require("../utils/commands");

const data = new SlashCommandBuilder()
  .setName(create_invite)
  .setDescription("Create Server Invite");
module.exports = data;
