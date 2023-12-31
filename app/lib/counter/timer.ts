import {CounterConf} from "@/app/lib/counter/CounterConf";

const parseDate = (dateString: string) => {
  let time = Date.parse(dateString);
  if(!time){
    time = Date.parse(dateString.replace("T"," "));
    if(!time){
      const bound = dateString.indexOf('T');
      const dateData = dateString.slice(0, bound).split('-').map(Number);
      const timeData = dateString.slice(bound+1, -1).split(':').map(Number);

      const [year, month, day] = dateData;
      const [hour, min, sec] = timeData;

      time = Date.UTC(year, month - 1, day, hour, min, sec);
    }
  }
  return time;
}

export const timer = (digits = 10) => {
  const start = parseDate(CounterConf.start);
  const now = Date.now();
  const diff = now - start;
  const dayInMs = 1000 * 60 * 60 * 24;
  const days = Math.floor(diff / dayInMs);
  return {
    days,
    timeStr: `${(diff / dayInMs).toFixed(digits)} DAYS`,
  }
}

export const sec = () => {
  return new Date().getTime() / 1000;
}
