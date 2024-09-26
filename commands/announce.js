module.exports = {
    name: 'announce',
    description: 'Make an announcement to the server',
    execute(message, args) {
        const announcement = args.join(' ');
        if (!announcement) return message.reply('Please provide a message to announce.');

        const announcementChannel = message.guild.channels.cache.find(channel => channel.name === 'announcements');
        if (announcementChannel) {
            announcementChannel.send(announcement);
        } else {
            message.reply('Announcement channel not found.');
        }
    }
};
