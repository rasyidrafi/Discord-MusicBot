const { MessageEmbed } = require("discord.js");
const sendError = require("../util/error");

module.exports = {
  info: {
    name: "disconnect",
    description: "Leave the channel",
    usage: "[disconnect]",
    aliases: ["dc", "leave", "exit", "left"],
  },

  run: async function (client, message, args) {
    const serverQueue = message.client.queue.get(message.guild.id);
        if (serverQueue) {
          message.guild.me.voice.channel.leave();
          return message.channel.send({
            embed: {
                color: "GREEN",
                description: `🚀 **|** Leaving the Channel`
            }
          });
        };
    return sendError("Im not joining any channel yet.", message.channel);
  },
};