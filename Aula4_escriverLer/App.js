const path = require('path');
const caminhoArquivo = path.resolve(__dirname, 'teste.json');

// const escrever = require('./modules/write');
const ler = require('./modules/read');

const pessoas = [
    { nome: 'kelvyn' },
    { nome: 'monique' },
    { nome: 'katia' },
    { nome: 'kariany' }
];

const json = JSON.stringify(pessoas, '', 2);
// escrever(caminhoArquivo, json);


async function leArquivo(caminho) {
    const dados = await ler(caminho);
    renderizaDados(dados);
}

function renderizaDados(dados) {
    dados = JSON.parse(dados);
    dados.forEach(val => console.log(val.nome));
}
leArquivo(caminhoArquivo);
