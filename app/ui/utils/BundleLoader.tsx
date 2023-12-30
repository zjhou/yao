import {useBundle} from "@/app/hooks/utils/useBundle";
import * as PIXI from "pixi.js";
import React from "react";
import {AssetsBundle} from "pixi.js";

type LoaderProps = {
  bundleId: string,
  assets: PIXI.AssetsBundle['assets'],
  children: (d: AssetsBundle ) => React.JSX.Element | React.JSX.Element[],
}

export const BundleLoader = (props: LoaderProps) => {
  const { data, isLoading } = useBundle(props.bundleId, props.assets);
  if (isLoading || data === undefined) {
    return null;
  }
  return (
    <>
      {props.children(data)}
    </>
  )
}
