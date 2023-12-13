import {Sprite} from "@pixi/react";
import {ALPHA_MODES, BLEND_MODES, Sprite as PSprite, Texture, VideoResource} from "pixi.js";
import {useTvScreen} from "@/app/hooks/useTvScreen";
import {useEffect, useState} from "react";

type VcrProps = {
}

const Vcr = () => {
  const videoTexture = Texture.from<VideoResource>("videos/yy.mp4");
  const [scaledSize, setScaledSize] = useState({width: 1, height: 1});

  const screenInfo = useTvScreen();

  videoTexture.baseTexture.resource.source.muted = true;
  videoTexture.baseTexture.resource.source.loop = true;
  videoTexture.baseTexture.resource.source.preload = "auto";

  const handleVideoLoaded = () => {
    const vWidth = videoTexture.width;
    const vHeight = videoTexture.height;
    const vRatio = vWidth / vHeight;

    const scale =  screenInfo.height / vHeight;

    const svHeight = vHeight * scale;
    const svWidth = svHeight * vRatio;

    console.log(svHeight, svWidth)

    setScaledSize({
      width: svWidth,
      height: svHeight
    })
  }

  useEffect(() => {
    videoTexture.baseTexture.on("loaded", handleVideoLoaded);

    return () => {
      videoTexture.baseTexture.off("loaded", handleVideoLoaded);
    }
  }, []);

  const offset = (screenInfo.width - scaledSize.width) / 2;
  return (
    <Sprite
      x={screenInfo.position.x + offset}
      y={screenInfo.position.y}
      width={scaledSize.width}
      height={scaledSize.height}
      scale={scaledSize.height / videoTexture.height}
      texture={videoTexture}
    />
  )
}

export default Vcr;
