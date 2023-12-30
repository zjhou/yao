'use client'

import {Tv} from "@/app/ui/tv/Tv";
import {TvState} from "@/app/ui/tv/State";
import {TvBase} from "@/app/ui/tv/TvBase";
import {useSearchParams} from "next/navigation";
import {RemoteCtrl} from "@/app/ui/tv/RemoteCtrl";

export default function App() {
  const param = useSearchParams();
  console.log(param);
  return (
    <TvBase>
      <TvState>
        <Tv />
        <RemoteCtrl />
      </TvState>
    </TvBase>
  );
}
