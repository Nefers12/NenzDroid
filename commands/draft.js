exports.run = (client, message, args, channel, tags, self) => {

    const { userId, key } = require('../config')
    const request = require('request')
    var version = "11.23.1"
    const TeemoJS = require('teemojs')
    var draft = []
    var a =0


    let api = TeemoJS(key)

    api.get('euw1', 'spectator.getCurrentGameInfoBySummoner', userId)
    .then(data => {
        for (i in data.bannedChampions) {
        getChampName(data.bannedChampions[i].championId);
        }
    })



    function getChampName(id) {

      if(id == -1){
          a++
          if(a === 10){
              var uniqueDraft = [...new Set(draft)];
              client.say(channel, `La liste des champions bannis pour cette game est : ${uniqueDraft}`)
             }
          return;
      }else{

          request('http://ddragon.leagueoflegends.com/cdn/' + version + '/data/fr_FR/champion.json', function (error, response, body) {
    
              let list = JSON.parse(body);
              let championList = list.data;
          
              for (var i in championList) {
          
                if (championList[i].key == id) {
                   draft.push(' ' + championList[i].name);
                   a++;
                   if(a === 10){
                    var uniqueDraft = [...new Set(draft)];
                    client.say(channel, `La liste des champions bannis pour cette game est : ${uniqueDraft}`)
                   }
                }
              }
          
            });

      }

    }
  }