module.exports = {
    data:{
        name: 'verify'
    },
    async execute (interaction, client) {
        await interaction.reply({
            content: 'Verifying :)'
        })
    }
}