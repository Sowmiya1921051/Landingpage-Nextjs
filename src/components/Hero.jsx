'use client'
import Image from 'next/image'

export default function Hero() {
  return (
    <div className="min-h-screen bg-white flex flex-col">
      {/* Navbar */}
      <nav className="flex items-center justify-between px-8 py-4">
        <div className="bg-gray-200 px-6 py-2 rounded">
          <span className="font-bold text-2xl">LOGO</span>
        </div>
        <div className="flex items-center gap-8">
          <a href="#" className="text-blue-700 hover:underline">Lorem Ipsum <span>▼</span></a>
          <a href="#" className="text-blue-700 hover:underline">Lorem Ipsum <span>▼</span></a>
          <a href="#" className="text-blue-700 hover:underline">Lorem Ipsum <span>▼</span></a>
        </div>
        <button className="bg-white border px-4 py-2 rounded shadow text-sm font-medium">Sign In</button>
      </nav>

      {/* Hero Section */}
      <div className="flex flex-1 flex-col md:flex-row">
        {/* Left Side */}
        <div className="flex-1 flex flex-col justify-center pl-8 pr-8 md:pl-16 md:pr-8 py-12">
          <h1 className="text-4xl md:text-5xl font-bold mb-4 leading-tight">Lorem ipsum dolor<br />sit amet</h1>
          <p className="mb-6 text-gray-700">
            Lorem ipsum dolor sit amet consectetur. Enim netus cras congue quis elit sociis. Sed mi rhoncus id habitant. In urna tellus nisi platea morbi libero imperdiet neque. Justo suspendisse tristique posuere quis eget viverra. Nunc euismod ultrices etiam nulla habitasse.
          </p>
          <form className="flex items-center mb-3">
            <input
              type="text"
              placeholder="Enter something..."
              className="border rounded-l px-4 py-2 w-64 focus:outline-none"
            />
            <button
              type="submit"
              className="bg-blue-700 text-white px-6 py-2 rounded-r font-medium flex items-center gap-2"
            >
              Submit <span>→</span>
            </button>
          </form>
          <div className="flex items-center gap-2 text-sm text-gray-700">
            <span className="text-blue-600 text-xl">✔</span>
            No credit card required!
          </div>
        </div>

        {/* Right Side with Skewed Image */}
        <div className="relative w-full md:w-1/2 h-64 md:h-auto overflow-hidden">
          <div className="absolute inset-0 -skew-x-12 origin-left">
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
