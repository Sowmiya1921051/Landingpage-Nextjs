import Image from 'next/image';

export default function CollaborationSection() {
  return (
    <section className="flex flex-col md:flex-row items-center justify-center min-h-[60vh] gap-12 bg-white py-10 px-4">
      {/* Left Side */}
      <div className="max-w-md">
        <h2 className="text-3xl font-bold text-[#1a2235] mb-6 tracking-wide">
          LOREM IPSUM DOLOR SIT AMET
        </h2>

        {/* Tab Buttons */}
        <div className="flex border border-gray-300 rounded-md overflow-hidden mb-5 w-[340px]">
          {['Research', 'Plan', 'Design'].map((tab, idx) => (
            <button
              key={tab}
              className={`flex-1 py-3 text-[16px] font-semibold text-[#1a2235] ${
                idx === 0
                  ? 'bg-[#f7faff] font-bold outline outline-1 outline-blue-200 z-10'
                  : 'bg-white'
              } ${idx < 2 ? 'border-r border-gray-300' : ''}`}
            >
              {tab}
            </button>
          ))}
        </div>

        {/* Description */}
        <p className="text-gray-500 text-[15px] leading-relaxed mb-5">
          Egestas fringilla aliquam leo, habitasse arcu varius lorem elit. Neque pellentesque donec et tellus ac varius tortor, bibendum. Nulla felis ac turpis at amet. Purus malesuada placerat arcu et enim elit in accumsan.
        </p>

        {/* Link */}
        <a
          href="#"
          className="text-blue-600 font-medium text-[15px] inline-flex items-center gap-1 hover:underline"
        >
          Check tools <span className="text-lg ml-1">→</span>
        </a>
      </div>

      {/* Right Side */}
      <div>
        <Image
          src="/office-team1.png"
          alt="Team Collaboration"
          width={380}
          height={250}
          className="object-cover"
        />
      </div>
    </section>
  );
}
