import {useLocalCtrl} from "@/app/hooks/tv/ctrl/useLocalCtrl";
import style from './nav.module.css';

export const Nav = () => {
  const ctrl = useLocalCtrl()
  return (
    <div className={style.nav}>
      <button
        type="button"
        onClick={() => {
          ctrl.turnOn();
          ctrl.gotoChannel(3);
        }}
      >
        On
      </button>
      <button
        type="button"
        onClick={() => {
          ctrl.turnOff();
        }}
      >
        Off
      </button>
    </div>
  )
}
