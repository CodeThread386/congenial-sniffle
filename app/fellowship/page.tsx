import Navbar from "@/components/ui/Navbar";
import Image from "next/image";

export default function Fellowship() {
    return (
        <main className="min-h-screen bg-[#03396c] overflow-hidden relative text-white font-poppins selection:bg-white/20">

            {/* Global Background Elements */}
            <div className="absolute inset-0 pointer-events-none z-0">
                {/* Background Pattern */}
                <div
                    className="absolute inset-0 opacity-10 bg-repeat"
                    style={{ backgroundImage: `url('/images/homepage-bg.png')`, backgroundSize: '80px 80px' }}
                />

                {/* Vertical Grid Lines - aligned with design grid */}
                <div className="absolute top-0 right-0 h-full w-[1px] border-r border-white/10 hidden xl:block"></div>
            </div>

            <Navbar />

            <div className="relative z-10 pt-[150px] pb-20 px-6 md:px-16 max-w-[1400px] mx-auto">

                {/* Top Section */}
                <div className="flex flex-col lg:flex-row justify-between items-start gap-10 lg:gap-20 mb-20">
                    {/* Left Content */}
                    <div className="flex flex-col max-w-[600px] pt-10">
                        <h1 className="text-4xl md:text-[64px] font-bold leading-tight mb-8">
                            ITC 2026 FELLOWSHIP
                        </h1>

                        <h2 className="text-xl md:text-[32px] font-bold leading-snug mb-12 max-w-[500px]">
                            AN INITIATIVE TOWARDS INDIA’S SEMICONDUCTOR ECOSYSTEM
                        </h2>

                        <button className="border border-white hover:bg-white hover:text-[#03396c] text-white font-bold text-xl py-4 px-8 w-fit transition-all duration-300">
                            REGISTER NOW
                        </button>
                    </div>

                    {/* Right Content - Schematic Image */}
                    <div className="relative w-full lg:w-[600px] h-[400px] lg:h-[600px] opacity-80">
                        {/* Decorative line connector */}
                        <div className="hidden lg:block absolute top-[10%] -left-20 w-20 h-[1px] border-t border-dashed border-white/50"></div>

                        {/* Using a placeholder SVG or just CSS drawing to mimic the schematic if no image exists. 
                     Assuming 'vector20.svg' or similar might be it, but for now I'll create a visual placeholder 
                     that looks like technical drawing until user provides asset or I find it.
                     However, I see `arduino.svg` in the file list which is likely the schematic.
                 */}
                        <div className="w-full h-full relative">
                            {/* Trying to use an existing image if it seems right, otherwise fallback */}
                            <Image
                                src="/images/arduino.svg"
                                alt="Schematic Diagram"
                                fill
                                className="object-contain object-right-top"
                            />
                        </div>
                    </div>
                </div>

                {/* Support Details Section */}
                <div className="relative w-full">

                    {/* Header and Horizontal Dashed Line */}
                    <div className="relative mb-16">
                        <h2 className="text-4xl md:text-[56px] font-bold mb-4 inline-block bg-[#03396c] relative z-10 pr-6">
                            SUPPORT DETAILS
                        </h2>
                        {/* The dashed line that starts at the header, goes right and then down */}
                        <div className="absolute top-[50%] left-[450px] right-0 h-[1px] border-t border-dashed border-white/50 hidden xl:block"></div>
                        {/* Diagonal/Angled line part */}
                        <div className="absolute top-[50%] right-[-50px] w-[100px] h-[100px] border-l border-dashed border-white/50 transform rotate-45 origin-top-left hidden xl:block"></div>
                    </div>

                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-20">

                        {/* Local Fellows */}
                        <div className="relative">
                            <div className="border-b border-white/50 pb-2 mb-8 w-fit min-w-[300px]">
                                <h3 className="text-2xl font-bold text-white">Support for local fellows</h3>
                            </div>
                            <ul className="space-y-6 text-sm md:text-base text-gray-200">
                                <li className="flex gap-3">
                                    <span className="font-bold">1.</span>
                                    <p>Lorem ipsum dolor sit amet consectetur. Felis quis in molestie curabitur bibendum. Amet in arcu laoreet arcu risus hendrerit odio senectus sapien. Blandit sit at sagittis auctor est.</p>
                                </li>
                                <li className="flex gap-3">
                                    <span className="font-bold">2.</span>
                                    <p>Purus ut odio integer ac vel. Amet vitae sit volutpat quam pretium. Faucibus adipiscing magna mossa egestas in quis scelerisque n</p>
                                </li>
                                <li className="flex gap-3">
                                    <span className="font-bold">3.</span>
                                    <p>Lorem ipsum dolor sit amet consectetur. Felis quis in molestie curabitur bibendum. Amet in arcu laoreet arcu risus hendrerit odio senectus sapien. Blandit sit at sagittis auctor est.</p>
                                </li>
                                <li className="flex gap-3">
                                    <span className="font-bold">4.</span>
                                    <p>Purus ut odio integer ac vel. Amet vitae sit volutpat quam pretium. Faucibus adipiscing magna mossa egestas in quis scelerisque nibh n</p>
                                </li>
                                <li className="flex gap-3">
                                    <span className="font-bold">5.</span>
                                    <p>Lorem ipsum dolor sit amet consectetur. Felis quis in molestie curabitur bibendum. Amet in arcu laoreet arcu risus hendrerit odio senectus sapien. blandit sit at sagittis auctor est.</p>
                                </li>
                            </ul>
                        </div>

                        {/* Outstation Fellows */}
                        <div className="relative">
                            {/* Dashed line background element for this section from the top */}
                            <div className="absolute -top-[100px] -right-[100px] w-[1px] h-[800px] border-r border-dashed border-white/30 hidden xl:block"></div>

                            <div className="bg-[#034079] p-4 w-fit min-w-[350px] rounded-sm mb-8">
                                <h3 className="text-2xl font-bold text-white uppercase">Support for Outstation fellows</h3>
                            </div>

                            <ul className="space-y-6 text-sm md:text-base text-gray-200">
                                <li className="flex gap-3">
                                    <span className="font-bold">1.</span>
                                    <p>Lorem ipsum dolor sit amet consectetur. Felis quis in molestie curabitur bibendum. Amet in arcu laoreet arcu risus hendrerit odio senectus sapien. Blandit sit at sagittis auctor est.</p>
                                </li>
                                <li className="flex gap-3">
                                    <span className="font-bold">2.</span>
                                    <p>Purus ut odio integer ac vel. Amet vitae sit volutpat quam pretium. Faucibus adipiscing magna mossa egestas in quis scelerisque n</p>
                                </li>
                                <li className="flex gap-3">
                                    <span className="font-bold">3.</span>
                                    <p>Lorem ipsum dolor sit amet consectetur. Felis quis in molestie curabitur bibendum. Amet in arcu laoreet arcu risus hendrerit odio senectus sapien. Blandit sit at sagittis auctor est.</p>
                                </li>
                                <li className="flex gap-3">
                                    <span className="font-bold">4.</span>
                                    <p>Purus ut odio integer ac vel. Amet vitae sit volutpat quam pretium. Faucibus adipiscing magna mossa egestas in quis scelerisque nibh n</p>
                                </li>
                                <li className="flex gap-3">
                                    <span className="font-bold">5.</span>
                                    <p>Lorem ipsum dolor sit amet consectetur. Felis quis in molestie curabitur bibendum. Amet in arcu laoreet arcu risus hendrerit odio senectus sapien. blandit sit at sagittis auctor est.</p>
                                </li>
                            </ul>
                        </div>

                    </div>

                    {/* Bottom decorative line */}
                    <div className="absolute bottom-[-50px] right-[20%] w-[300px] h-[1px] border-t border-dashed border-white/30 hidden xl:block transform -rotate-45"></div>
                </div>

            </div>
        </main>
    );
}
