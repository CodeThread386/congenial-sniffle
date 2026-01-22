import Image from "next/image";

export default function Photos() {
  return (
    <section className="relative w-full py-20 px-[86px] flex flex-col items-center">

      {/* Separator - constrained to side lines but preserving unique slope */}
      <div className="absolute top-0 left-[2.25%] right-[2.25%] h-[123px] my-10 hidden xl:block pointer-events-none -z-10">
        <div className="absolute inset-0 w-full h-full rotate-180 scale-y-[-1]">
          <Image src="/images/vector11.svg" alt="Separator" fill className="object-contain" />
        </div>
      </div>
      <h2 className="font-angkor text-[60px] leading-tight mb-16 absolute top-[70px] right-[7%] z-10">
        PHOTOS SECTION
      </h2>

      <div className="flex flex-wrap justify-center gap-10 pt-[140px]">
        {[1, 2, 3].map((i) => (
          <div key={i} className="w-[361px] h-[267px] bg-[#d9d9d9] rounded-lg">
             {/* Placeholder for Photo */}
          </div>
        ))}
      </div>

    </section>
  );
}
