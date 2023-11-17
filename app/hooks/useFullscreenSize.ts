import {useWindow} from "@/app/hooks/useWindow";

export const useFullscreenSize = () => {
    const win = useWindow();
    return {
        width: win?.innerWidth || 0,
        height: win?.innerHeight || 0
    }
}
