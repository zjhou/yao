import {BBTV} from "@/app/lib/tv/bbtvStation";
import {TVStation} from "@/app/types/tvTypes";

export const StationMap: {[key: number]: TVStation } = {
  [BBTV.Inst.channel.num]: BBTV.Inst,
}
