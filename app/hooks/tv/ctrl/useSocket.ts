import {useEffect, useState} from "react";
import {io, type Socket} from "socket.io-client";
import {ClientToServerEvents, ServerToClientEvents} from "@/app/types/socketCustomTypes";

export const useSocket = () => {
  const [socket, setSocket] = useState<Socket<ServerToClientEvents, ClientToServerEvents>>();
  useEffect(() => {
    void fetch("/api/socket");

    const s = io();
    setSocket(s);

    s.on("connect", () => {
      console.log("connected");
    });

    return () => {
      if (s) {
        console.log("disconnected")
        s.disconnect();
      }
    };
  }, []);

  return socket;
}
