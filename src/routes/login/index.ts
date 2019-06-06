import express, { Request, Response } from "express";
import * as socketio from "socket.io";
const socket = io("http://localhost:3000");

const sendMessage= async (req:Request,res:Response):Promise<Response> =>{

    return res
}

export default sendMessage;