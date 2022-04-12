const { SlashCommandBuilder } = require("@discordjs/builders");
const { clear } = require("../utils/commands");

const data = new SlashCommandBuilder()
  .setName(clear)
  .setDescription("Purge Messages within the channel")
  .addIntegerOption((option) =>
    option.setName("amount").setDescription("Amount of messages to delete")
  );
module.exports = data;
