import {useTvScreen} from "@/app/hooks/tv/view/useTvScreen";
import {VideoPlayer} from "../display/videoPlayer";
import {TextViewer} from "@/app/ui/display/textViewer";
import {ImgViewer} from "@/app/ui/display/imgViewer";

export const Tv = () => {
  const screen = useTvScreen();
  if (screen.width === 0 || screen.height === 0) {
    console.log("tv is not ready")
    return;
  }

  console.log("tv is Ready")

  return (
    <VideoPlayer source="videos/yy.mp4" />
    // <TextViewer text="hello world and foo bar baz" />
    // <ImgViewer source="images/rocks.JPG" />
  );
}
