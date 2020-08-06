$(function () {

	var socket = io('http://localhost:3000');

	function msgServer(data) {
		console.log(data);
		var html = '<div class="dialogo">'
			+ '<h4>' + data.apelido + '</h4>'
			+ '<p>' + data.msg + '</p>'
			+ '</div>';
		$('#dialogos').append(html);
		window.scrollTo(0, document.body.scrollHeight);
	}

	function participantes(data) {
		console.log(data);
		if (data === -1) {
			socket.emit('participantes', {
				apelido: $('#apelido').val()
			});
		} else {
			var html = `<span class="participante">
			<img src="images/ico_usuario.png" />
			`+ data + `
		</span>`;
			$('#pessoas').append(html);
		}
	}

	socket.on('msgServer', msgServer);
	socket.on('participantes', participantes);

	$('#btn_enviar').click(function () {
		socket.emit('msgClient', {
			apelido: $('#apelido').val(),
			msg: $('#txt_msg').val()
		});
	});
});