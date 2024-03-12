const mongoose = require('mongoose')

const Psychologist = mongoose.model('Psychologist', {
    idAtendimentoPsicologo : int,
    idUsuario : int,
    nomePsicologo : varchar,
    dataAtendimentoPsicologo: date
})

module.exports = Psychologist;