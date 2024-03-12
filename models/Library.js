const mongoose = require('mongoose')

const Library = mongoose.model('Library', {
    idUsuario : int,
    nomeLivro : varchar,
    categoria: date
})

module.exports = Library;