import {TVStation} from "@/app/types/tvTypes";
import {ImgViewer} from "@/app/ui/display/imgViewer";
import {VideoPlayer} from "@/app/ui/display/videoPlayer";

type TvDisplayProps = {
  station: TVStation
}
export const TvDisplay = (props: TvDisplayProps) => {
  return (
    <VideoPlayer source="videos/yy.mp4" />
  )
}
