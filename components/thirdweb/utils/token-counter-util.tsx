export type TimeLeft = {
    days: number;
    hours: number;
    minutes: number;
    seconds: number;
  };
  
  export const calculateTimeLeft = () => {
    let year = new Date('2023').getFullYear();
    let month = new Date('03').getMonth() + 1;
    let day = new Date('00').getDate() + 2;
  
    const difference = +new Date(`${year}-${month}-${day}`) - +new Date();
  
    let timeLeft: TimeLeft = {} as TimeLeft;
  
    if (difference > 0) {
      timeLeft = {
        days: Math.floor(difference / (1000 * 60 * 60 * 24)),
        hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
        minutes: Math.floor((difference / 1000 / 60) % 60),
        seconds: Math.floor((difference / 1000) % 60),
      };
    }
  
    return timeLeft;
  };