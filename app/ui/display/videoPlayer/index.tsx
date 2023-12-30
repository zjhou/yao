import {Texture, VideoResource} from "pixi.js";
import {useContentSizeCtrl} from "@/app/hooks/tv/view/useContentSizeCtrl";
import {useEffect} from "react";
import {Container, Sprite} from "@pixi/react";
import {useMount} from "@/app/hooks/utils/useMount";

export type VideoPlayerProps = {
  source: string;
}

export const VideoPlayer = (props: VideoPlayerProps) => {
  const videoTexture = Texture.from<VideoResource>(props.source);
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

  useMount(() => {
    videoTexture.baseTexture.on("loaded", handleVideoLoaded);
    handleVideoLoaded();
    return () => {
      videoTexture.baseTexture.off("loaded", handleVideoLoaded);
    }
  });

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
