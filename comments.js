//create web server
const server = require('http').createServer();
const io = require('socket.io')(server,{
    cors: {
        origin: "*",
    }
});
server.listen(3001, function() {
    console.log('Listening HTTP on 3001' );
});

io.on('connection',function (socket){
    console.log('connected');


   socket.on('send-message',function (data){
       console.log(data);
       io.emit('message',data);
   });

   socket.on('send-ubicacion',function (data){
       console.log(data);
       io.emit('ubicacion',data);
   });

   socket.on('disconnect',function (){
       console.log('disconnected')
   });
})
