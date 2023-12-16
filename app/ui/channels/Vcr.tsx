import {Container, Sprite} from "@pixi/react";
import {Texture, VideoResource} from "pixi.js";
import {useEffect} from "react";
import {useLocalCtrl} from "@/app/hooks/tv/ctrl/useLocalCtrl";
import {useContentSizeCtrl} from "@/app/hooks/tv/view/useContentSizeCtrl";

const Vcr = () => {
  const videoTexture = Texture.from<VideoResource>("videos/yy.mp4");
  const { showContent, containerInfo } = useContentSizeCtrl();

  videoTexture.baseTexture.resource.source.muted = true;
  videoTexture.baseTexture.resource.source.loop = true;
  videoTexture.baseTexture.resource.source.preload = "auto";

  const handleVideoLoaded = () => {
    const vWidth = videoTexture.width;
    const vHeight = videoTexture.height;

    showContent({
      width: vWidth,
      height: vHeight
    })
  }

  useEffect(() => {
    videoTexture.baseTexture.on("loaded", handleVideoLoaded);

    return () => {
      videoTexture.baseTexture.off("loaded", handleVideoLoaded);
    }
  }, [handleVideoLoaded, videoTexture.baseTexture]);

  return (
    <Container
      {...containerInfo}
    >
      <Sprite
        texture={videoTexture}
      />
    </Container>
  )
}

export default Vcr;
