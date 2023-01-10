// module.exports = (req, res, next) => {
//     // if (req.body.cliente) {
//     //     req.body.cliente = req.body.cliente.replace('silva', 'Não use silva');
//     //     console.log();
//     //     console.log(`Vi o nome ${req.body.cliente}`);
//     //     console.log();
//     // }
//     next();
// }

exports.myMiddlewareGlobal = (req, res, next) => {
    res.locals.umaVariavelLocal = 'Resposta da rota';
    next();
}
