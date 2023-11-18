import {Vec} from "@/app/lib/particle/vec";
import {useFullscreenSize} from "@/app/hooks/useFullscreenSize";

export const useScreenCenterPos = () => {
    const { width, height } = useFullscreenSize();
    return new Vec(width / 2, height / 2);
}

export const useScreenCenterPosWithOffset = (offset: Vec) => {
  const pos = useScreenCenterPos();
  return pos.add(offset);
}

export const useScreenCenterPosForHuman = () => {
  return useScreenCenterPosWithOffset(new Vec(-100, -100));
}
