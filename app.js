const express = require('express');
const mongoose = require('mongoose');
const app = express();
const cors = require('cors'); 
const Usuario = require('./models/usuario');

// Conectar ao MongoDB
mongoose.connect('mongodb://localhost:27017/luna')
    .then(() => console.log('Connected to MongoDB...'))
    .catch(err => console.error('Could not connect to MongoDB...', err));


// Middleware para servir arquivos estáticos
app.use(express.static('public'));

// Rota GET raiz
app.get('/', (req, res) => {
    res.sendFile(__dirname + '/public/index.html');
});

// Configuração para aceitar JSON e dados de formulários
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Rota POST cadastro
app.post('/cadastro', (req, res) => {
    const novoUsuario = new Usuario({
        nome: req.body.nome,
        email: req.body.email,
        // Adicione mais campos conforme necessário
    });

    novoUsuario.save()
    .then(() => res.json({ message: 'Usuário cadastrado com sucesso!' }))
    .catch(err => res.status(400).send('Erro ao cadastrar usuário: ' + err));
});


// Iniciar o servidor
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
