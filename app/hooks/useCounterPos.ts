import {useFullscreenSize} from "@/app/hooks/useFullscreenSize";
import {Vec} from "@/app/lib/vec";
import {useTextWidth} from "@/app/hooks/useTextWidth";
import {timer} from "@/app/lib/counter/timer";
import {useContext} from "react";
import {ThemeContext} from "@/app/context";

export const useCounterPos = () => {
    const { width, height } = useFullscreenSize();
    const theme = useContext(ThemeContext);
    const counterTextWidth = useTextWidth(timer().timeStr, theme.COUNTER_STYLE);
    return new Vec(width / 2 - counterTextWidth / 2, height - 50);
}
