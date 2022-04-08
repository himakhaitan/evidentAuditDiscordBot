const { SlashCommandBuilder } = require("@discordjs/builders");
const { ask_help } = require("../utils/commands");

const data = new SlashCommandBuilder()
  .setName(ask_help)
  .setDescription("Ask help from peers in the server")
  .addStringOption((option) =>
    option.setName("topic").setDescription("Title of Help").setRequired(true)
  )
  .addStringOption((option) =>
    option
      .setName("description")
      .setDescription("Describe your help")
      .setRequired(true)
  )
  .addRoleOption((role) =>
    role.setName("ask_from").setDescription("Select Role").setRequired(true)
  );
module.exports = data;
