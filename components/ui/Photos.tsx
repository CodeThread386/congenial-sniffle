import Image from "next/image";

export default function Photos() {
  return (
    <section className="relative w-full -mt-[50px] sm:mt-0 pt-0 sm:pt-20 md:pt-24 lg:pt-30 pb-12 sm:pb-16 md:pb-20 px-3 sm:px-4 md:px-6 lg:px-8 xl:px-[86px] flex flex-col items-center">

      {/* Separator - constrained to side lines but preserving unique slope */}
      <div className="absolute top-0 left-[5%] sm:left-[4%] md:left-[3%] lg:left-[2.5%] xl:left-[2.25%] right-[5%] sm:right-[4%] md:right-[3%] lg:right-[2.5%] xl:right-[2.25%] h-[60px] sm:h-[80px] md:h-[100px] lg:h-[110px] xl:h-[123px] my-10 pointer-events-none -z-10 opacity-60 sm:opacity-70 md:opacity-80">
        <div className="absolute inset-0 w-full h-full rotate-180 scale-y-[-1]">
          <Image src="/images/vector11.svg" alt="Separator" fill className="object-contain" />
        </div>
      </div>
      <h2 className="font-angkor text-[28px] leading-[1.1] sm:text-[36px] md:text-[40px] lg:text-[50px] xl:text-[60px] text-white mb-6 sm:mb-8 md:mb-12 xl:mb-16 absolute xl:absolute top-[30px] sm:top-[65px] md:top-[70px] xl:top-[70px] right-[1%] sm:right-[1%] md:right-[6%] xl:right-[7%] z-10 text-right xl:text-right mr-[30px] sm:mr-0">
        PHOTOS SECTION
      </h2>

      <div className="flex flex-wrap justify-center gap-4 sm:gap-6 md:gap-8 xl:gap-10 pt-[44px] sm:pt-16 md:pt-20 xl:pt-[140px]">
        {[1, 2, 3].map((i) => (
          <div key={i} className="w-full sm:w-[280px] md:w-[320px] xl:w-[361px] h-[200px] sm:h-[220px] md:h-[240px] xl:h-[267px] bg-[#d9d9d9] rounded-lg">
            {/* Placeholder for Photo */}
          </div>
        ))}
      </div>

    </section>
  );
}
