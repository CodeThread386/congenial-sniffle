'use client';

import Image from "next/image";
import { useState, useEffect } from "react";

const testimonials = [
  { id: 1, name: "Full name", company: "Company Name" },
  { id: 2, name: "Full name", company: "Company Name" },
  { id: 3, name: "Full name", company: "Company Name" },
  { id: 4, name: "Full name", company: "Company Name" },
  { id: 5, name: "Full name", company: "Company Name" },
  { id: 6, name: "Full name", company: "Company Name" },
  { id: 7, name: "Full name", company: "Company Name" },
  { id: 8, name: "Full name", company: "Company Name" },
];

export default function Testimonials() {
  const [currentIndex, setCurrentIndex] = useState(0);

  // Create extended array for seamless circular loop (duplicate first card at the end)
  const extendedTestimonials = [...testimonials, testimonials[0]];
  const totalSlides = testimonials.length; // 8 slides

  // Auto-scroll functionality - only forward direction, one slide at a time
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => {
        // Move forward by 1, loop back to 0 after reaching the end
        return (prevIndex + 1) % totalSlides;
      });
    }, 4000); // 4 seconds

    return () => clearInterval(interval);
  }, [totalSlides]);

  const goToNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % totalSlides);
  };

  const goToPrev = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + totalSlides) % totalSlides);
  };

  return (
    <section className="relative w-full pb-0 flex flex-col items-center">

      {/* Separator - constrained to side lines but preserving unique slope */}
      <div className="absolute top-0 left-[2.25%] right-[2.25%] h-[123px] my-10 hidden xl:block pointer-events-none -z-10">
        <div className="absolute inset-0 w-full h-full rotate-180 scale-y-[-1]">
          <Image src="/images/vector11.svg" alt="Separator" fill className="object-contain" />
        </div>
      </div>

      <h2 className="font-angkor text-[75px] text-white mb-20 absolute top-[60px] right-[5%] z-10">
        TESTIMONIALS
      </h2>

      <div className="relative w-full max-w-[1400px] overflow-hidden mx-auto pt-[240px]">
        {/* Carousel Container */}
        <div
          className="flex transition-transform duration-500 ease-in-out"
          style={{
            transform: `translateX(-${currentIndex * 100}%)`
          }}
        >
          {extendedTestimonials.map((testimonial, index) => (
            <div
              key={`${testimonial.id}-${index}`}
              className="relative flex-shrink-0 w-full flex justify-center"
            >
              <div className="relative w-full max-w-[548px] min-h-[293px] bg-[#d9d9d9] rounded-sm p-6 sm:p-10 shadow-lg">
                <div className="absolute top-6 sm:top-10 left-6 sm:left-10 w-[50px] sm:w-[66px] h-[50px] sm:h-[66px] rounded-full overflow-hidden">
                  <Image src="/images/ellipse13.svg" alt="Avatar" fill className="object-cover" />
                </div>

                <div className="ml-[70px] sm:ml-[90px] mb-6">
                  <h4 className="font-poppins text-[18px] sm:text-[24px] text-black leading-none mb-2">{testimonial.name}</h4>
                  <p className="font-poppins text-[18px] sm:text-[24px] text-black leading-none">{testimonial.company}</p>
                </div>

                <div className="absolute right-4 sm:right-8 top-1/2 -translate-y-1/2 w-[24px] sm:w-[30px] h-[18px] sm:h-[22px]">
                  <Image src="/images/vector.svg" alt="Quote" fill className="object-contain" />
                </div>

                <div className="font-poppins text-[18px] sm:text-[24px] text-black mt-8">
                  <p>loremjhebgjhdsbkjdvkjdkvhbjdhj</p>
                  <p>hesbdjcsudyub</p>
                  <p>sdbjhbdjhyvhsd</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Navigation Arrows */}
        <div className="absolute left-0 right-0 flex justify-between px-20 top-[calc(240px+146.5px)] -translate-y-1/2 pointer-events-none z-20">
          <button
            onClick={goToPrev}
            className="relative w-[25px] h-[60px] rotate-180 pointer-events-auto cursor-pointer hover:opacity-80 transition-opacity"
            aria-label="Previous testimonial"
          >
            <Image src="/images/vector8.svg" alt="Previous" fill className="object-contain" />
          </button>
          <button
            onClick={goToNext}
            className="relative w-[25px] h-[60px] pointer-events-auto cursor-pointer hover:opacity-80 transition-opacity"
            aria-label="Next testimonial"
          >
            <Image src="/images/vector7.svg" alt="Next" fill className="object-contain" />
          </button>
        </div>
      </div>

      {/* Dot Indicators */}
      <div className="flex gap-3 mt-10 mb-0 justify-center">
        {testimonials.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentIndex(index)}
            className={`w-3 h-3 rounded-full transition-all duration-300 ${currentIndex === index
              ? 'bg-white opacity-100'
              : 'bg-white opacity-30 hover:opacity-50'
              }`}
            aria-label={`Go to testimonial ${index + 1}`}
          />
        ))}
      </div>

    </section>
  );
}
