'use client'
import Image from 'next/image'

export default function Hero() {
  return (
    <div className="min-h-screen bg-white flex flex-col relative overflow-hidden">
      {/* Navbar */}
      <nav className="flex items-center justify-between px-8 py-4 z-20 relative">
        {/* Logo */}
        <div className="bg-gray-200 px-6 py-2 rounded">
          <span className="font-bold text-2xl">LOGO</span>
        </div>

        {/* Menu */}
        <div className="flex items-center gap-8">
          <a href="#" className="text-[#0546D2] hover:text-[#1959AC]">Lorem Ipsum <span>▼</span></a>
          <a href="#" className="text-[#0546D2] hover:text-[#1959AC]">Lorem Ipsum <span>▼</span></a>
          <a href="#" className="text-[#0546D2] hover:text-[#1959AC]">Lorem Ipsum <span>▼</span></a>
        </div>

        {/* Sign In */}
        <button className="bg-white border px-4 py-2 rounded shadow text-sm font-medium">
          Sign In
        </button>
      </nav>

      {/* Hero Section */}
      <div className="flex flex-1 flex-col md:flex-row">
        {/* Left Side */}
        <div className="flex-1 flex flex-col justify-center px-8 md:pl-16 py-12 z-10">
          <h1 className="text-[42px] font-bold leading-tight font-heading text-[#222222] mb-4 tracking-tight">
            Lorem ipsum dolor<br />sit amet
          </h1>
          <p className="text-[20px] font-subheading font-semibold text-[#222222] max-w-xl mb-6 tracking-tight">
            Lorem ipsum dolor sit amet consectetur. Enim netus cras congue quis elit sociis. Sed mi rhoncus id habitant. In urna tellus nisi platea morbi libero imperdiet neque.
          </p>
          <form className="flex items-center mb-3">
            <input
              type="text"
              placeholder="Enter something..."
              className="border rounded-l px-4 py-2 w-64 focus:outline-none"
            />
            <button
              type="submit"
              className="bg-[#0546D2] hover:bg-[#1959AC] text-white px-6 py-2 rounded-r font-medium flex items-center gap-2 shadow"
            >
              Submit <span>→</span>
            </button>
          </form>
          <div className="flex items-center gap-2 text-sm text-[#222222] mt-2">
            <span className="text-[#0546D2] text-xl">✔</span>
            No credit card required!
          </div>
        </div>

        {/* Right Side Image with Diagonal Cut */}
        <div className="relative w-full md:w-1/2 h-64 md:h-auto hidden md:block">
          <div className="absolute inset-0" style={{ clipPath: 'polygon(18% 0, 100% 0, 100% 100%, 0% 100%)' }}>
            <Image
              src="/motorcycle.png"
              alt="Motorcycle"
              fill
              className="object-cover"
              priority
            />
          </div>
        </div>
      </div>
    </div>
  );
}
