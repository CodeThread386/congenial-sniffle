import Navbar from "@/components/ui/Navbar";
import Hero from "@/components/ui/Hero";
import AboutUs from "@/components/ui/AboutUs";
import Timeline from "@/components/ui/Timeline";
import Testimonials from "@/components/ui/Testimonials";
import FAQ from "@/components/ui/FAQ";
import Photos from "@/components/ui/Photos";
import Footer from "@/components/ui/Footer";
import Image from "next/image";

export default function Home() {
  return (
    <main className="min-h-screen bg-[#03396c] overflow-x-hidden relative w-full max-w-full box-border">

      {/* Global Background Elements */}
      <div className="absolute inset-0 pointer-events-none z-0">

        {/* Background Pattern */}
        <div
          className="absolute inset-0 opacity-10 bg-repeat"
          style={{ backgroundImage: `url('/images/homepage-bg.png')`, backgroundSize: '80px 80px' }}
        />

        {/* Vertical Grid Lines */}
        <div
          className="absolute top-0 bottom-0 left-[5%] sm:left-[4%] md:left-[3%] lg:left-[2.5%] xl:left-[2.25%] w-[1px] opacity-60 sm:opacity-70 md:opacity-80"
          style={{
            backgroundImage: 'repeating-linear-gradient(to bottom, rgba(255, 255, 255, 0.8) 0px, rgba(255, 255, 255, 0.7) 6px, transparent 3px, transparent 12px)'
          }}
        ></div>

        <div
          className="absolute top-0 bottom-0 right-[5%] sm:right-[4%] md:right-[3%] lg:right-[2.5%] xl:right-[2.25%] w-[1px] opacity-60 sm:opacity-70 md:opacity-80"
          style={{
            backgroundImage: 'repeating-linear-gradient(to bottom, rgba(255, 255, 255, 0.8) 0px, rgba(255, 255, 255, 0.7) 6px, transparent 3px, transparent 12px)'
          }}
        ></div>

        {/* Horizontal Grid Lines */}
        <div
          className="absolute top-[0.6%] left-0 right-0 h-[1px] opacity-60 sm:opacity-70 md:opacity-80"
          style={{
            backgroundImage: 'repeating-linear-gradient(to right, rgba(255, 255, 255, 0.8) 0px, rgba(255, 255, 255, 0.8) 7px, transparent 7px, transparent 12px)'
          }}
        ></div>

        <div
          className="absolute bottom-[0.6%] left-0 right-0 h-[1px] opacity-60 sm:opacity-70 md:opacity-80"
          style={{
            backgroundImage: 'repeating-linear-gradient(to right, rgba(255, 255, 255, 0.8) 0px, rgba(255, 255, 255, 0.8) 7px, transparent 7px, transparent 12px)'
          }}
        ></div>
      </div>

      <Navbar />

      <div className="relative z-10 flex flex-col gap-0">
        <Hero />
        <AboutUs />
        <Timeline />
        <Testimonials />
        <FAQ />
        <Photos />
        <Footer />
      </div>

    </main>
  );
}
