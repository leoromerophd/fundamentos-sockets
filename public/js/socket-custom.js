var socket = io();
socket.on('connect', function() {
    console.log('Conectado al Servidor');
});
// .on sirve para escuchar actividad de conexión 
socket.on('disconnect', function() {
    console.log('Se perdió conexión con el Servidor');
})

// Envía información sobre actividad del usuario
socket.emit('enviarMensaje', {
    usuario: 'Leonardo',
    mensaje: 'Hola Puto Mundo'
}, function(resp) {
    console.log('resuesta server:', resp);
});

// Cliente escucha información del servidor

socket.on('enviarMensaje', function(mensaje) {
    console.log('Servidor Dice', mensaje);
})