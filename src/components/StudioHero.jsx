import Image from 'next/image';

export default function StudioHero() {
  return (
    <div className="relative min-h-[400px] w-full flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <Image
        src="/studio-bg.png" // Place your image in public/studio-bg.png
        alt="Studio Background"
        fill
        className="object-cover z-0"
        priority
      />
      {/* Overlay */}
      <div className="absolute inset-0  bg-opacity-50 z-10" />
      {/* Logo */}
      <div className="absolute top-6 left-6 z-20">
        <div className="bg-gray-100 px-6 py-2 rounded">
          <span className="font-bold text-2xl text-black">LOGO</span>
        </div>
      </div>
      {/* Centered Heading */}
      <div className="relative z-20 w-full flex flex-col items-center justify-center min-h-[400px]">
        <h1 className="text-white text-2xl md:text-4xl lg:text-5xl font-extrabold uppercase text-center tracking-tight px-4" style={{lineHeight: 1.1}}>
          Dolor sit amet consectetur. Quis adipiscing purus egestas aliquam viverra mi.<br />
          Dolor sit amet consectetur. Quis adipiscing
        </h1>
      </div>
    </div>
  );
}
