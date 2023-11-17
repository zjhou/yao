import Heart from "@/app/ui/Heart";
import {useHeartSize} from "@/app/hooks/useHeartSize";
import {Container} from "@pixi/react";
import {useFullscreenSize} from "@/app/hooks/useFullscreenSize";

const Hearts = () => {
  const size = useHeartSize(10);
const stageSize = useFullscreenSize();
  return (
    <Container>
      <Heart
        x={stageSize.width / 2 + 7}
        y={stageSize.height / 2 - 200}
        size={size}
        color={0xff8888}
      />
      <Heart
        x={stageSize.width / 2}
        y={stageSize.height / 2 - 202}
        size={size + 1}
        color={0xfb5d63}
      />
    </Container>
  )
}

export default Hearts;
