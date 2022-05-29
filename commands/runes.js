exports.run = (client, message, args, channel, tags, self) => {

    const { userId, key } = require('../config')
    const TeemoJS = require('teemojs')
    var runeID = [8112,8124,8128,9923,8126,8139,8143,8136,8120,8138,8135,8134,8105,8106,8351,8360,8369,8306,8304,8313,8321,8316,8345,8347,8410,8352,8005,8008,8021,8010,9101,9111,8009,9104,9105,9103,8014,8017,8299,8437,8439,8465,8446,8463,8401,8429,8444,8473,8451,8453,8242,8214,8229,8230,8224,8226,8275,8210,8234,8233,8237,8232,8236,5005,5008,5001,5003,5002,5007]
    var runeName = ["Électrocution","Prédateur","Moisson noire","Déluge de lames","Coup bas","Goût du sang","Ruée offensive","Balise Zombie","Poro fantôme","Arracheur d'œil","Chasseur Vorace ","Chasseur Ingénieux","Chasseur Acharné","Chasseur ultime","Optimisation glaciale","Grimoire déchainé","Premier Coup","Canaliportation Hextech","Chaussure Magique","Timing parfait","Marché du futur","Désintégrateur de sbire","Livraison de biscuit","Savoir Cosmique","Vitesse d'approche","Philtre de Chronodistorsion","Attaque Soutenue","Tempo mortel","Jeu de Jambes","Conquérant","Surcharge de PV ","Triomphe","Présence D'esprit","Légende Alacrité","Légende Ténacité","Légende Sangsue","Coup de grace","Abattage","Baroud d'honneur","Poigne de L'immortel","Après-coup","Gardien","Démolition","Fontaine de vie","Coup de Bouclier","Conditionnement","Second Souffle","Plaque D'os","Surcroissance ","Revitalisation","Inébranlable","Invocation d'Aery","Comète Arcanique ","Rush Phasique","Orbe anti-magie","Ruban de Mana","Manteau Nuageux","Transcendance ","Célérité","Concentration Absolue","Brûlure","Marche sur l'eau","Tempête Menaçante","Vitesse d'attaque","Force adaptive","PV","Résistance Magique","Armure","Accélération de compétence"]
    var runes =[]
    var a =0;

    let api = TeemoJS(key)

    api.get('euw1', 'summoner.getBySummonerId', userId)
    .then(data => {
      api.get('euw1', 'spectator.getCurrentGameInfoBySummoner', userId)
      .then(info => {
  
        for(i in info.participants){
          if(info.participants[i].summonerName === data.name){
            for(o in info.participants[i].perks.perkIds){
              runes.push(' ' + runeName[runeID.indexOf(info.participants[i].perks.perkIds[o])])
              a++
              if(a === 9){
                client.say(channel, `Les runes de Slashfxrt sont : ${runes}`)
              }
  
            }
          }
        }
      })
    });
    }