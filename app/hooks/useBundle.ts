import * as PIXI from "pixi.js";
import useSWR from "swr";
import {createBundleFetcher} from "@/app/lib/fetcher/fetchPixiBundle";

export const useBundle = (bundleId: string, assets: PIXI.AssetsBundle['assets']) => {
  const fetcher = createBundleFetcher(bundleId, assets);
  return useSWR(bundleId, fetcher)
}
