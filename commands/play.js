const { SlashCommandBuilder } = require("discord.js");

module.exports = {
  data: new SlashCommandBuilder()
    .setName("play")
    .setDescription("Playlist de Estudos!"),

  async execute(interaction) {
    await interaction.reply("https://open.spotify.com/playlist/4x9OtLt7bsmvqktbF0Y0Gm?si=2642c1acfe8d4bf8");
  },
};
