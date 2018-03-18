exports.getVoiceConn = (bot, msg, cb) => {
    const voiceConn = msg.guild.voiceConnection;

    if (voiceConn && voiceConn.channel === msg.member.voiceChannel) { // check if we already have an active voice connection
        cb(null, voiceConn);
    }
    else { // create new voice connection
        msg.member.voiceChannel.join()
        .then(newVoiceConnection => {
            cb(null, newVoiceConnection);
        })
        .catch(cb);
    }
}