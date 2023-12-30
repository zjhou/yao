import {useCallback, useEffect} from "react";
import {useTvConnection} from "@/app/hooks/tv/ctrl/useTvConnection";

/*
 * send signal to server
 */
export const useRemoteCtrl = () => {
  const socket = useTvConnection();

  const turnOn = useCallback(() => {
    socket?.emit("turnOn");
  }, [socket])

  const turnOff = useCallback(() => {
    socket?.emit("turnOff");
  }, [socket])

  const gotoChannel = (num: number) => {
    turnOn();
    socket?.emit("gotoChannel", num);
  }

  return {
    turnOn,
    turnOff,
    gotoChannel,
  }
}
