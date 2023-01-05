const express = require('express');
const app = express();

app.use(express.urlencoded({ extended: true }));

app.get('/', (req, resp) => {
    resp.send(`
    <form action="/" method="POST">
    Nome do cliente: <input type="text" name="nome">
    <button>Ola</button>
    </form>
    `);
});
app.get('/teste/:idUsuarios?/:nomeDoparametro?', (req, res) => {
    console.log(req.params);
    console.log(req.query);
    res.send(req.query.profile);
})

app.post('/', (req, res) => {
    console.log(req.body);
    res.send(`Oque foi enviado foi ${req.body.nome}`);
});


app.listen(3000, () => {
    console.log('http://localhost:3000');
    console.log('Servidor executando na porta 3000');
});