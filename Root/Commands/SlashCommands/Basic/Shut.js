const { MessageAttachment } = require("discord.js");

module.exports = {
	name: "shut",
	description: "Shut someone up.",
	run: async(client, interaction) => {
		const attachment = new MessageAttachment("./Images/shut.jpg");
		
		interaction.reply({  files: [attachment]  });
	},
};
