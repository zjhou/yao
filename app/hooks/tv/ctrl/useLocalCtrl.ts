import {useContext} from "react";
import {TvContext} from "@/app/context";

export const useLocalCtrl = () => useContext(TvContext)
