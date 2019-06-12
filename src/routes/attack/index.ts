import * as https from "http";
import * as socketio from "socket.io";
import express from "express";
import * as path from "path";
import { Player } from "../../interfaces/player";
import { isObject } from "util";

const attack =  (socket: any, player: Player[],io:socketio.Server) => {
  socket.on("attack", function(data: string) {
    const json = JSON.parse(data);
    const p = player.find(x => x.id == socket.id);
    const lifePoints = p!.life - json.attack;

    if (lifePoints < 0) {
      p!.alive = false;
      p!.life = 0;
    } else {
      p!.life = lifePoints;
    }
    socket.emit('data',player);
    console.log('entra')
  });
  

};

export default attack;
