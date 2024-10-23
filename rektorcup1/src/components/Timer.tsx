import React, { useEffect, useState, useRef } from 'react';
import '../styles/Timer.css';

interface TimeLeft {
  days: string;
  hours: string;
  minutes: string;
  seconds: string;
}

const Timer: React.FC<{ className?: string }> = ({ className }) => {
  const [timeLeft, setTimeLeft] = useState<TimeLeft>({
    days: '00',
    hours: '00',
    minutes: '00',
    seconds: '00',
  });

  // Preferred Approach: Using `ReturnType<typeof setInterval>`
  const intervalRef = useRef<ReturnType<typeof setInterval> | null>(null);

  // Original Approach: Using `NodeJS.Timeout` (Uncomment if using Node types)
  // const intervalRef = useRef<NodeJS.Timeout | null>(null);
  // To use this approach, ensure `@types/node` is installed and replace the type above

  const startTimer = () => {
    const targetDate = new Date('September 2, 2024 00:07:00').getTime();

    intervalRef.current = setInterval(() => {
      const now = new Date().getTime();
      const distance = targetDate - now;

      if (distance < 0) {
        clearInterval(intervalRef.current!);
      } else {
        const days = Math.floor(distance / (1000 * 60 * 60 * 24));
        const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
        const seconds = Math.floor((distance % (1000 * 60)) / 1000);

        setTimeLeft({
          days: days < 10 ? '0' + days : days.toString(),
          hours: hours < 10 ? '0' + hours : hours.toString(),
          minutes: minutes < 10 ? '0' + minutes : minutes.toString(),
          seconds: seconds < 10 ? '0' + seconds : seconds.toString(),
        });
      }
    }, 1000);
  };

  useEffect(() => {
    startTimer();
    return () => {
      if (intervalRef.current) {
        clearInterval(intervalRef.current);
      }
    };
  }, []);

  return (
    <div className={`timer ${className}`}>
      <div className='timerLights timerBorder'></div>
      {/* <p className='oweekLogo'>REKTOR CUP 2025</p> */}
      <section className='containerT'>
        <p>{timeLeft.days}</p>
        <p className='descT'><small>Days</small></p>
      </section>
      <span className='dividerT'>:</span>
      <section className='containerT'>
        <p>{timeLeft.hours}</p>
        <p className='descT'><small>Hours</small></p>
      </section>
      <span className='dividerT'>:</span>
      <section className='containerT'>
        <p>{timeLeft.minutes}</p>
        <p className='descT'><small>Minutes</small></p>
      </section>
      <span className='dividerT'>:</span>
      <section className='containerT'>
        <p>{timeLeft.seconds}</p>
        <p className='descT'><small>Seconds</small></p>
      </section>
    </div>
  );
};

export default Timer;
