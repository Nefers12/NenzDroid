exports.run = (client, message, args, channel, tags, self) => {
    client.ping().then(function(data){
        let ping = Math.floor(Math.round(data * 1000))
        client.say(channel, `${tags.username}, Le ping du bot est de ${ping}`)
    })
}