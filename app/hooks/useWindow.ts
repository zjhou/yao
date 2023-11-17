import {useEffect, useState} from "react";

export const useWindow = () => {
  const [win, setWin] = useState<Window>();
  useEffect(() => {
    setWin(window);
  }, []);
  return win;
}
