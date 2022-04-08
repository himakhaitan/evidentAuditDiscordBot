const { help, about_us } = require("../utils/commands");

// Components import
const { Helper } = require("../components/help");
const { About } = require("../components/about_us");


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
      default:
        break;
    }
  },
};
