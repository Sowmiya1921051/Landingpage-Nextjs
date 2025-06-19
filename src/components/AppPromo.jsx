import Image from 'next/image';

export default function AppPromo() {
  return (
    <section className="w-full bg-[#F3F3F3] py-12">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between px-6">
        {/* Left Content */}
        <div className="flex-1 flex flex-col items-start justify-center mb-8 md:mb-0">
          <a href="#" className="text-[#1959AC] font-semibold text-lg mb-2">Lorem Ipsum</a>
          <h2 className="text-3xl md:text-4xl font-extrabold text-[#222] mb-4 leading-tight">
            Lorem Ipsum Dolor<br />Sit Amet
          </h2>
          <p className="text-[#222] mb-6 max-w-md">
            Lorem ipsum dolor sit amet consectetur. Voluptate amet aliquet morbi suspendisse convallis. Urna a urna lectus donec felis risus duis pellentesque. Pellentesque ultricies ipsum.
          </p>
          <div className="flex gap-4">
            <a href="#">
              <Image src="/google-play.png" alt="Get it on Google Play" width={140} height={42} />
            </a>
            <a href="#">
              <Image src="/app-store.png" alt="Download on the App Store" width={140} height={42} />
            </a>
          </div>
        </div>
        {/* Right Image */}
        <div className="flex-1 flex items-center justify-center">
          <Image
            src="/phone-hand.png"
            alt="Hand holding phone"
            width={300}
            height={350}
            className="object-contain"
            priority
          />
        </div>
      </div>
    </section>
  );
}
