const app = require('./config/server');
const msg = require('./helper/msg.js');
const socket = require('./socket/socket');
const post = 3000;

server = app.listen(post, function () {
	msg.green("\n" + new Date().toLocaleString() + " - Servidor online - Port " + post + "\n");
});

app.set('io', require('socket.io').listen(server));
app.get('io').on('connection',  socket);