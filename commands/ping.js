const { MessageEmbed } = require("discord.js");

module.exports = {
  info: {
    name: "ping",
    description: "Pinging the bot",
    usage: "[ping]",
    aliases: ["speed"],
  },

  run: async function (client, message, args) {
    return message.channel.send({
      embed: {
        color: "YELLOW",
        description: `🏓 Latency is: **${
          Date.now() - message.createdTimestamp
        }ms.**`,
      },
    });
  },
};
