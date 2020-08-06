module.exports = function (socket) {

    function disconnect() {
        console.log("O usuário desconectou!");
        socket.broadcast.emit('rmParticipantes', usuario);
    }

    function msgClient(data) {
        socket.emit('msgServer', data);
        socket.broadcast.emit('msgServer', data);
    }

    function participantes(data) {
        usuario = data.apelido;
        socket.emit('participantes', data.apelido);
        socket.broadcast.emit('participantes', data.apelido);
    }

    console.log("Usuário conectou!");

    socket.on('disconnect', disconnect);
    socket.on('msgClient', msgClient);
    socket.on('participantes', participantes);

    socket.emit('participantes', -1);


}