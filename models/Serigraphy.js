const mongoose = require('mongoose')

const Serigraphy = mongoose.model('Serigraphy', {
    idSerigrafia: int,
    nomeDocente: String,
    qtdPessoa: int,
    dataDaOficina: Date,
    horarioDaOficina : int,
    objetivoDaOficina : String
})

module.exports = Serigraphy