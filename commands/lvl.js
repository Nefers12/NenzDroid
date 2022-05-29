exports.run = (client, message, args, channel, tags, self) => {

    const { userId, key } = require('../config')

    const TeemoJS = require('teemojs');
    let api = TeemoJS(key);

    api.get('euw1', 'summoner.getBySummonerId', userId)
    .then(data => {
        api.get('euw1', 'summoner.getBySummonerName', data.name)
        .then(info => client.say(channel, `Slasfxrt est niveau ${info.summonerLevel} sur la faille de l'invocateur`));
    });
}