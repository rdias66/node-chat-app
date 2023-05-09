import socketModule from './src/socket/socket.js';
import userRoutes from './src/user/user.routes.js';
import messageRoutes from './src/message/message.routes.js';
import express from 'express';
import http from 'http';
import { Server } from "socket.io";

const app = express();
const server = http.createServer(app);
const io = new Server(server);

socketModule.handleConnection(io); //setup io connection for chat 

app.get('/', (req, res) => {      //send html test file for server ( to be changed for frontend rep)
  res.sendFile(__dirname + '/index.html');
});

app.use(userRoutes);  // setup user crud routes
 
app.use(messageRoutes); // setup message crud (for db storage, the chat itself stays on frontend)

server.listen(3000, () => {
  console.log('listening on *:3000');
}); 
