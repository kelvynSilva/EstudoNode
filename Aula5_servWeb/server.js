const express = require('express');
const app = express();

app.get('/', (req, resp) => {
    resp.send(`
    <form action="/" method="POST">
    Nome: <input type="text" name"nome">
    <button>Enviar</button>
    </form>
    `);
});

app.post('/', (req, res) => {
    res.send('Recebi o formulario');
})

app.get('/contato', (req, resp) => {
    resp.send('Obrigado por entrar em contato com a gente');
})
app.listen(3000, () => {
    console.log('http://localhost:3000');
    console.log('Servidor executando na porta 3000');
});