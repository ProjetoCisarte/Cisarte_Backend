const mongoose = require('mongoose')

const EnglishClasses = mongoose.model('EnglishCLasses',{
    idAula: int,
    nomeDocente: varchar,
    qtdPessoas: int,
    dataDaAula: date,
    horarioDeAula: int
})

module.exports = EnglishClasses