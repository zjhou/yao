import {Classic, Cream, Sun} from "@/app/lib/theme/colors";
import {createContext} from "react";
import {Theme} from "@/app/lib/theme/theme";

export const ThemeContext = createContext<Theme>(new Classic());
