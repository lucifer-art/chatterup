import express from 'express';
import http from 'http';
import { Server } from 'socket.io';
import mongoose from 'mongoose';
import Message from './models/message.schema.js';

export const app = express();
export const server = http.createServer(app);
const io = new Server(server);

app.use(express.static('public'));
