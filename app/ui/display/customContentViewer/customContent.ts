import {Counter} from "@/app/ui/show/Counter";

export enum CustomContent {
  Counter= "counter"
}

export const ContentMap= {
  [CustomContent.Counter]: Counter
}
