import {_ReactPixi, Text} from "@pixi/react";
import {BaseContainer} from "@/app/ui/display/BaseContainer";
import IText = _ReactPixi.IText;
import {TextStyle, ITextStyle, ColorSource} from "pixi.js";
import {BG_CONF} from "@/app/lib/config/bgConf";

export interface TextViewerProps extends IText {
  textStyle?: Partial<ITextStyle>
  bgColor?: ColorSource
}

export const TextViewer = (props: TextViewerProps) => {
  const { bgColor = 0x002b71 } = props;
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
          wordWrapWidth: BG_CONF.SCREEN_WID - 40,
          fill: "#3b82f6",
          ...props.textStyle,
        })}
        alpha={0.9}
        x={20}
        y={20}
      />
    </BaseContainer>
  )
}
