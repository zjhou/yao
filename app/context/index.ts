import {Classic, Cream, Sun} from "@/app/lib/theme/colors";
import {createContext} from "react";
import {Theme} from "@/app/lib/theme/theme";
import {GlassInfo} from "@/app/ui/Bg";
import {Vec} from "@/app/lib/vec";

export const ThemeContext = createContext<Theme>(new Classic());
export const ScreenContext = createContext<GlassInfo>({
  width: 0,
  height: 0,
  position: new Vec(0, 0),
});
