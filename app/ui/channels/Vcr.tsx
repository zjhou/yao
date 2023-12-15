import {Container, Sprite} from "@pixi/react";
import {Texture, VideoResource} from "pixi.js";
import {useEffect} from "react";
import {useTvCtrl} from "@/app/hooks/tv/useTvCtxCtrl";

const Vcr = () => {
  const videoTexture = Texture.from<VideoResource>("videos/yy.mp4");
  const tvCtrl = useTvCtrl();

  videoTexture.baseTexture.resource.source.muted = true;
  videoTexture.baseTexture.resource.source.loop = true;
  videoTexture.baseTexture.resource.source.preload = "auto";

  const handleVideoLoaded = () => {
    const vWidth = videoTexture.width;
    const vHeight = videoTexture.height;

    tvCtrl.showContent({
      width: vWidth,
      height: vHeight
    })
  }

  useEffect(() => {
    videoTexture.baseTexture.on("loaded", handleVideoLoaded);

    return () => {
      videoTexture.baseTexture.off("loaded", handleVideoLoaded);
    }
  }, []);

  return (
    <Container
      {...tvCtrl.containerInfo}
    >
      <Sprite
        texture={videoTexture}
      />
    </Container>
  )
}

export default Vcr;
