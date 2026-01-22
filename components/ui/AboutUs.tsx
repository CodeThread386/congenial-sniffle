import Image from "next/image";
import CountdownTimer from "./CountdownTimer";

export default function AboutUs() {
  return (
    <section className="relative w-full pt-30 pb-[0px] px-[2.25%] text-white">

      {/* Zig-zag Line at the top - matching side lines positioning */}
      <div className="absolute top-0 left-[2.25%] right-[2.25%] h-[123px] hidden xl:block pointer-events-none -z-10">
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

      <h2 className="font-angkor text-[75px] text-white mb-20 absolute top-[20px] left-[10%] z-10">
        ABOUT US
      </h2>

      <div className="flex flex-col xl:flex-row gap-16 mt-8">
        <div className="flex-1">
          <h3 className="font-space-grotesk font-bold text-[48px] mb-8 ml-8 xl:ml-10">
            Welcome to ITC INDIA 2026
          </h3>

          <div className="font-poppins text-[18px] text-white/90 space-y-6 max-w-[600px] ml-8 xl:ml-10">
            <p>
              International Test Conference is the world's premier venue dedicated to the electronic test of devices, boards and systems-covering the complete cycle from design verification, design-for-test, design-for-manufacturing, silicon debug, manufacturing test, system test, diagnosis, reliability and failure analysis, and back to process and design improvement.
            </p>
            <p>
              At ITC India, design, test, and yield professionals can confront challenges faced by the industry, and learn how these challenges are being addressed by the combined efforts of academia, design tool and equipment suppliers, designers, and test engineers.
            </p>
          </div>
        </div>

        <div className="flex-1 relative">

          {/* Carousel Image - Made smaller */}
          <div className="relative w-full max-w-[500px] h-[400px] rounded-lg overflow-hidden border border-white/0 ml-8 xl:ml-12 mt-[78px]">
            <Image
              src="/images/carasol1.png"
              alt="Highlights"
              fill
              className="object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
