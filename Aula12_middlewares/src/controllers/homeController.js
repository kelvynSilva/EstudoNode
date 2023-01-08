exports.paginaInicial = (req, res) => {
    console.log('home');
    res.render('index');
    return;
}

exports.trataPost = (req, res) => {
    res.send(req.body);
    return;
}