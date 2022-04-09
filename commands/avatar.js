const { SlashCommandBuilder } = require("@discordjs/builders");
const { avatar } = require("../utils/commands");

const data = new SlashCommandBuilder()
  .setName(avatar)
  .setDescription("Know about the Community")
  .addUserOption((mention) =>
    mention
      .setName("tag")
      .setRequired(false)
      .setDescription("Get the avatar of the user")
  );
module.exports = data;
