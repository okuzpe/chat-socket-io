import * as https from "http";
import * as socketio from "socket.io";
import express from "express";
import * as path from "path";
import createServer from "./routes/socket-io";
// import cors from 'cors'
const app = express();
// app.use(cors())
app.set("port", process.env.PORT || 3000);

const server = createServer(app);

app.get("/", (req: any, res: any) => {
  res.sendFile(path.resolve("./src/html/index.html"));
});

server.listen(3000, function() {
  console.log("listening on *:3000");
});
