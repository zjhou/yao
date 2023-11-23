import {useFullscreenSize} from "@/app/hooks/useFullscreenSize";
import {Vec} from "@/app/lib/vec";
import {useTextWidth} from "@/app/hooks/useTextWidth";
import {timer} from "@/app/lib/counter/timer";
import {CounterConf} from "@/app/lib/counter/CounterConf";

export const useCounterPos = () => {
    const { width, height } = useFullscreenSize();
    const counterTextWidth = useTextWidth(timer().timeStr, CounterConf.textStyle);
    return new Vec(width / 2 - counterTextWidth / 2, height - 100);
}
