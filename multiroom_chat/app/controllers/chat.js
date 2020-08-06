const { body, validationResult } = require('express-validator');

module.exports.home = function (application, req, res) {
    res.redirect("/");
}

module.exports.postRulesValidator = [
    body('apelido', 'Nome ou apelido é obrigatório').notEmpty(),
    body('apelido', 'Nome ou apelido deve conter entre 3 e 15 caracteres').isLength({ min: 3, max: 15 })
];

module.exports.post = function (application, req, res) {

    var body = req.body;

    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        return res.render("index", { validacao: errors.array() });
    }

    webSocket(application, body);

    res.render("chat", { apelido: body.apelido });
}

function webSocket(application, body) {

    application.get('io').emit('msgServer', {
        apelido: body.apelido,
        msg: 'Acabou de entrar no chat'
    });

}
