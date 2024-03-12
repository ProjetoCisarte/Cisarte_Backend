const mongoose = require('mongoose')

const Speeches = mongoose.model('Speeches', {
    idPalestra : int,
    nomePalestrante : String,
    qtdMediaDePessoas : int,
    dataDaAula : Date,
    horarioDeAula : int,
})

module.exports = Speeches;