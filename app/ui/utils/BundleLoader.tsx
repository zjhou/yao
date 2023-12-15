import {useBundle} from "@/app/hooks/utils/useBundle";
import * as PIXI from "pixi.js";

type LoaderProps = {
  bundleId: string,
  assets: PIXI.AssetsBundle['assets'],
  children: (bundle: any) => React.ReactElement
}

export const BundleLoader = (props: LoaderProps) => {
  const { data, isLoading } = useBundle(props.bundleId, props.assets);
  if (isLoading) {
    return null;
  }
  return (
    <>
      {props.children(data)}
    </>
  )
}
