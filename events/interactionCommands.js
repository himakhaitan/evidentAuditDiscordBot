const {
  help,
  about_us,
  ask_help,
  avatar,
  rules,
  clear,
  create_embed,
} = require("../utils/commands");

// Components import
const { Helper } = require("../components/help");
const { About } = require("../components/about_us");
const { AskHelp } = require("../components/ask_help");
const { Avatar } = require("../components/avatar");
const { Rules } = require("../components/rules");
const { Clear } = require("../components/clear");
const { CreateEmbed } = require("../components/create_embed");

module.exports = {
  name: "interactionCreate",
  on: true,
  async execute(interaction) {
    if (!interaction.isCommand()) return;

    // Getting Command Name
    const { commandName } = interaction;

    switch (commandName) {
      case help:
        Helper(interaction);
        break;
      case about_us:
        About(interaction);
        break;
      case ask_help:
        AskHelp(interaction);
        break;
      case avatar:
        Avatar(interaction);
      case rules:
        Rules(interaction);
        break;
      case clear:
        Clear(interaction);
        break;
      case create_embed:
        CreateEmbed(interaction);
        break;
      default:
        break;
    }
  },
};
