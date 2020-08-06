module.exports = function (application) {

    application.post('/chat', application.app.controllers.chat.postRulesValidator, function (req, res) {
        application.app.controllers.chat.post(application, req, res);
    });

    application.get('/chat', function (req, res) {
        application.app.controllers.chat.home(application, req, res);
    });
}