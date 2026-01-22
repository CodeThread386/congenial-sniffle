import Image from "next/image";

export default function Timeline() {
   return (
      <section className="relative w-full flex flex-col items-center -mt-[50px] sm:mt-0 pt-0 sm:pt-20 md:pt-24 lg:pt-30 xl:pt-[180px] mb-0 px-3 sm:px-4 md:px-6 lg:px-8">

         {/* Zig-zag Line at the top - matching side lines positioning */}
         <div className="absolute top-0 left-[5%] sm:left-[4%] md:left-[3%] lg:left-[2.5%] xl:left-[2.25%] right-[5%] sm:right-[4%] md:right-[3%] lg:right-[2.5%] xl:right-[2.25%] h-[600px] sm:h-[80px] md:h-[100px] lg:h-[110px] xl:h-[123px] pointer-events-none -z-10 opacity-60 sm:opacity-70 md:opacity-80">
            <Image
               src="/images/vector11.svg"
               alt="Zig-zag Line"
               fill
               className="object-contain object-top"
            />
         </div>

         <h2 className="font-angkor text-[36px] leading-[1.1] sm:text-[40px] md:text-[50px] lg:text-[60px] xl:text-[75px] text-white mb-6 sm:mb-8 md:mb-12 xl:mb-20 absolute xl:absolute top-[-5px] sm:top-[25px] md:top-[20px] left-[5%] sm:left-[9%] md:left-[7%] xl:left-[10%] z-10 text-left xl:text-left ml-[10px] sm:ml-0">
            TIMELINE
         </h2>

         <div className="relative w-full max-w-[1360px] flex flex-col items-center mt-[44px] sm:mt-12 md:mt-16 xl:mt-0">

            {/* Background Line/Path */}
            <div className="absolute top-[60px] sm:top-[70px] md:top-[80px] xl:top-[90px] left-0 w-full h-[250px] sm:h-[300px] md:h-[320px] xl:h-[480px] z-0 pointer-events-none opacity-50">
               <Image src="/images/vector12.svg" alt="Timeline Path" fill className="object-contain" />
            </div>

            {/* Day 1 */}
            <div className="relative z-10 w-full flex justify-center items-center mb-8 sm:mb-12">
               <div className="relative w-full max-w-[400px] sm:max-w-[450px] md:max-w-[500px] xl:max-w-[525px] aspect-[525/175] h-auto">
                  <Image src="/images/timeline-card1.svg" alt="Day 1 Event" fill className="object-contain" />
               </div>
               <div className="absolute left-[5%] sm:left-[8%] md:left-[10%] xl:left-[10%] text-white font-roboto-slab font-extrabold text-[18px] sm:text-[24px] md:text-[32px] xl:text-[40px]">
                  DAY 1
               </div>
            </div>

            {/* Day 2 - Flipped image visually or just positioned? Design says rotated 180deg. */}
            <div className="relative z-10 w-full flex justify-center items-center mb-8 sm:mb-12">
               <div className="relative w-full max-w-[400px] sm:max-w-[450px] md:max-w-[500px] xl:max-w-[525px] aspect-[525/175] h-auto rotate-180">
                  <Image src="/images/timeline-card2.svg" alt="Day 2 Event" fill className="object-contain" />
               </div>
               <div className="absolute right-[5%] sm:right-[8%] md:right-[10%] xl:right-[10%] text-white font-roboto-slab font-extrabold text-[18px] sm:text-[24px] md:text-[32px] xl:text-[40px]">
                  DAY 2
               </div>
            </div>

            {/* Day 3 */}
            <div className="relative z-10 w-full flex justify-center items-center">
               <div className="relative w-full max-w-[400px] sm:max-w-[450px] md:max-w-[500px] xl:max-w-[525px] aspect-[525/175] h-auto">
                  <Image src="/images/timeline-card3.svg" alt="Day 3 Event" fill className="object-contain" />
               </div>
               <div className="absolute left-[5%] sm:left-[8%] md:left-[10%] xl:left-[10%] text-white font-roboto-slab font-extrabold text-[18px] sm:text-[24px] md:text-[32px] xl:text-[40px]">
                  DAY 3
               </div>

            </div>

         </div>

      </section>
   );
}
