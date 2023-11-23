import {TextStyle, Text} from "pixi.js";
import {useEffect, useState} from "react";
import {useApp} from "@pixi/react";

export const useTextWidth = (text: string, style: TextStyle) => {
  const [textWidth, setTextWidth] = useState(0);
  const app = useApp();

  useEffect(() => {
    const text = new Text('Your text here', style);
    app.stage.addChild(text);

    // 获取文本的宽度
    const textWidth = text.width;
    setTextWidth(textWidth);

    // 移除文本
    app.stage.removeChild(text);
  }, []);

  return textWidth;
}
