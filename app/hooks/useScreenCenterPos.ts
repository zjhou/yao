import {Vec} from "@/app/lib/vec";
import {useFullscreenSize} from "@/app/hooks/useFullscreenSize";

export const useScreenCenterPos = () => {
    const { width, height } = useFullscreenSize();
    return new Vec(width / 2, height / 2);
}

export const useScreenCenterPosWithOffset = (offset: Vec) => {
  const pos = useScreenCenterPos();
  if (pos.x === 0 && pos.y === 0) {
    return {
      ready: false,
      pos
    };
  }

  console.log(pos);
  return {
    pos: pos.add(offset),
    ready: true,
  }
}

export const useScreenCenterPosForHuman = () => {
  return useScreenCenterPosWithOffset(new Vec(-50, -100));
}
