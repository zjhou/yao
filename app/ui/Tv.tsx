import React from "react";
import {Container, Sprite} from "@pixi/react";
import {useScreenCenterPosForHuman} from "@/app/hooks/useScreenCenterPos";
import {Container as ContainerType, Sprite as SpriteType} from "pixi.js";

const Tv = ({ children }: any) => {

  const {pos: refPos, ready } = useScreenCenterPosForHuman();
  const [container, setContainer] = React.useState<ContainerType>();
  const [screenSprite, setScreenSprite] = React.useState<SpriteType>();

  if (!ready) {
    return null;
  }

  return (
    <Container
      x={refPos.x}
      y={refPos.y}
    >
      <Sprite
        image="images/tv-bg.png"
        scale={{ x: 0.9, y: 0.9 }}
        anchor={{ x: 0.41, y:0.5 }}
        x={0}
        y={0}
      />
      <Container
        ref={(ref) => {
          if (ref !== null) {
            setContainer(ref);
          }
        }}
      >
        {
          (container && screenSprite) ? children(container, screenSprite) : null
        }
        <Sprite
          ref={(ref) => {
            if (ref !== null) {
              setScreenSprite(ref);
            }
          }}
          image="images/tv-glass.png"
          scale={{ x: 0.9, y: 0.9 }}
          anchor={{ x: 0.41, y:0.5 }}
          alpha={0.8}
          x={0}
          y={0}
        />
      </Container>
    </Container>
  )
}

export default Tv;
