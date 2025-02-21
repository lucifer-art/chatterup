import express from 'express';
import http from 'http';
import { Server } from 'socket.io';
import mongoose from 'mongoose';
import Message from './models/message.schema.js';

export const app = express();
export const server = http.createServer(app);
const io = new Server(server);

app.use(express.static('public'));

io.on('connection', async (socket) => {
    console.log("User connected");

    const messages = await Message.find();
    socket.emit('chatHistory', messages);

    socket.on('message', async ({username, text}) => {
        const newMessage = new Message({ username, text});
        await newMessage.save();
        io.emit('message', newMessage);
    })

    socket.on('disconnect', () => {
        console.log("User disconnected");
    })
})
