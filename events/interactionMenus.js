// Component Imports
const { helpCategory } = require("../components/help");

module.exports = {
  name: "interactionCreate",
  on: true,
  async execute(interaction) {
    if (!interaction.isSelectMenu()) return;

    // Getting Command Name
    const { customId } = interaction;

    switch (customId) {
      case "helpCategory":
        helpCategory(interaction);
        break;

      default:
        break;
    }
  },
};
