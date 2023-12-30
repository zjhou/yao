import * as PIXI from "pixi.js";
import useSWR from "swr";
import {createBundleFetcher} from "@/app/lib/fetcher/fetchPixiBundle";
import {AssetsBundle} from "pixi.js";

export const useBundle = (bundleId: string, assets: PIXI.AssetsBundle['assets']) => {
  const fetcher = createBundleFetcher(bundleId, assets);
  return useSWR<AssetsBundle>(bundleId, fetcher)
}
