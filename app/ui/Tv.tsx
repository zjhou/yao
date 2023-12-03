import React, {useEffect} from "react";
import {Container, Sprite} from "@pixi/react";
import {useScreenCenterPosForHuman} from "@/app/hooks/useScreenCenterPos";
import {Container as ContainerType} from "pixi.js";

const Tv = ({ children }: any) => {

  const {pos: refPos, ready } = useScreenCenterPosForHuman();
  const [container, setContainer] = React.useState<ContainerType>();

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
        x={-5}
        y={-20}
        ref={(ref) => {
          if (ref !== null) {
            setContainer(ref);
          }
        }}
      >
        {children(container)}
      </Container>
      <Sprite
        image="images/tv-glass.png"
        scale={{ x: 0.9, y: 0.9 }}
        anchor={{ x: 0.41, y:0.5 }}
        alpha={0.4}
        x={0}
        y={0}
      />
    </Container>
  )
}

export default Tv;
