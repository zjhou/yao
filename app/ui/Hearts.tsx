import Heart from "@/app/ui/Heart";
import {stageSize} from "@/app/lib/stageConf";
import {useHeartSize} from "@/app/hooks/useHeartSize";
import {Container} from "@pixi/react";

const Hearts = () => {
  const size = useHeartSize(10);
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
