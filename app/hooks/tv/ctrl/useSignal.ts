import {useEffect} from "react";
import {useLocalCtrl} from "@/app/hooks/tv/ctrl/useLocalCtrl";
import {useTvConnection} from "@/app/hooks/tv/ctrl/useTvConnection";

/*
 * receive signal from server
 */
export const useSignal = () => {
  const tvLocalCtrl = useLocalCtrl();
  const socket = useTvConnection();

  console.log(socket)

  useEffect(() => {
    socket?.on('turnOn', () => {
      console.log("signal received: turn on")
      tvLocalCtrl.turnOn();
    });

    socket?.on('turnOff', () => {
      console.log("signal received: turn off")
      tvLocalCtrl.turnOff();
    });

    socket?.on('gotoChannel', (num) => {
      console.log(`signal received: gotoChannel ${num}`);
      tvLocalCtrl.gotoChannel(num);
    })

    return () => {
      socket?.off('turnOn');
      socket?.off('gotoChannel');
    }
  }, [tvLocalCtrl, socket]);

}
