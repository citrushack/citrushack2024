"use client";
import { useState, useEffect } from "react";
import { CONFIG } from "@/data/Config";
import Image from "next/image";
import flag from "@/public/svg/landing/flag.svg";

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
        DAYS:
          Math.floor(diff / (1000 * 60 * 60 * 24)) > 0
            ? Math.floor(diff / (1000 * 60 * 60 * 24))
            : 0,
        HOURS:
          Math.floor((diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)) > 0
            ? Math.floor((diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60))
            : 0,
        MINUTES:
          Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60)) > 0
            ? Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60))
            : 0,
        SECONDS:
          Math.floor((diff % (1000 * 60 * 60)) / 1000) % 60 > 0
            ? Math.floor((diff % (1000 * 60 * 60)) / 1000) % 60
            : 0,
      });
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="bg-black rounded-lg p-2 w-full">
      <div className="border-4 rounded-lg border-citrus-beige-100 p-2 font-racing text-citrus-beige-100 py-3">
        <div className="flex items-center justify-between">
          <Image src={flag} />
          <div className="text-2xl mx-2">April 5th - 7 th 2024</div>
          <Image src={flag} />
        </div>
        <div className="gap-1 grid">
          <div className="bg-citrus-beige-100 h-[1px] w-full" />
          <div className="bg-citrus-beige-100 h-[2px] w-full" />
          <div className="bg-citrus-beige-100 h-[3px] w-full" />
        </div>
        <div className="grid grid-cols-4">
          <div className="flex items-center justify-center">DAYS</div>
          <div className="flex items-center justify-center">HOURS</div>
          <div className="flex items-center justify-center">MINUTES</div>
          <div className="flex items-center justify-center">SECONDS</div>
        </div>
        <div className="bg-citrus-beige-100 h-[3px] w-full" />
        <div className="grid grid-cols-7 items-center justify-between w-full font-orbitron font-bold text-4xl px-4 py-2">
          {Object.entries(time).map(([text, value], index) => (
            <>
              <p
                className="text-citrus-red text-5xl flex items-center justify-center"
                key={index}
              >
                {parseInt(value / 10)}
                {value % 10}
              </p>
              {text !== "SECONDS" && (
                <p className="text-citrus-beige-100 flex items-center justify-center">
                  :
                </p>
              )}
            </>
          ))}
        </div>
        <div className="gap-1 grid">
          <div className="bg-citrus-beige-100 h-[3px] w-full" />
          <div className="bg-citrus-beige-100 h-[2px] w-full" />
          <div className="bg-citrus-beige-100 h-[1px] w-full" />
        </div>
      </div>
    </div>
  );
};

export default Countdown;
