import * as https from "http";
import * as socketio from "socket.io";
import express from "express";
import * as path from "path";
import { Player } from "../../interfaces/player";
import { type } from "os";

var player: Player[]=[];

const createServer = (app: express.Express) => {
  const server = https.createServer(app);
  const io = socketio.listen(server);

  io.on("connection", function(socket: any) {
      player.push({
        id: socket.id,
        x: 250,
        y: 250,
        z: 250,
        life:100
      });

    socket.on("attack", function(data:string) {
      const json=JSON.parse(data)
      const index = player.indexOf(socket.id);
      console.log(json.attack)
      console.log(player[index].life);
    });

    socket.on("disconnect", function() {
      const index = player.indexOf(socket.id);
      player.splice(index, 1);

    });
  });
  return server;
};

export default createServer;
