console.clear();

const discord = require("discord.js");
const client = new discord.Client();
const config = require("./data/config.json");
const fs = require("fs");

client.commands = new discord.Collection();
const commandFiles= fs.readdirSync("./src/commands").filter(file => file.endsWith(".js"));
for(const file of commandFiles) {
    const command = require(`./commands/${file}`);
    client.commands.set(command.name, command);
};

client.on("ready", () => {
    console.log(`${client.user.username} is online.`)
});

client.on("message", message => {
    if(!message.content.startsWith(config.prefix) || message.author.bot) return;

    const args = message.content.slice(config.prefix.length).split(/ +/);
    const command = args.shift().toLocaleLowerCase();

    if(command === "ping") {
        client.commands.get("ping").execute(message, args, client, discord);
    } else if(command === "uptime") {
        client.commands.get("uptime").execute(message, args, client, discord);
    } else if(command === "help") {
        client.commands.get("help").execute(message, args, discord);
    }
});

client.login(config.token);