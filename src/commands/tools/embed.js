// Useless function : Just to test some shit ;)

const { SlashCommandBuilder, EmbedBuilder } = require("discord.js");

module.exports = {
  data: new SlashCommandBuilder()
    .setName("embed")
    .setDescription("Returns an embed"),
  async execute(interaction, client) {
    const embed = new EmbedBuilder()
      .setTitle("__Test Embed__")
      .setDescription("Description 101")
      .setColor(0x000001)
      .setThumbnail(client.user.displayAvatarURL())
      .setTimestamp()
      .setAuthor({
        name: interaction.user.tag,
        iconURL: interaction.user.displayAvatarURL(),
      });
    await interaction.reply({
      embeds: [embed],
    });
  },
};
