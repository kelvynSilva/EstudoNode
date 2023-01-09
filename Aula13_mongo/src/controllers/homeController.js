const HomeModel = require('../models/HomeModel');

HomeModel.creat({
    titulo: 'outra coisa',
    decricao: 'criando outra coisa'
})
    .then(dados => {
        console.log(dados);
    }).catch(e => console.log(e));


exports.paginaInicial = (req, res) => {
    console.log('home');
    res.render('index');
    return;
}

exports.trataPost = (req, res) => {
    res.send(req.body);
    return;
}