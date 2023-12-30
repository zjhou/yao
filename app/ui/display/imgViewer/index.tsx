import {BLEND_MODES, ColorSource, Texture, VideoResource} from "pixi.js";
import {useContentSizeCtrl} from "@/app/hooks/tv/view/useContentSizeCtrl";
import React, {useEffect} from "react";
import {Container, Sprite} from "@pixi/react";
import {useMount} from "@/app/hooks/utils/useMount";

export type ImgViewerProps = {
  source: string,
}

export const ImgViewer = (props: ImgViewerProps) => {
  const imgTexture = Texture.from<VideoResource>(props.source);
  const { showContent, containerInfo } = useContentSizeCtrl();

  const handleVideoLoaded = () => {
    const vWidth = imgTexture.width;
    const vHeight = imgTexture.height;

    showContent({
      width: vWidth,
      height: vHeight
    })
  };

  useMount(() => {
    handleVideoLoaded();
    imgTexture.baseTexture.on("loaded", handleVideoLoaded);
    return () => {
      imgTexture.baseTexture.off("loaded", handleVideoLoaded);
    }
  });

  return (
    <Container
      {...containerInfo}
    >
      <Sprite
        texture={imgTexture}
      />
    </Container>
  )
}
