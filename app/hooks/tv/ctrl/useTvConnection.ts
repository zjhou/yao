import {useContext} from "react";
import {ConnectionContext} from "@/app/context";

export const useTvConnection = () => useContext(ConnectionContext);
