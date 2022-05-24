// Configuiring Dotenv for environment variables
require("dotenv").config();

// Loading Slash Commands
require("./deploy-commands");

// Importing Modules
const fs = require("fs");

// Importing Discord Token
const token = process.env.TOKEN;

// Importing Classes from DiscordJS
const { Client, Intents } = require("discord.js");

// Initialising an Instance of Client
const client = new Client({
  intents: [
    Intents.FLAGS.GUILDS,
    Intents.FLAGS.GUILD_MESSAGES,
    Intents.FLAGS.GUILD_MESSAGE_REACTIONS,
  ],
});

// Importing Events
const eventFiles = fs
  .readdirSync("./events")
  .filter((file) => file.endsWith(".js"));

for (const file of eventFiles) {
  const event = require(`./events/${file}`);
  if (event.once) {
    client.once(event.name, (...args) => event.execute(...args));
  } else {
    client.on(event.name, (...args) => event.execute(...args));
  }
}

// Client Login
client.login(token);

// DB Connection
const { monogoConnection } = require("./dbConnection");
monogoConnection(process.env.DB_URL);
