import {TvContainerInfo, Size} from "@/app/lib/tv";
import {useEffect, useState} from "react";
import {useTvScreen} from "@/app/hooks/tv/view/useTvScreen";

export const useTvContainerInfo = (contentSize: Size) : TvContainerInfo => {
  const [scaledSize, setScaledSize] = useState({width: 1, height: 1});
  const screenInfo = useTvScreen();

  useEffect(() => {
    const cWidth = contentSize.width;
    const cHeight = contentSize.height;
    const vRatio = cWidth / cHeight;

    const scale =  screenInfo.height / cHeight;

    const svHeight = cHeight * scale;
    const svWidth = svHeight * vRatio;

    setScaledSize({
      width: svWidth,
      height: svHeight
    });
  }, [screenInfo.height, contentSize.width, contentSize.height]);

  const offset = (screenInfo.width - scaledSize.width) / 2;

  return {
    x: screenInfo.position.x + offset,
    y: screenInfo.position.y,
    width: scaledSize.width,
    height: scaledSize.height,
    scale: scaledSize.height / contentSize.height,
  }
}
