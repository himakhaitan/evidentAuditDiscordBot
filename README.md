<div id="top"></div>
<p align="center">
<img src="https://badgen.net/github/issues/himakhaitan/evidentAuditDiscordBot?style=flat-square&scale=1.4">
&nbsp;
<img alt="node-current" src="https://badgen.net/github/stars/himakhaitan/evidentAuditDiscordBot?style=flat-square&scale=1.4">&nbsp;
<img alt="APM" src="https://badgen.net/github/forks/himakhaitan/evidentAuditDiscordBot?style=flat-square&scale=1.4">&nbsp;
<img alt="node-current" src="https://badgen.net/github/closed-issues/himakhaitan/evidentAuditDiscordBot?style=flat-square&scale=1.4">&nbsp;
<img alt="node-current" src="https://badgen.net/github/license/himakhaitan/evidentAuditDiscordBot?style=flat-square&scale=1.4&color=green">
</p>
<h1 align="center">
  <a><img src="https://github.com/himakhaitan/evidentAuditDiscordBot/blob/main/brand/logo_transparent.png?raw=true" width="200"></a>
  <br>  
  Official Discord Bot for Evident Audit
  <br>
</h1>

<p align="center">
The bot is powered by <a href="https://discord.js.org/#/">Discord.js</a> and helps in the smooth functioning of the server. It is a bot that is designed to be used by the Evident Audit team and it's member ⚙️ ☕️
</p>
<p align="center">
Bot is equipped with a variety of commands that can be used to interact with the server along with a bounty system added to encourage active participation and helping environment 💫💯
</p>
</br>
<p align="center">
<img src="https://github.com/himakhaitan/himakhaitan/blob/main/icons/nodejs.png?raw=true" height="60">&nbsp; &nbsp; &nbsp;
<img src="https://github.com/himakhaitan/himakhaitan/blob/main/icons/meta-image-removebg-preview.png?raw=true" height="60">&nbsp; &nbsp; &nbsp;
<img src="https://github.com/himakhaitan/himakhaitan/blob/main/icons/mongo.png?raw=true" height="60">&nbsp; &nbsp; &nbsp;
<img src="https://github.com/himakhaitan/himakhaitan/blob/main/icons/js.png?raw=true" height="60">
</p>

<img src="https://github.com/himakhaitan/evidentAuditDiscordBot/blob/main/resources/Header.png?raw=true">

<details>
  <summary>Table of Contents</summary>
  <ol>
    <li>
      <a href="#about-the-project">About The Project</a>
      <ul>
        <li><a href="#built-with">Built With</a></li>
      </ul>
    </li>
    <li><a href="#getting-started">Getting Started</a>
      <ul>
        <li><a href="#prerequisites">Prerequisites</a></li>
        <li><a href="#installation">Installation</a></li>
      </ul>
    </li>
    <li><a href="#roadmap">Roadmap</a></li>
    <li><a href="#commands">Commands</a></li>
    <li><a href="#contact">Contact</a></li>
  </ol>
</details>

## About The Project

<p>The project is a Discord bot powered by the <a href="https://discord.js.org/#/">Discord.js</a> library. It contains several several slash commands which can be used to interact with the server, giving joiners a place to get involved and a personalised environment</p>

<img src="https://github.com/himakhaitan/evidentAuditDiscordBot/blob/main/resources/Project.png?raw=true">

The bot tries to make server as user-friendly as possible and make tasks like **asking for help** and **rewarding the helper** easier.

Join the server <a href="https://discord.gg/wQTr244dX6">here</a> to experience the bot.

Ofcourse, the bot doesn't server for servers of all niche so I will try to add more features in the near future. You may also suggest changes or new features by creating a new issue <a href="https://github.com/himakhaitan/evidentAuditDiscordBot/issues">here</a>.

## Built With

Below is the list of all the major frameworks and libraries used in the project.

- [Discord.js](https://discord.js.org/#/)
- [Node.js](https://nodejs.org/en/)
- [Mongoose](https://mongoosejs.com/)

## Getting Started

To get a local copy of the bot up and running follow these simple steps

- Clone the repository

```bash
git clone https://github.com/himakhaitan/evidentAuditDiscordBot.git
```

- Install the dependencies

```bash
npm install
```

- Follow the <a href="https://github.com/himakhaitan/evidentAuditDiscordBot#installation">Installation</a> Steps

- Ready to run the bot

```bash
npm start
```

- Invite the bot to your server using the bot's invite link

You can get the bot's invite link through <a href="https://discord.com/developers/docs">Discord Developer Portal</a>


## Prerequisites

The prerequisites for the bot to run are the following:

- Node.js (v16.14.0 or higher)
- MongoDB (Locally or Cloud)
- and you are good to go!

## Installation

Following are the steps to configure the bot and make it up and running.

- Configure the Environment Variables
  - Create a file called `.env` in the root directory of the project
  - Add the following lines to the file
  ```bash
  TOKEN=DISCORD_BOT_TOKEN
  CLIENT_ID=DISCORD_CLIENT_ID
  GUILD_ID=YOUR_SERVER_ID
  DB_URL=MONGO_DB_URL
  SUGGESTION=SUGGESTION_CHANNEL_ID
  MODS=MODS_ROLE_ID
  ```
  - Replace the `TOKEN`, `CLIENT_ID`, `GUILD_ID`, and `DB_URL` with the actual values
  - Replace the `MODS` with the actual Discord IDs of the moderators
  - Replace the `SUGGESTION` with the actual Discord ID of the suggestion channel
  - Note: You can also use the `sample.env` file to get a template of the file

- Edit `config.js` in the root directory.

```js
const authorInfo = {
  url: "https://twitter.com/evidentaudit",
  iconURL:
    "https://github.com/himakhaitan/evidentAuditDiscordBot/blob/main/brand/logo.png?raw=true",
};

const embedColor = "#56BBF1";

const guildId = "902805157144821793";

const emoji = {
  twitter: "961985224730886174",
  linkedin: "902878634870714409",
  github: "902878634082185276",
  scam: "927206837202354206",
  pepeyes: "927212874584178708",
  evidentaudit: "933670080271777883",
};

module.exports = {
  authorInfo,
  embedColor,
  emoji,
  guildId,
};
```

Replace the dummy data with the actual values. You need to have a developers account to get all these values.

## Roadmap

- [ ] Add role specific commands
- [ ] Add a command to add a user to a role
- [ ] Add a command to remove a user from a role
- [ ] Add a command to check bounties
- [ ] Make `/create_embed` more flexible
  - [ ] Enable the command to take channel as an argument 

See the [open issues](https://github.com/himakhaitan/evidentAuditDiscordBot/issues) for a full list of proposed features (and known issues). Feel free to create one.

<p align="right">(<a href="#top">back to top</a>)</p>

## Commands

Below is a list of slash commands that can be used to interact with the server via bot

| Command         | Use                                               |
| --------------- | ------------------------------------------------- |
| about_us        | Know about the Community                          |
| ask_help        | Ask help from peers in the server                 |
| avatar          | Get the avatar of a user                          |
| bump_remind     | Reminds server staff to bump the server           |
| clear           | Purge Messages within the channel                 |
| community_count | Know your peers through stats                     |
| create_embed    | Create an embed                                   |
| create_invite   | Create Server Invite                              |
| help            | Displays All Bot Commands and Description         |
| owner           | Displays Owner's Information                      |
| poll            | Create a poll                                     |
| reward          | Reward a peer                                     |
| rules           | Get the Code of Conduct                           |
| socials         | Connect with use below so that you don't miss out |
| suggest         | Post Server Suggestions                           |
| vote            | Vote for the Community                            |

### about_us

The command is used to know about the community. A detailed embed is posted to the channel where the command is used.

```
/about_us
```

### ask_help

The command used to ask for help from peers in the server. The bot will ping the role taken by [ask_role] and will post the embed in the channel.

```
/ask_help [topic] [description] [ask_from]
```

<img src="https://github.com/himakhaitan/evidentAuditDiscordBot/blob/main/resources/commands/ask_help.gif?raw=true">

### avatar

The command is used to get the avatar of a user. [tag] is the mention of the user and is optional. If [tag] is not provided, the avatar of the user who used the command will be posted.

```
/avatar [tag]
```

<img src="https://github.com/himakhaitan/evidentAuditDiscordBot/blob/main/resources/commands/avatar.gif?raw=true">

### bump_remind

### clear

### community_count

### create_embed

### create_invite

### help

### owner

### poll

### reward

### rules

### socials

### suggest

### vote

The command is used to vote for the community. The bot will post the embed in the channel with a url.

```
/vote
```

<img src="https://github.com/himakhaitan/evidentAuditDiscordBot/blob/main/resources/commands/avatar.gif?raw=true">

## Contact

<p>Feel free to reach me out on any of the above mediums (LinkedIn, Mail and Twitter for fast responses). See you in my inbox / DMs 📩 😃</p>

<p>
  <a href="mailto:himanshukhaitan108@gmail.com" target="_blank"><img height="40" src = "https://github.com/himakhaitan/himakhaitan/blob/main/icons/mail.png?raw=true"></a>
  <a href="https://www.linkedin.com/in/himakhaitan" target="_blank"><img height="40" src = "https://github.com/himakhaitan/himakhaitan/blob/main/icons/linkedin.png?raw=true"></a>&nbsp;&nbsp;<a href="https://himakhaitan.medium.com/" target="_blank"><img height="40" src = "https://github.com/himakhaitan/himakhaitan/blob/main/icons/medium.png?raw=true"></a>&nbsp;&nbsp;
  <a href="https://twitter.com/hima_khaitan" target="_blank"><img height="40" src = "https://github.com/himakhaitan/himakhaitan/blob/main/icons/twitter.png?raw=true"></a>&nbsp;&nbsp;
  <a href="https://www.instagram.com/himakhaitan/" target="_blank"><img height="40" src = "https://github.com/himakhaitan/himakhaitan/blob/main/icons/insta.png?raw=true"></a>&nbsp;&nbsp;<a href="https://dev.to/hima_khaitan" target="_blank"><img height="40" src = "https://github.com/himakhaitan/himakhaitan/blob/main/icons/dev.png?raw=true"></a>
</p>

> Hapilly turning Coffee into Code ☕️ 💻