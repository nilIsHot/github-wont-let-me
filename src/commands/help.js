const config = require("../data/config.json")

module.exports = {
    name: "help",
    description: "Help command",
    execute(message, args, discord) {

        const embed = new discord.MessageEmbed()
        .setColor("#304281")
        .setAuthor("Sentiment | Help", "https://cdn.discordapp.com/attachments/976226932213559308/976229090497556530/unknown.png")
        .setDescription(`The bot prefix is ${config.prefix}`)
        .addFields(
            {name: `**${config.prefix}ping**`, value: "``Shows bots ping``"},
            {name: `**${config.prefix}uptime**`, value: "``Shows bot uptime``"}
        )

        message.channel.send(embed)
    }
}