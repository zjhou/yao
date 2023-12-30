import { Server } from "socket.io";
import type { NextApiRequest } from "next";
import {
  NextApiResponseWithSocket,
  ClientToServerEvents,
  ServerToClientEvents,
} from "@/app/types/socketCustomTypes";

export default async function GET(
  req: NextApiRequest,
  res: NextApiResponseWithSocket
) {
  if (res.socket?.server.io) {
    console.log("socket.io already running");
    res.end();
    return;
  }

  //  Server intialization
  console.log("*First use, starting socket.io");


  const io = new Server<ClientToServerEvents, ServerToClientEvents>(
    res.socket.server
  );

  io.on("connection", (socket) => {
    socket.on("turnOn", () => {

      console.log("server received turn on event");
      socket.broadcast.emit("turnOn");
    });

    socket.on("turnOff", () => {
      console.log("server received turn off event");
      socket.broadcast.emit("turnOff");
    });

    socket.on("disconnect", () => {
      console.log("A user disconnected");
    });

    socket.on("gotoChannel", (num) => {
      console.log("server received gotoChannel signal");
      socket.broadcast.emit("gotoChannel", num);
    })
  });

  res.socket.server.io = io;
}

export const config = {
  api: {
    bodyParser: false,
  },
};

export const dynamic = "force-dynamic";
