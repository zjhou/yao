import {TextStyle, Text} from "pixi.js";
import {useEffect, useState} from "react";
import {useApp} from "@pixi/react";
import {CounterConf} from "@/app/lib/counter/CounterConf";

export const useTextWidth = (text: string, style: TextStyle) => {
  const [textWidth, setTextWidth] = useState(0);
  const app = useApp();

  useEffect(() => {
    const t = new Text(text, style);
    app.stage.addChild(t);

    // 获取文本的宽度
    const textWidth = t.width;
    setTextWidth(textWidth);

    // 移除文本
    app.stage.removeChild(t);
  }, []);

  return textWidth;
}
