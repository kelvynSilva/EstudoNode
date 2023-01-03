// const mod1 = require('./mod1');
// const { nome, sobrenome, falaNome } = require('./mod1')

const path = require('path');
const axios = require('axios');
const { Pessoa } = require('./mod1')


axios('https://otaviomiranda.com.br/files/json/pessoas.json')
    .then(response => console.log(response.data))
    .catch(e => console.log(e))