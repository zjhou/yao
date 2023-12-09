import * as PIXI from 'pixi.js';

export const createBundleFetcher = (bundleId: string, assets: PIXI.AssetsBundle['assets']) => {
  PIXI.Assets.addBundle(bundleId, assets);
  return () => PIXI.Assets.loadBundle(bundleId);
}
