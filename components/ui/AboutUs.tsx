import Image from "next/image";
import CountdownTimer from "./CountdownTimer";

export default function AboutUs() {
  return (
    <section className="relative w-full -mt-[50px] sm:mt-0 pt-0 sm:pt-20 md:pt-24 lg:pt-30 pb-[0px] px-3 sm:px-4 md:px-6 lg:px-8 xl:px-[2.25%] text-white">

      {/* Zig-zag Line at the top - matching side lines positioning */}
      <div className="absolute top-0 left-[5%] sm:left-[4%] md:left-[3%] lg:left-[2.5%] xl:left-[2.25%] right-[5%] sm:right-[4%] md:right-[3%] lg:right-[2.5%] xl:right-[2.25%] h-[60px] sm:h-[80px] md:h-[100px] lg:h-[110px] xl:h-[123px] pointer-events-none -z-10 opacity-60 sm:opacity-70 md:opacity-80">
        <Image
          src="/images/vector9.svg"
          alt="Zig-zag Line"
          fill
          className="object-contain object-top"
        />
      </div>

      {/* Countdown Timer - positioned to fit into zig-zag line on the right */}
      <div className="absolute top-[-15%] left-[32%] hidden xl:block z-20">
        <CountdownTimer />
      </div>

      {/* Mobile Countdown Timer - positioned on right side of zig-zag line */}
      <div className="absolute top-[-50px] right-[5%] xl:hidden z-20">
        <CountdownTimer />
      </div>

      {/* Mobile "ABOUT US" heading - positioned on left side of zig-zag line */}
      <h2 className="font-angkor text-[36px] leading-[1.1] sm:text-[40px] md:text-[50px] lg:text-[60px] xl:text-[75px] text-white mb-6 sm:mb-8 md:mb-12 xl:mb-20 absolute xl:absolute top-[-5px] sm:top-[25px] md:top-[20px] left-[5%] sm:left-[9%] md:left-[7%] xl:left-[10%] z-10 text-left xl:text-left ml-[10px] sm:ml-0">
        ABOUT US
      </h2>

      <div className="flex flex-col xl:flex-row gap-6 sm:gap-8 md:gap-12 xl:gap-16 mt-[44px] sm:mt-12 md:mt-16 xl:mt-8">
        <div className="flex-1">
          <h3 className="font-space-grotesk font-bold text-[28px] leading-[1.2] sm:text-[32px] md:text-[36px] lg:text-[42px] xl:text-[48px] mb-4 sm:mb-6 md:mb-8 text-center md:text-left ml-0 md:ml-2 lg:ml-4 xl:ml-10">
            Welcome to ITC INDIA 2026
          </h3>

          <div className="font-poppins text-[20px] leading-[1.6] sm:text-[25px] md:text-[17px] lg:text-[18px] xl:text-[18px] text-white/90 space-y-3 sm:space-y-4 md:space-y-6 max-w-[600px] text-center md:text-left mx-auto md:mx-0 pb-8 sm:pb-10 md:pb-12">
            <p>
              International Test Conference is the world's premier venue dedicated to the electronic test of devices, boards and systems-covering the complete cycle from design verification, design-for-test, design-for-manufacturing, silicon debug, manufacturing test, system test, diagnosis, reliability and failure analysis, and back to process and design improvement.
            </p>
            <p>
              At ITC India, design, test, and yield professionals can confront challenges faced by the industry, and learn how these challenges are being addressed by the combined efforts of academia, design tool and equipment suppliers, designers, and test engineers.
            </p>
          </div>
        </div>

        <div className="flex-1 relative hidden md:block">

          {/* Carousel Image - Made smaller - Hidden on mobile */}
          <div className="relative w-full max-w-[500px] h-[300px] md:h-[350px] lg:h-[400px] xl:h-[400px] rounded-lg overflow-hidden border border-white/0 ml-4 md:ml-6 xl:ml-12 mt-8 md:mt-12 xl:mt-[78px] mx-auto xl:mx-0">
            <Image
              src="/images/carasol1.png"
              alt="Highlights"
              fill
              className="object-cover"
              sizes="(max-width: 1024px) 50vw, 500px"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
