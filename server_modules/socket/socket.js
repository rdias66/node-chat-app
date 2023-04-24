const  handleConnection = (io) => {
  io.on('connection', (socket) => {
    console.log('New user connected');

    // Handle chat messages
    socket.on('createMessage', (message) => {
      console.log('createMessage', message);
      io.emit('newMessage', message );
    });

    // Handle disconnections
    socket.on('disconnect', () => {
      console.log('User disconnected');
    });
  });
}

module.exports = {
  handleConnection
};