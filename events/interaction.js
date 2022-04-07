const { help } = require("../utils/commands");

// Components import
const Helper = require("../components/help");

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

      default:
        break;
    }
  },
};
