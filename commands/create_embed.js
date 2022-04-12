const { SlashCommandBuilder } = require("@discordjs/builders");
const { create_embed } = require("../utils/commands");

// Embed Components
/*
    - Author Name
    - Description
    - Color (optional)
*/

const data = new SlashCommandBuilder()
  .setName(create_embed)
  .setDescription("Create an embed")
  .addStringOption((option) =>
    option
      .setName("author_name")
      .setDescription("Name of the author of the Embed")
      .setRequired(true)
  )
  .addStringOption((option) =>
    option
      .setName("description")
      .setDescription("Description of the Embed")
      .setRequired(true)
  )
  .addStringOption((option) =>
    option
      .setName("color")
      .setDescription("Color of your embed, default otherwise")
      .setRequired(false)
  );

module.exports = data;
