import socketModule from './src/socket/socket.js';
import userRoutes from './src/user/user.routes.js';
import messageRoutes from './src/message/message.routes.js';
import express from 'express';
import http from 'http';
import { Server } from "socket.io";

const app = express();
const server = http.createServer(app);
const io = new Server(server);

app.get('/', (req, res) => {
  res.sendFile(__dirname + '/index.html');
});

socketModule.handleConnection(io);

app.use(userRoutes);

app.use(messageRoutes);

server.listen(3000, () => {
  console.log('listening on *:3000');
}); 
