import {useWindow} from "@/app/hooks/useWindow";
import {useEffect, useState} from "react";

export const useFullscreenSize = () => {
    const win = useWindow();
    const [size, setSize] = useState({
        width: win?.innerWidth || 0,
        height: win?.innerHeight || 0
    });
    const resize = () => {
        const width = win?.innerWidth || 0;
        const height = win?.innerHeight || 0;
        setSize({width, height});
    }

    useEffect(() => {
        resize();
        window.addEventListener('resize', resize);
        return () => {
            window.removeEventListener('resize', resize);
        }
    }, []);

    return size;
}
