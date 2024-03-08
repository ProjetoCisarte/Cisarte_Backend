const mongoose = require('mongoose');

const UserType = mongoose.model('UserType', {
    idTipoDeUsuario: int,
    descricao: varchar
})

module.exports = UserType;