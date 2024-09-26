module.exports = {
    name: 'ready',
    execute(client) {
        console.log(`Bot is ready! Logged in as ${client.user.tag}`);
    }
};
