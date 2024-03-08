const mongoose = require('mongoose');

const User = mongoose.model('User', {
    idTipoDeUsuario: int,
    email: varchar,
    senha: varchar,
    nomeCompleto: String,
    nomeSocial: String,
    dataDeNascimento: Date,
    telefone: varchar,
    cpf: varchar,
    genero: varchar,
    fotoDoUsuario: plob,
    rg: int,
    cpf: int,
    estadoCivil: varchar,
    dataDeEntrada: date,
    estadoDaEntrada: varchar
})

module.exports = User;