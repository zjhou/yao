import {Classic, Cream, Sun} from "@/app/lib/theme/colors";
import {createContext} from "react";
import {Theme} from "@/app/lib/theme/theme";
import {GlassInfo} from "@/app/ui/tv/Bg";
import {Vec} from "@/app/lib/vec";
import {TvCtrl} from "@/app/lib/tv";
import {type Socket} from "socket.io-client";
import {ClientToServerEvents, ServerToClientEvents} from "@/app/types/socketCustomTypes";

export const ThemeContext = createContext<Theme>(new Classic());
export const ScreenContext = createContext<GlassInfo>({
  width: 0,
  height: 0,
  position: new Vec(0, 0),
});

export const ConnectionContext = createContext<Socket<ServerToClientEvents, ClientToServerEvents> | undefined>({} as Socket);

export const TvContext = createContext<TvCtrl>({} as TvCtrl);
