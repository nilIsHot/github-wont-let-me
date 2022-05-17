module.exports = {
    name: "ping",
    description: "Shows bots ping",
    execute(message, args, client, discord) {
        message.channel.send("Pinging Server").then(resultMessage => {
            const ping = resultMessage.createdTimestamp - message.createdTimestamp

            const embed = new discord.MessageEmbed()
            .setColor("#304281")
            .setAuthor("Sentiment | Ping", "https://cdn.discordapp.com/attachments/976226932213559308/976229090497556530/unknown.png")
            .setDescription(`Bot Latency: \`${ping}ms\` \n API Latency: \`${client.ws.ping}ms\``)
            resultMessage.edit("", embed)
        })
    }
}