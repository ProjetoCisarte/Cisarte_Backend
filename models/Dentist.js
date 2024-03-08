const mongoose = require("mongoose")

const Dentist = mongoose.model('Dentist',{
    idAtendimentoDentista: int,
    idUsuario: int,
    nomeDentista: varchar,
    dataAtendimentoDentista: date
})

module.exports = Dentist