const os = require("os")

module.exports = {
	name: "help",
	description: "Run this for help",
	run: async(client, interaction, container) => {
		const llamarama = new container.Discord.MessageEmbed()
		.setColor('RANDOM')
		.setTimestamp()
		.setTitle('❓ | Help!')
		.setDescription(`Help coming soon!`)
		.addField("**Join our support server!**", "https://discord.gg/vbs5RZD", false)
    .setFooter(`Running with love on  ${os.type()}`);
		interaction.reply({ embeds: [llamarama] })
	}
}
