'use client'

import Heart from "@/app/ui/Heart";
import {Stage} from "@pixi/react";
import {stageConf, stageSize} from "@/app/lib/stageConf";
import Hearts from "@/app/ui/Hearts";

export default function Home() {
  // var size = useHeartSize(10);
  return (
      <Stage
        width={stageSize.width}
        height={stageSize.height}
        options={stageConf}
      >
        <Hearts />
      </Stage>
  );
}
