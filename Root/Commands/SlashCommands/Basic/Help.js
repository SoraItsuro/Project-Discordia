const os = require("os")

module.exports = {
	name: "help",
	description: "Run this for help",
	run: async(client, interaction, container) => {
		const llamarama = new container.Discord.MessageEmbed()
		.setColor(16220659)
		/*.setAuthor(iconURL)*/
		.setTimestamp()
		.setTitle('❓ | Help!')
		.setDescription(`My Message Command prefix is the **-** key! I have several handy Slash Commands, too!`)
		.addField("**• Join our support server!**", "You can join by clicking [here!](https://discord.gg/vbs5RZD)", false)
		.addField("test", "test", false)
    	.setFooter(`Running with love on  ${os.type()}`);
		interaction.reply({ embeds: [llamarama] })
	}
}
