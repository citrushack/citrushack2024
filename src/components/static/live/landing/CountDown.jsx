"use client";
import { useState, useEffect } from "react";
import { CONFIG } from "@/data/Config";

const Countdown = () => {
  const [time, setTime] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });

  useEffect(() => {
    const interval = setInterval(() => {
      const diff = CONFIG.date - new Date();

      setTime({
        days:
          Math.floor(diff / (1000 * 60 * 60 * 24)) > 0
            ? Math.floor(diff / (1000 * 60 * 60 * 24))
            : 0,
        hrs:
          Math.floor((diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)) > 0
            ? Math.floor((diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60))
            : 0,
        min:
          Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60)) > 0
            ? Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60))
            : 0,
        sec:
          Math.floor((diff % (1000 * 60 * 60)) / 1000) % 60 > 0
            ? Math.floor((diff % (1000 * 60 * 60)) / 1000) % 60
            : 0,
      });
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="grid grid-cols-7 text-2xl lg:text-5xl items-start justify-center">
      {Object.entries(time).map(([text, value], index) => (
        <>
          <div className="flex flex-col items-center justify-center gap-2">
            <p className="" key={index}>
              {parseInt(value / 10)}
              {value % 10}
            </p>
            <p className="text-sm lg:text-xl" key={index}>
              {text}
            </p>
          </div>
          <p className="last:hidden flex items-center justify-center">:</p>
        </>
      ))}
    </div>
  );
};

export default Countdown;
