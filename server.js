const Discord = require('discord.js');
const client = new Discord.Client();
const token = 'Njk0ODUzMTMwMTMwNTU0ODkx.XoSY_Q.H5GVzm8VAMfVsFlSsu1abMi2lZY'

const prefix = '_'; //Prefisso
const ownerID = 'YourID'; //Bho

client.on('message', message => {
    let args = message.content.slice(prefix.lenght).trim().split(' ');
    let cmd = args.shift().toLowerCase();

    if (message.author.bot) return;
    if (!message.content.starsWith(prefix)) return;

    try
    {
        delete require.cache[require.resolve('./commands/${cmd}.js')]

        let commandFile = require('./commands/${cmd}.js');
        commandFile.run(client, message, args);
    }catch (e) 
    {
        console.log(e.stack);
    }
});

client.on('ready', () => console.log('Partito!'));

client.login(token).catch(err => console.log(err));