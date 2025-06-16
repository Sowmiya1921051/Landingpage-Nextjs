import Image from 'next/image';

export default function HeroBanner() {
  return (
    <div className="relative min-h-screen w-full flex items-center justify-center overflow-hidden mt-10">
      {/* Background Image */}
      <Image
        src="/HeroBanner.png" // Place your image in public/motorcycle-bg.jpg
        alt="Motorcycle Scene"
        fill
        className="object-cover z-0"
        priority
      />
      {/* Overlay */}
      <div className="absolute inset-0  bg-opacity-60 z-10" />
      {/* Content */}
      <div className="relative z-20 w-full flex flex-col items-center">
        {/* Logo */}
        <div className="absolute top-8 left-8">
          <div className="bg-gray-100 px-8 py-3 rounded">
            <span className="font-bold text-2xl text-black">LOGO</span>
          </div>
        </div>
        {/* Main Content */}
        <div className="flex flex-col items-center justify-center min-h-screen w-full px-4">
          <h1 className="text-white text-3xl md:text-5xl lg:text-6xl font-extrabold uppercase text-center tracking-tight mb-8" style={{lineHeight: 1.1}}>
            Lorem ipsum dolor sit amet consectetur. Quis adipiscing purus egestas aliquam viverra mi.
          </h1>
          <div className="max-w-3xl w-full flex flex-col gap-6">
            <p className="text-white text-base md:text-lg text-center">
              Lorem ipsum dolor sit amet consectetur. Mattis justo euismod volutpat vestibulum nisi at ac risus amet. Mi accumsan sagittis justo pellentesque id sed. Id tellus id luctus id. At quis nunc libero urna arcu vulputate sed ut. Nisl porta massa diam condimentum nulla quam.
            </p>
            <p className="text-white text-base md:text-lg text-center">
              Lorem ipsum dolor sit amet consectetur. Volutpat in dictum nec condimentum ultrices non. Ornare semper in tincidunt pellentesque cras mauris in vitae. At viverra quis eu malesuada vel et porttitor. Nulla luctus quam lacus lacus non at. Tincidunt morbi feugiat a pulvinar euismod natoque nulla ligula. Tincidunt cursus vitae leo.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
} 