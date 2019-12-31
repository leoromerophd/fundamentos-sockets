const { io } = require('../server');


io.on('connection', (client) => {
    console.log('Usuario Conectado');
    client.emit('enviarMensaje', {
        usuario: 'Administrador',
        mensaje: 'Llegó el Duro, Don Patrón, el Administrator'
    });

    client.on('disconnect', () => {
        console.log('Usuario Desconectado');
    });
    // Escuchar al cliente
    client.on('enviarMensaje', (data, callback) => {

        console.log(data);

        client.broadcast.emit('enviarMensaje', data)

        // if (mensaje.usuario) {
        //     callback({
        //         resp: 'Todo Bien, Todo Bien como dijo el Pibe'
        //     });
        // } else {
        //     callback({
        //         resp: 'Paila, Game Over. Todo salió mal'
        //     });
        // }
    });

});