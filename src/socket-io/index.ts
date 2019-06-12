import * as https from "http";
import * as socketio from "socket.io";
import express from "express";
import * as path from "path";
import { Player } from "./../interfaces/player";
import attack from "./attack";
import locationInfo from "./location-info";
let players: Player[] = [];

const createServer = (app: express.Express) => {
  const server = https.createServer(app);
  const io = socketio.listen(server);

  io.on("connection", function(socket: any) {
    players.push({
      id: socket.id,
      x: 250,
      y: 250,
      z: 250,
      life: 100,
      alive: true
    });
    locationInfo(socket, players, io);
    attack(socket, players, io);

    setInterval(function() {
        socket.broadcast.emit('allInfo', players);
    }, 1000);

    socket.on("disconnect", function() {
      const index = players.indexOf(socket.id);
      players.splice(index, 1);
      console.log("disconect");
    });
  });
  return server;
};

export default createServer;
