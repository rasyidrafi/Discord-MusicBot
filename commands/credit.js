const { MessageEmbed } = require("discord.js");

module.exports = {
  info: {
    name: "credit",
    description: "Display creators of the bot",
    usage: "[credit]",
    aliases: ["cr"],
  },

  run: async function (client, message, args) {
    return message.channel.send({
      embed: {
        color: "BLUE",
        description: `🖊️ Original Creator by [SudhanPlayz](https://github.com/SudhanPlayz/Discord-MusicBot)
        🔍 Enhanced by [R45Y1D](https://github.com/rasyidrafi/R45-Discord-Bot)

        🤗 Thankyou for using this Bot`,
      },
    });
  },
};
