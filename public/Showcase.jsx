import Image from 'next/image';

export default function Showcase() {
  return (
    <div className="min-h-screen bg-white flex flex-col justify-between">
      {/* Top Link */}
      <div className="pt-6 pl-8">
        <a href="#" className="text-primary font-inter font-semibold text-[18px] hover:underline">
          Lorem ipsum dolor sit
        </a>
      </div>

      {/* Main Content */}
      <div className="flex flex-col md:flex-row flex-1 px-8 py-6 gap-8">
        {/* Left Side */}
        <div className="flex-1 flex flex-col justify-center">
          <h1 className="font-robotoCondensed text-[32px] md:text-[36px] font-bold text-heading tracking-tightest mb-2 leading-tight uppercase">
            Lorem Ipsum<br />Dolor Sit Amet
          </h1>
          <p className="font-inter text-[16px] text-[#222] mb-4 max-w-lg">
            Lorem ipsum dolor sit amet consectetur. Amet sodales sociis facilisis donec dui. Mi porttitor ut aliquam mattis maecenas eget integer in nam. Non nisl iaculis at felis aliquet. Hendrerit tellus at purus lectus.
          </p>
          {/* Thumbnails and Descriptions */}
          <div className="flex flex-col gap-4 mb-6">
            <div className="flex gap-3">
              <Image src="/thumb1.png" alt="thumb1" width={70} height={70} className="rounded object-cover" />
              <div className="font-inter text-[15px] text-[#222]">
                Lorem ipsum dolor sit amet consectetur. Vestibulum ornare fermentum feugiat.
              </div>
            </div>
            <div className="flex gap-3">
              <Image src="/thumb2.png" alt="thumb2" width={70} height={70} className="rounded object-cover" />
              <div className="font-inter text-[15px] text-[#222]">
                Lorem ipsum dolor sit amet consectetur. Dictum at ac tellus faucibus urna ullamcorper id dui cursus. Venenatis.
              </div>
            </div>
            <div className="flex gap-3">
              <Image src="/thumb3.png" alt="thumb3" width={70} height={70} className="rounded object-cover" />
              <div className="font-inter text-[15px] text-[#222]">
                Lorem ipsum dolor sit amet consectetur. Vestibulum nisi morbi metus gravida eu facilisi enim. Ut diam auctor tortor tincidunt.
              </div>
            </div>
          </div>
        </div>
        {/* Right Side - Main Image */}
        <div className="flex-1 flex items-center justify-center relative">
          <div className="w-full h-[350px] md:h-[420px] rounded-b-[20px] overflow-hidden shadow-lg border border-gray-100 relative">
            {/* Decorative notches */}
            <div className="absolute -top-3 left-1/2 -translate-x-1/2 flex gap-2 z-10">
              <div className="w-6 h-3 bg-white rounded-b-full shadow" />
              <div className="w-6 h-3 bg-white rounded-b-full shadow" />
              <div className="w-6 h-3 bg-white rounded-b-full shadow" />
            </div>
            <Image
              src="/motorcycles.png"
              alt="Motorcycles"
              fill
              className="object-cover"
              priority
            />
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="w-full px-8 pb-6">
        <div className="flex items-center gap-4">
          <button className="bg-primary hover:bg-secondary text-white font-inter font-semibold text-[16px] px-6 py-2 rounded flex items-center gap-2 shadow">
            Lorem Ipsum <span>→</span>
          </button>
          <div className="flex items-center gap-2 text-primary font-inter font-semibold text-[16px]">
            <svg width="20" height="20" fill="none" viewBox="0 0 24 24"><path d="M6.62 10.79a15.053 15.053 0 006.59 6.59l2.2-2.2a1 1 0 011.01-.24c1.12.37 2.33.57 3.58.57a1 1 0 011 1V20a1 1 0 01-1 1C10.07 21 3 13.93 3 5a1 1 0 011-1h3.5a1 1 0 011 1c0 1.25.2 2.46.57 3.58a1 1 0 01-.24 1.01l-2.2 2.2z" fill="currentColor"/></svg>
            123456789
          </div>
        </div>
        {/* Gradient border */}
        <div className="h-1 w-full mt-4 rounded bg-gradient-to-r from-primary via-[#00FFB2] to-[#5B5BFF]" />
      </div>
    </div>
  );
}
