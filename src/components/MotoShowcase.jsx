import Image from 'next/image';

export default function MotoShowcase() {
  return (
    <div className="bg-[#f7fafd] py-16">
      {/* Top Section */}
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 px-4">
        {/* Left Text Block */}
        <div className="flex flex-col justify-center">
          <span className="text-xs text-gray-500 font-semibold mb-2">NO LIMITS</span>
          <h2 className="text-3xl font-extrabold text-[#222] mb-4 leading-snug">
            LOREM IPSUM DOLOR SIT AMET
          </h2>
          <p className="text-[#222] mb-6">
            Lorem ipsum dolor sit amet consectetur. Nisl faucibus vitae porttitor pharetra tempor quis arcu. Ipsum nullam.
          </p>
          <button className="bg-[#1959AC] hover:bg-[#0546D2] text-white font-semibold px-6 py-2 rounded shadow flex items-center gap-2 w-fit">
            Lorem Ipsum <span>→</span>
          </button>
        </div>

        {/* Right Masonry Image Grid */}
        <div className="grid grid-cols-4 grid-rows-4 gap-2 h-[340px]">
          <div className="col-span-2 row-span-1">
            <Image src="/bike1.png" alt="bike1" width={200} height={100} className="w-full h-full object-cover rounded" />
          </div>
          <div className="col-span-2 row-span-1">
            <Image src="/bike2.png" alt="bike2" width={200} height={100} className="w-full h-full object-cover rounded" />
          </div>
          <div className="col-span-2 row-span-2">
            <Image src="/bike3.png" alt="bike3" width={200} height={220} className="w-full h-full object-cover rounded" />
          </div>
          <div className="col-span-2 row-span-2">
            <Image src="/bike4.png" alt="bike4" width={400} height={220} className="w-full h-full object-cover rounded" />
          </div>
          <div className="col-span-2 row-span-1">
            <Image src="/bike5.png" alt="bike5" width={200} height={100} className="w-full h-full object-cover rounded" />
          </div>
          <div className="col-span-2 row-span-1">
            <Image src="/bike6.png" alt="bike6" width={200} height={100} className="w-full h-full object-cover rounded" />
          </div>
        </div>
      </div>

      {/* Bottom Section */}
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8 px-4 mt-24 items-center bg-white rounded-xl shadow-md py-10 relative overflow-hidden">
        {/* Decorative SVG Lines */}
        <div className="absolute left-0 top-0 w-full h-full pointer-events-none z-0">
          <img
            src="/Line6.svg"
            alt="Lines"
            className="w-full h-full object-cover opacity-10"
            draggable="false"
          />
        </div>

        {/* Left Image */}
        <div className="relative z-10">
          <Image src="/bike7.png" alt="bike7" width={500} height={350} className="w-full h-64 object-cover rounded" />
        </div>

        {/* Right Text Content */}
        <div className="relative z-10 flex flex-col justify-center">
          <a href="#" className="text-[#1959AC] font-semibold text-lg mb-2">Lorem ipsum</a>
          <h3 className="text-3xl font-extrabold text-[#222] mb-4">
            <span className="text-[#1959AC]">LOREM</span> IPSUM DOLOR SIT AMET CONSECTETUR. ENIM DONEC.
          </h3>
          <p className="text-[#222] mb-6">
            Lorem ipsum dolor sit amet consectetur. Vel pellentesque odio enim amet non.
          </p>

          <div className="grid grid-cols-2 gap-2 text-sm text-[#222] mb-6">
            <span>Lorem ipsum</span>
            <span>Lorem ipsum</span>
            <span>Lorem ipsum</span>
            <span>Lorem ipsum</span>
            <span>Lorem ipsum</span>
            <span>Lorem ipsum</span>
          </div>

          <button className="bg-[#1959AC] hover:bg-[#0546D2] text-white font-semibold px-6 py-2 rounded shadow flex items-center gap-2 w-fit">
            Lorem Ipsum <span>→</span>
          </button>
        </div>
      </div>
    </div>
  );
}
