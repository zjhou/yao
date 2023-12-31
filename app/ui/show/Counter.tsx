import {useDays} from "@/app/hooks/utils/useDays";
import {TextViewer} from "@/app/ui/display/textViewer";
import {ColorNums} from "@/app/lib/theme/colors";

export const Counter = () => {
  const str = useDays(8);

  return (
    <TextViewer
      bgColor={ColorNums.STAGE_BG_COLOR}
      textStyle={{
        fill: ColorNums.HEART_COLOR
      }}
      text={str}
      paddingY={30}
    />
  )
}
