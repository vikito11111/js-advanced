const { Client, GatewayIntentBits } = require('discord.js');

const TOKEN = ''; // Replace with the new token after resetting
const TARGET_CHANNEL_ID = ''; // Replace with the new token after resetting

const client = new Client({
    intents: [
        GatewayIntentBits.Guilds,
        GatewayIntentBits.GuildVoiceStates,
    ],
});

client.on('voiceStateUpdate', (oldState, newState) => {
    if (newState.channelId === TARGET_CHANNEL_ID) {
        console.log(`${newState.member.user.tag} joined the target channel.`);
        try {
            newState.member.voice.setMute(true);
            newState.member.voice.setDeaf(true);
            console.log('User muted and deafened successfully.');
        } catch (error) {
            console.error('Error muting and deafening user:', error);
        }
    }
});

client.once('ready', () => {
    console.log(`Logged in as ${client.user.tag}!`);
});

client.login(TOKEN);