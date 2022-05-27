const Create_invite = async (interaction) => {
    
    const guild = interaction.guild;
    const invite = await guild.channels.cache.first().createInvite();
    interaction.reply({
        content: `Invite Created`,
        ephemeral: true,
    });
    interaction.channel.send(invite.url);
};

module.exports = { Create_invite };
