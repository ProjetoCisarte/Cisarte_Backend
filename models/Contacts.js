const mongoose = require("mongoose")

const Contacts = mongoose.model('Contacts',{
    idContato: int,
    idUsuario: int,
    telefone: varchar,
    telefonePessoaProxima: varchar
})

module.exports = Contacts