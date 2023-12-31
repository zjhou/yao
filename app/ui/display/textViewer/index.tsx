import {_ReactPixi, Text} from "@pixi/react";
import {BaseContainer} from "@/app/ui/display/BaseContainer";
import IText = _ReactPixi.IText;
import {TextStyle, ITextStyle, ColorSource} from "pixi.js";
import {BG_CONF} from "@/app/lib/config/bgConf";

export interface TextViewerProps extends IText {
  textStyle?: Partial<ITextStyle>
  bgColor?: ColorSource
  paddingX?: number
  paddingY?: number
}

export const TextViewer = (props: TextViewerProps) => {
  const { bgColor = 0x002b71, paddingX = 20, paddingY = 20 } = props;

  return (
    <BaseContainer
      bgColor={bgColor}
    >
      <Text
        {...props}
        style={new TextStyle({
          fontSize: 70,
          fontWeight: '700',
          wordWrap: true,
          wordWrapWidth: BG_CONF.SCREEN_WID - 2 * paddingX,
          fill: "#3b82f6",
          ...props.textStyle,
        })}
        alpha={0.9}
        x={paddingX}
        y={paddingY}
      />
    </BaseContainer>
  )
}
