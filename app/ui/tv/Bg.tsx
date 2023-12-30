import {Container, Sprite, useApp} from "@pixi/react";
import {Sprite as SpriteType} from "pixi.js";
import React, {ReactComponentElement} from "react";
import {Vec} from "@/app/lib/vec";
import {ScreenContext} from "@/app/context";
import {BG_CONF} from "@/app/lib/config/bgConf";

export type GlassInfo = {
  position: Vec,
  width: number,
  height: number
}

type BgProps = {
  width: number;
  height: number;
  // biome-ignore lint/suspicious/noExplicitAny: <explanation>
  bundle: any;
  children: React.JSX.Element | React.JSX.Element[],
  showMask: boolean;
}

const Bg = (props: BgProps) => {
  const { bgTexture, screenMaskTexture, screenTexture } = props.bundle;

  const size = Math.max(props.width, props.height);
  const [screenSprite, setScreenSprite] = React.useState<SpriteType>();

  const y = (props.height - size) / 2;
  const x = (props.width - size) / 2;

  const glassOriginPos = new Vec(BG_CONF.SCREEN_X, BG_CONF.SCREEN_Y);
  const offset = new Vec(x, y);
  const scale = size / BG_CONF.SIZE;

  const glassPos = glassOriginPos.multi(scale).add(offset);

  // @ts-ignore
  globalThis.__PIXI_APP__ = useApp();

  const glassInfo = {
    position: glassPos,
    width: BG_CONF.SCREEN_WID * scale,
    height:  BG_CONF.SCREEN_HT * scale
  }

  return (
    <Container name="bg container">
      <Sprite
        x={x}
        y={y}
        texture={bgTexture}
        width={size}
        height={size}
      />
      <ScreenContext.Provider
        value={glassInfo}
      >
        {(glassInfo.position.isAtEdge()) ? null : (
          <>
            <Container
              mask={props.showMask ? screenSprite : null}
             name="mask container"
            >
              <Sprite
                ref={(ref) => {
                  if (ref !== null) {
                    setScreenSprite(ref);
                  }
                }}
                x={glassInfo.position.x}
                y={glassInfo.position.y}
                texture={screenMaskTexture}
                width={glassInfo.width}
                height={glassInfo.height}
              />
              {screenSprite ? props.children : null}
            </Container>
            <Sprite
              name="screen"
              x={glassInfo.position.x}
              y={glassInfo.position.y}
              texture={screenTexture}
              width={glassInfo.width}
              height={glassInfo.height}
              alpha={0.5}
            />
          </>
        )}
      </ScreenContext.Provider>
    </Container>
  )
}

export default Bg;
