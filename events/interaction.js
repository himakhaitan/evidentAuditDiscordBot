const { help } = require("../utils/commands");

module.exports = {
  name: "interactionCreate",
  on: true,
  async execute(interaction) {
    console.log(interaction);
    if (!interaction.isCommand()) return;

    const { commandName } = interaction;
    console.log(interaction);
    if (commandName === help) {
      await interaction.reply("Pong!");
    }
  },
};
