import {ContentType, TVShow} from "@/app/types/tvTypes";
import {BaseContainer} from "@/app/ui/display/BaseContainer";
import {ImgViewer} from "@/app/ui/display/imgViewer";
import {TextViewer} from "@/app/ui/display/textViewer";
import {VideoPlayer} from "@/app/ui/display/videoPlayer";
import React, {FC} from "react";

type TvDisplayProps = {
  tvShow: TVShow
}
export const TvDisplay = (props: TvDisplayProps) => {
  const { tvShow } = props;
  if (tvShow.type === ContentType.Video) {
    return (
      <VideoPlayer source={tvShow.content.source as string} />
    )
  }

  if (tvShow.type === ContentType.Text) {
    return (
      <TextViewer
        text={tvShow.content.source as string}
      />
    )
  }

  if (tvShow.type === ContentType.Img) {
    return (
      <ImgViewer source={tvShow.content.source as string} />
    )
  }

  if (tvShow.type === ContentType.Custom) {
    const Content = tvShow.content.source as FC;
    return (
      <BaseContainer>
        <Content />
      </BaseContainer>
    )
  }

  return null;
}
