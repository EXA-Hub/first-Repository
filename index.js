const Discord = require('discord.js');
const client = new Discord.Client();
const config = require('./config.json');
const prefix = config.prefix;

client.on('ready', () => {
    console.log(`${client.user.username} is ready`);
});

client.on('message', message => {
    if (!message.content.startsWith(prefix)) return;
    if (!message.guild) return;
    if (message.author.bet) return;

    const args = message.content.slice(prefix.length).split(/ +/g);
    switch (args[0]) {
        case 'ping':
            message.channel.send(Math.round(client.ws.ping));
            message.channel.send(Date.now() - message.createdTimestamp);
            break;
        case 'time':
            message.channel.send(Date.now());
            break;
    }
});

client.login(config.token);
