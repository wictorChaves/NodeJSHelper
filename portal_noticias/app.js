var app = require('./config/server');

app.listen(3000, function(){
	console.log(new Date().toLocaleString() + " Servidor ON");
});