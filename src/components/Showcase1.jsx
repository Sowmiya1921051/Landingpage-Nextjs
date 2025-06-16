import Image from 'next/image';

export default function Showcase1() {
  return (
    <div className="min-h-screen bg-white flex flex-col justify-between">
      <div className="flex flex-col md:flex-row flex-1 py-8">
        {/* Left Side */}
        <div className="flex-1 flex flex-col justify-center pl-8">
          {/* Top Link */}
          <a href="#" className="text-[#1959AC] font-inter font-semibold text-[18px] mb-4 hover:underline">
            Discover our team
          </a>
          {/* Heading */}
          <h1 className="font-robotoCondensed text-[36px] md:text-[42px] font-bold text-[#222] tracking-tightest mb-4 leading-tight uppercase">
            Meet our expert<br />
            team members
          </h1>
          {/* Subheading */}
          <p className="font-inter text-[16px] text-[#222] mb-6 max-w-xl">
            Our team brings together years of experience and a passion for innovation. We work collaboratively to deliver outstanding results for our clients and partners.
          </p>
          {/* Feature Rows */}
          <div className="flex flex-col gap-4">
            {[1, 2, 3].map((i) => (
              <div key={i} className="flex items-start gap-3">
                {/* Icon */}
                <Image
                  src={`/feature${i}.png`} // Place your icons as feature1.png, feature2.png, feature3.png in /public
                  alt={`feature${i}`}
                  width={32}
                  height={32}
                  className="mt-1"
                />
                <div>
                  <div className="font-inter font-semibold text-[18px] text-[#222] mb-1">
                    {i === 1 && 'Collaborative approach to every project.'}
                    {i === 2 && 'Expertise across multiple industries.'}
                    {i === 3 && 'Driven by results and client success.'}
                  </div>
                  <div className="font-inter text-[15px] text-[#222]">
                    {i === 1 && 'We believe in teamwork and open communication to achieve the best outcomes for our clients.'}
                    {i === 2 && 'Our professionals have backgrounds in technology, business, and creative fields.'}
                    {i === 3 && 'We measure our success by the satisfaction and growth of our clients.'}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
        {/* Right Side - Main Image */}
        <div className="flex-1 flex items-center justify-center">
          <div className="w-full h-[400px] md:h-[500px] relative  overflow-hidden shadow-lg">
            <Image
              src="/office-team.png" // Place your image in /public/office-team.jpg
              alt="Office Team"
              fill
              className="object-cover"
              priority
            />
          </div>
        </div>
      </div>
      {/* Optional: Gradient Bar at the bottom */}
      <div className="h-3 w-full mt-4  bg-gradient-to-r from-[#0546D2] via-[#00FFB2] to-[#5B5BFF]" />
    </div>
  );
} 