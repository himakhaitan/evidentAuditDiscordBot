const { SlashCommandBuilder } = require("@discordjs/builders");
const { reward } = require("../utils/commands");

const data = new SlashCommandBuilder()
  .setName(reward)
  .setDescription("Reward a peer")
  .addUserOption((mention) =>
    mention
      .setName("user")
      .setDescription("The user to reward")
      .setRequired(true)
  );
module.exports = data;
