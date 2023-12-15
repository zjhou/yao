import {Vec} from "@/app/lib/vec";
import {useTvScreen} from "@/app/hooks/tv/useTvScreen";


export const useTVScreenCenterPos = () => {
  const screen = useTvScreen();

  return {
    pos: screen.position.add(new Vec(screen.width / 2, screen.height / 2 - 450)),
    ready: true,
  }
}
