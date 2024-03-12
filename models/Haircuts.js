const mongoose = require('mongoose')

const Haircuts = mongoose.model('Haircuts', {
    idCorteDeCabelo: int,
    idUsuario : int,
    nomeBarbeiro : varchar,
    dataDoCorte: date
})

module.exports = Haircuts;