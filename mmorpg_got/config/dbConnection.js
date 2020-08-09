var mongo = require('mongodb');

var connMongoDB = function () {
    console.log('Entrou na função de conexão');

    var host = 'localhost';
    var port = 27017;
    var databaseName = 'got';

    var serverConfigOptions = {};
    var serverConfig = mongo.Server(host, port, serverConfigOptions);
    var options = {};
    
    return new mongo.Db(databaseName, serverConfig, options);
}

module.exports = function () {
    return connMongoDB;
}