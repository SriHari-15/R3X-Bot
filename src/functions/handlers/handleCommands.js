const { REST } = require("@discordjs/rest");
const { Routes } = require(`discord-api-types/v9`);
const fs = require("fs");

module.exports = (client) => {
  client.handleCommands = async () => {
    const commandFolders = fs.readdirSync("./src/commands");
    for (const folder of commandFolders) {
      const commandFile = fs
        .readdirSync(`./src/commands/${folder}`)
        .filter((file) => file.endsWith(".js"));

      const { commands, commandArray } = client;
      for (const file of commandFile) {
        const command = require(`../../commands/${folder}/${file}`);
        commands.set(command.data.name, command);
        commandArray.push(command.data.toJSON());
        console.log(`Command: ${command.data.name} has been registered`);
      }
    }

    const clientId = "1016005505421938820";
    const guildId = "1013803222693068901";
    const rest = new REST({ version: "9" }).setToken(process.env.TOKEN);

    try {
      console.log("Started refreshing application (/) commands");

      await rest.put(Routes.applicationGuildCommands(clientId, guildId), {
        body: client.commandArray,
      });
    } catch (error) {
      console.error(error);
    }
  };
};
