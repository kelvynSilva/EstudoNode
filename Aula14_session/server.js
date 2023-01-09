require('dotenv').config();

const express = require('express');
const app = express();


//Chamada do mongosse que faz a comunicação com o banco de dados
const mongoose = require('mongoose');
mongoose.connect(process.env.CONNECTIONSTRING)
    .then(() => {
        app.emit('pronto');
    })
    .catch(e => console.log(e));


const session = require('express-session');
const MongoSotre = require('connect-mongo')(session);
const flash = require('connect-flash');


const routes = require('./routes');
const path = require('path');
const { myMiddlewareGlobal } = require('./src/middlewares/middleware');

app.use(express.urlencoded({ extended: true }));

app.use(express.static(path.resolve(__dirname, 'public')));

const sessionOption = session({
    secret: 'dfaslikfhaklsjf',
    store: new MongoSotre({ mongooseConnection: mongoose.connection }),
    resave: false,
    saveUninitialized: false,
    cookie: {
        maxAge: 1000 * 60 * 60 * 24 * 7,
        httpOnly: true
    }
});

app.use(sessionOption);
app.use(flash());

app.set('views', path.resolve(__dirname, 'src', 'views'));
app.set('view engine', 'ejs');

// Nosso middleware global
app.use(myMiddlewareGlobal);

app.use(routes);

app.on('pronto', () => {
    app.listen(3000, () => {
        console.log('http://localhost:3000');
        console.log('Servidor executando na porta 3000');
    });

});

