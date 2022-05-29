const tmi = require('tmi.js');
const {usr, pass, chans, prefix} = require('./config')

const client = new tmi.Client({
	options: { debug: true },
	identity: {
		username: usr,
		password: pass
	},
	channels: chans
});

client.connect();

client.on('message', (channel, tags, message, self) => {
	if(self || !message.startsWith(prefix)) return;

	const args = message.toLowerCase().slice(prefix.length).split(' ');
	const cmd = args.shift();

	try{
		let commandFile = require(`./commands/${cmd}.js`);
		commandFile.run(client, message, args, channel, tags, self)
	}catch{

	}
});

process.on("unhandledRejection", (err) => {
	console.error(err);
});