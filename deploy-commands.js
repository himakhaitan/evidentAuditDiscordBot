const { REST } = require("@discordjs/rest");
const { Routes } = require("discord-api-types/v9");

const fs = require("fs");

// IMPORTING COMMANDS
const commands = [];
const commandFiles = fs
  .readdirSync("./commands")
  .filter((file) => file.endsWith(".js"));

// CLIENT ID AND TOKEN
const clientId = process.env.CLIENT_ID;
const guildId = process.env.GUILD_ID;
const token = process.env.TOKEN;

for (const file of commandFiles) {
  const command = require(`./commands/${file}`);
  commands.push(command.toJSON());
}

// CREATING REST
const rest = new REST({ version: "9" }).setToken(token);

(async () => {
  try {
    console.log("Started refreshing application (/) commands.");

    // Global Commands Push

    // await rest.put(Routes.applicationCommands(clientId), { body: commands });

    // Guild Specific Code

    await rest.put(Routes.applicationGuildCommands(clientId, guildId), {
      body: commands,
    });

    console.log("Successfully reloaded application (/) commands.");
  } catch (error) {
    console.error(error);
  }
})();
