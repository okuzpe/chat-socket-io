import * as https from "http";
import * as socketio from "socket.io";
import express from "express";
import * as path from "path";
import { Player } from "../../interfaces/player";

const locationInfo =  (socket: any, player: Player[],io:socketio.Server) => {
    // const p = player.find(x => x.id == socket.id);
    socket.emit('locationInfo',player);
    console.log('entra');
    
};

export default locationInfo;
