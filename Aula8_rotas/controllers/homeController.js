exports.paginaInicial = (req, res) => {
    res.send(`
        <form action="/" method="POST">
        Nome do cliente: <input type="text" name="nome">
        <button>Ola</button>
        </form>
        `);
}

exports.trataPost = (req, res) => {
    res.send('Sua nova rota de post');
}