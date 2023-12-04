import {useContext} from "react";
import {ScreenContext, ThemeContext} from "@/app/context";

export const useTvScreen = () => useContext(ScreenContext);
