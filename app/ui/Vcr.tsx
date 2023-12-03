import {Sprite} from "@pixi/react";
import {Texture, Sprite as PSprite, VideoResource} from "pixi.js";

type VcrProps = {
  screen: PSprite;
}

const Vcr = ({ screen }: VcrProps) => {
  const screenTexture = Texture.from("images/tv-glass.png");
  const screenSprite = new PSprite(screenTexture);
  const videoTexture = Texture.from<VideoResource>("videos/yy.mp4");

  videoTexture.baseTexture.resource.source.muted = true;
  videoTexture.baseTexture.resource.source.loop = true;
  videoTexture.baseTexture.resource.source.preload = "auto";

  return (
    <>
      <Sprite
        texture={videoTexture}
        mask={screen}
        scale={{ x: 0.3, y: 0.3 }}
        x={-187}
        y={-105}
      />
    </>
  )
}

export default Vcr;
