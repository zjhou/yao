import {Container, Sprite, Graphics} from "@pixi/react";
import {BLEND_MODES, Sprite as SpriteType, Texture, Graphics as G} from "pixi.js";
import React, {ReactComponentElement} from "react";
import {Vec} from "@/app/lib/vec";
import {ScreenContext} from "@/app/context";

export type GlassInfo = {
  position: Vec,
  width: number,
  height: number
}

type BgProps = {
  width: number;
  height: number;
  children: (glass: SpriteType, info: GlassInfo) => ReactComponentElement<any>
}

const Bg = (props: BgProps) => {
  const texture = Texture.from("images/bg.png");
  const glass = Texture.from("images/glass.png");
  const screen = Texture.from("images/screen.png");

  const size = Math.max(props.width, props.height);
  const [screenSprite, setScreenSprite] = React.useState<SpriteType>();
  const [screenRect, setScreenRect] = React.useState<G>();

  const y = (props.height - size) / 2;
  const x = (props.width - size) / 2;

  const glassOriginPos = new Vec(799, 1049);
  const offset = new Vec(x, y);
  const scale = size / 2048;

  const glassPos = glassOriginPos.multi(scale).add(offset);

  const glassInfo = {
    position: glassPos,
    width: 484 * scale,
    height:  340 * scale
  }

  return (
    <Container>
      <Sprite
        x={x}
        y={y}
        texture={texture}
        width={size}
        height={size}
      />
      <ScreenContext.Provider
        value={glassInfo}
      >
        {(glassInfo.position.isAtEdge()) ? null : (
          <>
            <Container
              mask={screenSprite}
            >
              <Sprite
                ref={(ref) => {
                  if (ref !== null) {
                    setScreenSprite(ref);
                  }
                }}
                x={glassInfo.position.x}
                y={glassInfo.position.y}
                texture={glass}
                width={glassInfo.width}
                height={glassInfo.height}
              />
              {screenSprite && props.children(screenSprite, glassInfo)}
            </Container>
            <Sprite
              x={glassInfo.position.x}
              y={glassInfo.position.y}
              texture={screen}
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
