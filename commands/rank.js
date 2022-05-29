exports.run = (client, message, args, channel, tags, self) => {

    const { userId, key } = require('../config')

    const TeemoJS = require('teemojs');
    let api = TeemoJS(key);
    let taunt = "";

    api.get('euw1', 'league.getLeagueEntriesForSummoner', userId)
    .then(data =>{ 

        if(data[0].wins > data[0].losses){
            taunt = `c'est probablement un coup de chance`
        }else if(data[0].losses > data[0].wins){
            taunt = `Le gros nul`
        }else{
            taunt = `Perfectly balanced`
        }

        client.say(channel, `Slasfxrt est \r ${data[0].tier} ${data[0].rank} avec ${data[0].leaguePoints} lp, ${data[0].wins} victoires et ${data[0].losses} défaites pour un total de ${data[0].losses + data[0].wins} parties jouées cette saison ! Il a un winrate de ${Math.floor(data[0].wins/(data[0].losses + data[0].wins)* 100)}% ${taunt}`)
    });
}