const mongoose = require('mongoose')

const SewingStudio = mongoose.model('SewingStudio', {
    idAtelieCostura : int,
    nomeDocente : String,
    qtdPessoas : int,
    dataDaAula : Date,
    horarioDeAula : int,
})

module.exports = SewingStudio;