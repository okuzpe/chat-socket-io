import * as https from "http";
import * as socketio from "socket.io";
import express from "express";
import * as path from "path";
import createServer from "./routes/socket-io";

const app = express();
app.set("port", process.env.PORT || 3000);

const server =createServer(app)

app.get("/", (req: any, res: any) => {
  res.sendFile(path.resolve("./src/html/index.html"));
});

 server.listen(3000, function() {
  console.log("listening on *:3000");
});
