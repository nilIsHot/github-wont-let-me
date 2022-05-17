const ms = require("ms");

module.exports = {
    name: "uptime",
    description: "Shows bot uptime",
    execute(message, args, client, discord) {

        const embed = new discord.MessageEmbed()
        .setColor("#304281")
        .setAuthor("Sentiment | Uptime", "https://cdn.discordapp.com/attachments/976226932213559308/976229090497556530/unknown.png")
        .setDescription(`\`${ms(client.uptime, { long: true })}\``)
        message.channel.send(embed)
    }
}