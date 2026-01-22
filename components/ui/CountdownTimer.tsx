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
    <div className="relative w-[140px] sm:w-[180px] md:w-[220px] lg:w-[260px] xl:w-[297%] h-[120px] sm:h-[200px] md:h-[250px] lg:h-[280px] xl:h-[320px] flex items-center justify-center font-sarpanch text-white z-30 px-2 sm:px-3 md:px-4 xl:px-0">
      {/* Background Banner with angled ends */}
      <div className="absolute inset-0 z-0">
        <Image src="/images/vector20.svg" alt="Timer Background" fill className="object-cover" sizes="100vw" />
      </div>

      {/* Timer Content */}
      <div className="relative z-10 flex items-center justify-center gap-2 sm:gap-3 md:gap-4 lg:gap-6 xl:gap-8 pb-2 pr-1 sm:pr-2 md:pr-4 xl:pr-8">
        <div className="flex flex-col items-center min-w-[50px] sm:min-w-[60px] md:min-w-[70px]">
          <span className="text-[24px] leading-[1] sm:text-[28px] md:text-[36px] lg:text-[42px] xl:text-[48px] font-bold">{timeLeft.months}</span>
          <span className="text-[9px] sm:text-[10px] md:text-[11px] xl:text-[12px] tracking-wider mt-1">MONTHS</span>
        </div>
        <div className="flex flex-col items-center min-w-[50px] sm:min-w-[60px] md:min-w-[70px]">
          <span className="text-[24px] leading-[1] sm:text-[28px] md:text-[36px] lg:text-[42px] xl:text-[48px] font-bold">{timeLeft.days}</span>
          <span className="text-[9px] sm:text-[10px] md:text-[11px] xl:text-[12px] tracking-wider mt-1">DAYS</span>
        </div>
        <div className="flex flex-col items-center min-w-[50px] sm:min-w-[60px] md:min-w-[70px]">
          <span className="text-[24px] leading-[1] sm:text-[28px] md:text-[36px] lg:text-[42px] xl:text-[48px] font-bold">{timeLeft.hours}</span>
          <span className="text-[9px] sm:text-[10px] md:text-[11px] xl:text-[12px] tracking-wider mt-1">HOURS</span>
        </div>
        <div className="flex flex-col items-center min-w-[50px] sm:min-w-[60px] md:min-w-[70px]">
          <span className="text-[24px] leading-[1] sm:text-[28px] md:text-[36px] lg:text-[42px] xl:text-[48px] font-bold">{timeLeft.minutes}</span>
          <span className="text-[9px] sm:text-[10px] md:text-[11px] xl:text-[12px] tracking-wider mt-1">MINUTES</span>
        </div>
      </div>
    </div>
  );
}
