import Link from "next/link";
import Image from "next/image";

export default function Footer() {
  return (
    <footer className="relative w-full pt-12 sm:pt-16 md:pt-20 pb-12 sm:pb-16 md:pb-20 px-4 sm:px-6 md:px-8 xl:px-[86px] text-white">

      {/* Divider Line - matching top line format */}
      <div
        className="absolute top-0 left-[5%] sm:left-[4%] md:left-[3%] lg:left-[2.5%] xl:left-[2.25%] right-[5%] sm:right-[4%] md:right-[3%] lg:right-[2.5%] xl:right-[2.25%] h-[1px] my-10 opacity-60 sm:opacity-70 md:opacity-80"
        style={{
          backgroundImage: 'repeating-linear-gradient(to right, rgba(255, 255, 255, 0.8) 0px, rgba(255, 255, 255, 0.8) 7px, transparent 7px, transparent 12px)'
        }}
      ></div>

      {/* Newsletter Section */}
      <div className="relative w-full max-w-[1027px] mx-auto min-h-[150px] sm:min-h-[170px] md:min-h-[191px] bg-[#fcfcfc] rounded mb-12 sm:mb-16 md:mb-20 flex flex-col sm:flex-row items-center justify-center sm:justify-between px-4 sm:px-6 md:px-10 py-6 sm:py-0">
        <div className="flex-1 mb-4 sm:mb-0">
          <h3 className="font-roboto-slab font-semibold text-[24px] sm:text-[30px] md:text-[36px] xl:text-[40px] text-[#022241] text-center sm:text-left">
            Subscribe to our <br /> Newsletter
          </h3>
        </div>

        <div className="relative w-full sm:w-auto">
          {/* Decorator pill? */}
          {/* Actual input field logic inspired by design */}
          <div className="flex flex-col sm:flex-row items-center gap-3 sm:gap-4">
            <input
              type="email"
              placeholder="Email Address"
              className="w-full sm:w-[280px] md:w-[323px] h-[36px] sm:h-[38px] rounded-[40px] px-4 bg-[#011f4b] text-white placeholder-white/50 border-none outline-none text-[14px] sm:text-[18px] md:text-[20px] xl:text-[22px]"
            />
            <button className="w-full sm:w-[120px] md:w-[136px] h-[36px] sm:h-[38px] bg-white text-black rounded-[40px] font-poppins text-[16px] sm:text-[18px] md:text-[20px] xl:text-[22px] shadow-sm flex items-center justify-center">
              Subscribe
            </button>
          </div>
        </div>
      </div>

      {/* Footer Links Grid */}
      <div className="flex flex-col sm:flex-row sm:flex-wrap xl:flex-nowrap justify-between gap-6 sm:gap-8 xl:gap-10 border-t border-white/20 pt-6 sm:pt-8 md:pt-10 relative">

        {/* Email */}
        <div className="w-full sm:w-[45%] xl:w-auto">
          <h4 className="font-inter text-[16px] sm:text-[18px] xl:text-[20px] mb-3 sm:mb-4">Email ID</h4>
          <a href="mailto:info@itctestweekindia.org" className="opacity-80 hover:opacity-100 text-[14px] sm:text-[16px] md:text-[18px] xl:text-[20px] break-all">info@itctestweekindia.org</a>
        </div>

        {/* Submissions */}
        <div className="font-poppins text-[16px] sm:text-[18px] md:text-[20px] xl:text-[22px] w-full sm:w-[45%] xl:w-auto">
          <h4 className="mb-3 sm:mb-4">Submissions</h4>
          <ul className="space-y-2">
            <li><Link href="https://itctestweekindia.org/CFP" className="underline decoration-solid">Call for Papers</Link></li>
          </ul>
        </div>

        {/* Conference */}
        <div className="font-poppins text-[16px] sm:text-[18px] md:text-[20px] xl:text-[22px] w-full sm:w-[45%] xl:w-auto">
          <h4 className="mb-3 sm:mb-4">Conference</h4>
          <ul className="space-y-2">
            <li><Link href="https://itctestweekindia.org/" className="underline decoration-solid">About Us</Link></li>
            <li><Link href="https://itctestweekindia.org/" className="underline decoration-solid">Privacy Policy</Link></li>
            <li><Link href="https://itctestweekindia.org/" className="underline decoration-solid">Refund Policy</Link></li>
            <li><Link href="https://itctestweekindia.org/" className="underline decoration-solid">Terms & Conditions</Link></li>
            <li><Link href="https://itctestweekindia.org/contactus" className="underline decoration-solid">Contact Us</Link></li>
          </ul>
        </div>

        {/* Location */}
        <div className="font-poppins text-[16px] sm:text-[18px] md:text-[20px] xl:text-[22px] w-full sm:w-[45%] xl:w-auto">
          <h4 className="mb-3 sm:mb-4">Conference Location</h4>
          <Link href="https://maps.app.goo.gl/Su9eU1hLBaaRZcKEA" className="underline decoration-solid">
            Radisson Blu, Bengaluru
          </Link>
        </div>
      </div>

      <div className="text-center font-poppins text-[14px] sm:text-[16px] md:text-[18px] xl:text-[22px] mt-8 sm:mt-10">
        2026 © ITC Test Week India | All rights reserved
      </div>
    </footer>
  );
}
