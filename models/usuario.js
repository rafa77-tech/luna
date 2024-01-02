const mongoose = require('mongoose');

const usuarioSchema = new mongoose.Schema({
    nome: String,
    email: String,
    contato: String,
    // Adicione mais campos conforme necessário
});

const Usuario = mongoose.model('Usuario', usuarioSchema);

module.exports = Usuario;