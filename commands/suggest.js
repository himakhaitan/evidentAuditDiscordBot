const { SlashCommandBuilder } = require("@discordjs/builders");
const { suggest } = require("../utils/commands");

const data = new SlashCommandBuilder()
  .setName(suggest)
  .setDescription("Post Server Suggestions")
  .addStringOption((option) =>
    option
      .setName("title")
      .setDescription("Title of the suggestion")
      .setRequired(true)
  )
  .addStringOption((option) =>
    option
      .setName("description")
      .setDescription("Description of the suggestion")
      .setRequired(true)
  )
  .addBooleanOption((option) =>
    option.setName("private").setDescription("Make the suggestion private")
  );
module.exports = data;
