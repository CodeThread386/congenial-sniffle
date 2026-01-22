'use client';

import { useState, useEffect } from 'react';
import Image from 'next/image';

export default function CountdownTimer() {
  const [timeLeft, setTimeLeft] = useState({
    months: 0,
    days: 0,
    hours: 0,
    minutes: 0,
  });

  useEffect(() => {
    const targetDate = new Date('2026-07-19T00:00:00').getTime();

    const updateTimer = () => {
      const now = new Date().getTime();
      const difference = targetDate - now;

      if (difference > 0) {
        // Calculate total milliseconds
        const totalMs = difference;

        // Calculate months (using average days per month)
        const totalDays = Math.floor(totalMs / (1000 * 60 * 60 * 24));
        const months = Math.floor(totalDays / 30);
        const days = totalDays % 30;

        // Calculate hours and minutes from remaining time
        const remainingMs = totalMs % (1000 * 60 * 60 * 24);
        const hours = Math.floor(remainingMs / (1000 * 60 * 60));
        const minutesRemainder = remainingMs % (1000 * 60 * 60);
        const minutes = Math.floor(minutesRemainder / (1000 * 60));

        setTimeLeft({
          months: Math.max(0, months),
          days: Math.max(0, days),
          hours: Math.max(0, hours),
          minutes: Math.max(0, minutes)
        });
      } else {
        setTimeLeft({ months: 0, days: 0, hours: 0, minutes: 0 });
      }
    };

    updateTimer();
    const interval = setInterval(updateTimer, 1000); // Update every second

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="relative w-[297%] h-[320px] hidden xl:flex items-center justify-center font-sarpanch text-white z-30">
      {/* Background Banner with angled ends */}
      <div className="absolute inset-0 z-0">
        <Image src="/images/vector20.svg" alt="Timer Background" fill className="object-cover" />
      </div>

      {/* Timer Content */}
      <div className="relative z-10 flex items-center justify-center gap-8 pb-2 pr-8">
        <div className="flex flex-col items-center">
          <span className="text-[48px] leading-none font-bold">{timeLeft.months}</span>
          <span className="text-[12px] tracking-wider">MONTHS</span>
        </div>
        <div className="flex flex-col items-center">
          <span className="text-[48px] leading-none font-bold">{timeLeft.days}</span>
          <span className="text-[12px] tracking-wider">DAYS</span>
        </div>
        <div className="flex flex-col items-center">
          <span className="text-[48px] leading-none font-bold">{timeLeft.hours}</span>
          <span className="text-[12px] tracking-wider">HOURS</span>
        </div>
        <div className="flex flex-col items-center">
          <span className="text-[48px] leading-none font-bold">{timeLeft.minutes}</span>
          <span className="text-[12px] tracking-wider">MINUTES</span>
        </div>
      </div>
    </div>
  );
}
