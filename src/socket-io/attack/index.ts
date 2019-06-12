import * as https from "http";
import * as socketio from "socket.io";
import express from "express";
import * as path from "path";
import { Player } from "../../interfaces/player";

const attack =  (socket: any, players: Player[],io:socketio.Server) => {
  socket.on("attack", function(data: string) {
    const json = JSON.parse(data);
    const p = players.find(x => x.id == socket.id);
    //da error
    const lifePoints = p!.life - json.attack;

    if (lifePoints < 0) {
      p!.alive = false;
      p!.life = 0;
    } else {
      p!.life = lifePoints;
    }
    socket.emit('data',p);
  });
  

};

export default attack;
