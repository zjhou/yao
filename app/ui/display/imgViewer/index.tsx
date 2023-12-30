import {Texture, VideoResource} from "pixi.js";
import {useContentSizeCtrl} from "@/app/hooks/tv/view/useContentSizeCtrl";
import {useCallback, useEffect} from "react";
import {Container, Sprite} from "@pixi/react";

export type ImgViewerProps = {
  source: string
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

  // biome-ignore lint/correctness/useExhaustiveDependencies: <explanation>
  useEffect(() => {
    imgTexture.baseTexture.on("loaded", handleVideoLoaded);

    return () => {
      imgTexture.baseTexture.off("loaded", handleVideoLoaded);
    }
  }, []);

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
