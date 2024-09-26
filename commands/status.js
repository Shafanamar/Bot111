const fetch = require('node-fetch');

module.exports = {
    name: 'serverstatus',
    description: 'Show the SAMP server status',
    async execute(message, args) {
        const serverIP = '172.232.112.158:7777'; // Example IP from your image
        const url = `http://example-api-to-fetch-server-status.com/status/${serverIP}`; // Replace with actual API

        try {
            const response = await fetch(url);
            const data = await response.json();

            message.channel.send(`Server Players Online: ${data.players}`);
        } catch (error) {
            console.error(error);
            message.reply('Failed to fetch server status.');
        }
    }
};
