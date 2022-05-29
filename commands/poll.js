const { SlashCommandBuilder } = require("@discordjs/builders");
const { poll } = require("../utils/commands");

const data = new SlashCommandBuilder()
  .setName(poll)
  .setDescription("Create a poll")
  .addStringOption((option) =>
    option
      .setName("question")
      .setDescription("The question of the poll")
      .setRequired(true)
  )
  .addStringOption((option) =>
    option
      .setName("option-one")
      .setDescription("The first option")
      .setRequired(true)
  )
  .addStringOption((option) =>
    option
      .setName("emoji-one")
      .setDescription("The emoji of the first option")
      .setRequired(true)
  )
  .addStringOption((option) =>
    option
      .setName("option-two")
      .setDescription("The second option")
      .setRequired(true)
  )
  .addStringOption((option) =>
    option
      .setName("emoji-two")
      .setDescription("The emoji of the second option")
      .setRequired(true)
  );
module.exports = data;
