require('dotenv').config();

const express = require('express');
const app = express();

//Conecxão com a base de dados
const mongoose = require('mongoose');
// Acesso ao DB
mongoose.connect(process.env.CONNECTIONSTRING, { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => {
        // Sinal emitido para so rodar a aplicação apos o sinal
        app.emit('pronto');
    }).catch(e => {
        console.log(e);
    });


const routes = require('./routes');
const path = require('path');
const { myMiddlewareGlobal } = require('./src/middlewares/middleware');
const { strict } = require('assert');


app.use(express.urlencoded({ extended: true }));

app.use(express.static(path.resolve(__dirname, 'public')));

app.set('views', path.resolve(__dirname, 'src', 'views'));
app.set('view engine', 'ejs');

// Nosso middleware global
app.use(myMiddlewareGlobal);

app.use(routes);

// onde o sinal e recebido
app.on('pronto', () => {
    //Rodando a aplicação 
    app.listen(3000, () => {
        console.log('http://localhost:3000');
        console.log('Servidor executando na porta 3000');
    });
});


