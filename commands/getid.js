exports.run = (client, message, args, channel, tags, self) => {

    const { username, key } = require('../config')

    const TeemoJS = require('teemojs');
    let api = TeemoJS(key);

    api.get('euw1', 'summoner.getBySummonerName', username)
    .then(data => console.log(`id: ${data.id}`));
}