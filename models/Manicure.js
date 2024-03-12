const mongoose = require('mongoose')

const Manicure = mongoose.model('Manicure', {
    idAtendimentoManicure : int,
    idUsuario : int,
    nomeManicure : varchar,
    dataAtendimentoManicure: date
})

module.exports = Manicure;