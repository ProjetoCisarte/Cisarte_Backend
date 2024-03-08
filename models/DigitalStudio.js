const mongoose = require('mongoose')

const DigitalStudio = mongoose.model('DigitalStudio',{
    idInclusaoDigital: int,
    nomeDocente: varchar,
    qtdPessoas: int,
    dataDaOficina: int,
    horarioDaOficina: varchar,
})

module.exports = DigitalStudio;