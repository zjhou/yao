import {useEffect} from "react";
import {useLocalCtrl} from "@/app/hooks/tv/ctrl/useLocalCtrl";
import {useTvConnection} from "@/app/hooks/tv/ctrl/useTvConnection";

/*
 * receive signal from server
 */
export const useSignal = () => {
  const tvLocalCtrl = useLocalCtrl();
  const socket = useTvConnection();

  useEffect(() => {
    socket?.on('turnOn', () => {
      tvLocalCtrl.turnOn();
    });

    socket?.on('gotoChannel', (num) => {
      tvLocalCtrl.gotoChannel(num);
    })

    return () => {
      socket?.off('turnOn');
      socket?.off('gotoChannel');
    }
  }, [tvLocalCtrl, socket]);

}
