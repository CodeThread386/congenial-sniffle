import Image from "next/image";

export default function Hero() {
  return (
    <section className="relative w-full h-screen flex flex-col px-[2.25%] pt-[calc(2.25%+68px+20px)] pb-0 overflow-hidden">

      <div className="relative z-10 w-full h-full flex flex-col xl:flex-row items-start xl:items-start gap-8 xl:gap-12">

        {/* Left Section with ITC Logo and Title */}
        <div className="flex flex-col items-start flex-1 relative z-20 xl:min-w-[700px]">
          {/* ITC Logo - Smaller and more to the right */}
          <div className="relative w-[80px] h-[80px] xl:w-[100px] xl:h-[100px] ml-8 xl:ml-10 mb-4">
            <Image
              src="/itc-logo.svg"
              alt="ITC Logo"
              fill
              className="object-contain"
              priority
            />
          </div>

          {/* Title and Subtitle - Below ITC Logo */}
          <div className="text-white font-space-grotesk font-bold ml-8 xl:ml-10">
            {/* Main Title */}
            <div className="relative">
              <div className="text-[50px] xl:text-[65px] leading-tight">
                <p className="whitespace-nowrap">10th IEEE International</p>
                <p>Test Conference</p>
                <p>INDIA</p>
              </div>
            </div>

            {/* Subtitle */}
            <h3 className="font-space-grotesk font-bold text-[18px] xl:text-[24px] mt-4 xl:mt-5 max-w-[600px] leading-normal uppercase">
              AN INITIATIVE TOWARDS INDIA'S<br />
              SEMICONDUCTOR ECOSYSTEM
            </h3>
          </div>
        </div>

        {/* Circuit Image - Right side, extends from top to bottom line */}
        <div className="relative w-full xl:w-[48%] pointer-events-none flex-shrink-0 h-full overflow-hidden">
          <div className="relative w-full h-full">
            <Image
              src="/images/arduino.svg"
              alt="Circuit Illustration"
              fill
              className="object-contain object-bottom object-left"
              priority
            />
          </div>
        </div>
      </div>

      {/* Horizontal Line at the end of Hero Section */}
      {/* <div 
        className="absolute bottom-0 left-[2.25%] right-[2.25%] h-[2px] hidden xl:block"
        style={{
          backgroundImage: 'repeating-linear-gradient(to right, rgba(255, 255, 255, 1) 0px, rgba(255, 255, 255, 1) 10px, transparent 10px, transparent 20px)'
        }}
      ></div> */}

    </section>
  );
}
