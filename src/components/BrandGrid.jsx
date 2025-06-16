import Image from 'next/image';

const brands = [
  [
    { src: '/hero.png', alt: 'Hero' },
    { src: '/honda.png', alt: 'Honda' },
    { src: '/bajaj.png', alt: 'Bajaj' },
    { src: '/tvs.png', alt: 'TVS' },
  ],
  [
    { src: '/royal-enfield.png', alt: 'Royal Enfield' },
    { src: '/yamaha.png', alt: 'Yamaha' },
    { src: '/ktm.png', alt: 'KTM' },
    { src: '/ather.png', alt: 'Ather' },
  ],
  [
    { src: '/ola-electric.png', alt: 'Ola Electric' },
    { src: '/revolt.png', alt: 'Revolt' },
    { src: '/ultraviolette.png', alt: 'Ultraviolette' },
    { src: '/tork.png', alt: 'Tork Motors' },
  ],
];

export default function BrandGrid() {
  return (
    <div className="w-full bg-white py-12 flex flex-col items-center">
      <h2 className="text-3xl md:text-4xl font-extrabold text-center text-[#222] uppercase mb-12">
        Lorem ipsum dolor sit amet<br className="hidden md:block" />
        consectetur. commodo leo amet.
      </h2>
      <div className="flex flex-col gap-10 w-full max-w-6xl">
        {brands.map((row, i) => (
          <div key={i} className="flex flex-wrap justify-center gap-x-12 gap-y-8">
            {row.map((brand, j) => (
              <div key={j} className="flex flex-col items-center min-w-[120px]">
                <Image
                  src={brand.src}
                  alt={brand.alt}
                  width={120}
                  height={60}
                  className="object-contain h-[60px] w-auto"
                />
              </div>
            ))}
          </div>
        ))}
      </div>
    </div>
  );
}
