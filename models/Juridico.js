const mongoose = require('mongoose')

const Juridico = mongoose.model('Juridico', {
    idAtendimentoJuridico: int,
    idUsuario : int,
    nomeProfissional : varchar,
    dataAtendimentoJuridico: date
})

module.exports = Juridico;