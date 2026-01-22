import Image from "next/image";

export default function Timeline() {
   return (
      <section className="relative w-full flex flex-col items-center pt-[180px] mb-0">
         
         {/* Zig-zag Line at the top - matching side lines positioning */}
         <div className="absolute top-0 left-[2.25%] right-[2.25%] h-[123px] hidden xl:block pointer-events-none -z-10">
            <Image
               src="/images/vector11.svg"
               alt="Zig-zag Line"
               fill
               className="object-contain object-top"
            />
         </div>

         <h2 className="font-angkor text-[75px] text-white mb-20 absolute top-[20px] left-[10%] z-10">
            TIMELINE
         </h2>

         <div className="relative w-full max-w-[1360px] flex flex-col items-center ">

            {/* Background Line/Path */}
            <div className="absolute top-[90px] left-0 w-full h-[350px] w-[1359px] z-0 pointer-events-none opacity-50">
               <Image src="/images/vector12.svg" alt="Timeline Path" fill className="object-contain" />
            </div>

            {/* Day 1 */}
            <div className="relative z-10 w-full flex justify-center items-center">
               <div className="relative w-full max-w-[525px] aspect-[525/175] h-auto">
                  <Image src="/images/timeline-card1.svg" alt="Day 1 Event" fill className="object-contain" />
               </div>
               <div className="absolute left-[10%] sm:left-[20%] text-white font-roboto-slab font-extrabold text-[24px] sm:text-[40px]">
                  DAY 1
               </div>
            </div>

            {/* Day 2 - Flipped image visually or just positioned? Design says rotated 180deg. */}
            <div className="relative z-10 w-full flex justify-center items-center">
               <div className="relative w-full max-w-[525px] aspect-[525/175] h-auto rotate-180">
                  <Image src="/images/timeline-card2.svg" alt="Day 2 Event" fill className="object-contain" />
               </div>
               <div className="absolute right-[10%] sm:right-[20%] text-white font-roboto-slab font-extrabold text-[24px] sm:text-[40px]">
                  DAY 2
               </div>
            </div>

            {/* Day 3 */}
            <div className="relative z-10 w-full flex justify-center items-center">
               <div className="relative w-full max-w-[525px] aspect-[525/175] h-auto">
                  <Image src="/images/timeline-card3.svg" alt="Day 3 Event" fill className="object-contain" />
               </div>
               <div className="absolute left-[10%] sm:left-[20%] text-white font-roboto-slab font-extrabold text-[24px] sm:text-[40px]">
                  DAY 3
               </div>

            </div>

         </div>

      </section>
   );
}
