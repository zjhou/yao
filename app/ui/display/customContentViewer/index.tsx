import {ContentMap, CustomContent} from "@/app/ui/display/customContentViewer/customContent";

type customContentViewerProps = {
  source: string
}
export const CustomContentViewer = (props: customContentViewerProps) => {
  const Content = ContentMap[props.source as CustomContent];
  if (Content === undefined) {
    return null;
  }

  return <Content />
}
