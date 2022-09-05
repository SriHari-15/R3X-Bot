const { SlashCommandBuilder, EmbedBuilder } = require("discord.js");

module.exports = {
  data: new SlashCommandBuilder()
    .setName("ping")
    .setDescription("Returns your ping"),
  async execute(interaction, client) {
    const message = await interaction.deferReply({
      fetchReply: true,
      ephemeral: true,
    });

    const pingEmbed = new EmbedBuilder()
      .setAuthor({
        name: interaction.user.tag,
        iconURL: interaction.user.displayAvatarURL(),
      })
      .setTitle("Ping")
      .setFooter({
        text: client.user.tag,
        iconURL: client.user.displayAvatarURL(),
      })
      .setDescription(
        `API Latency: ${client.ws.ping}\nClient Latency: ${
          message.createdTimestamp - interaction.createdTimestamp
        }`
      )
      .setColor(0x000001)
      .setTimestamp();

    await interaction.editReply({
      embeds: [pingEmbed],
    });
  },
};
