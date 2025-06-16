import Image from 'next/image';

const cards = [
  {
    img: '/img1.png',
    title: 'Lorem ipsum dolor sit amet consectetur.',
    desc: 'Lorem ipsum dolor sit amet consectetur. Nunc gravida consequat faucibus cursus nisi. Nunc montes molestie a vitae vulputate. Phasellus in pulvinar et vitae. Mi eget lectus nec et. Libero iaculis diam nam mauris a eget. Quam nibh rhoncus rhoncus enim venenatis bibendum.',
    link: '#',
  },
  {
    img: '/img2.png',
    title: 'Lorem ipsum dolor sit amet consectetur.',
    desc: 'Lorem ipsum dolor sit amet consectetur. Nunc gravida consequat faucibus cursus nisi. Nunc montes molestie a vitae vulputate. Phasellus in pulvinar et vitae. Mi eget lectus nec et. Libero iaculis diam nam mauris a eget. Quam nibh rhoncus rhoncus enim venenatis bibendum.',
    link: '#',
  },
  {
    img: '/img3.png',
    title: 'Lorem ipsum dolor sit amet consectetur.',
    desc: 'Lorem ipsum dolor sit amet consectetur. Nunc gravida consequat faucibus cursus nisi. Nunc montes molestie a vitae vulputate. Phasellus in pulvinar et vitae. Mi eget lectus nec et. Libero iaculis diam nam mauris a eget. Quam nibh rhoncus rhoncus enim venenatis bibendum.',
    link: '#',
  },
  {
    img: '/img4.png',
    title: 'Lorem ipsum dolor sit amet consectetur.',
    desc: 'Lorem ipsum dolor sit amet consectetur. Nunc gravida consequat faucibus cursus nisi. Nunc montes molestie a vitae vulputate. Phasellus in pulvinar et vitae. Mi eget lectus nec et. Libero iaculis diam nam mauris a eget. Quam nibh rhoncus rhoncus enim venenatis bibendum.',
    link: '#',
  },
];

export default function CardGrid() {
  return (
    <div className="w-full min-h-screen bg-white flex flex-col items-center py-8 relative overflow-hidden">
      {/* Decorative background SVG */}
      <div className="absolute left-0 top-0 w-full h-full pointer-events-none z-0">
        <Image
          src="/Line7.svg"
          alt="Decorative Lines"
          fill
          className="object-cover opacity-20"
          priority={false}
        />
      </div>
      {/* Section Header */}
      <div className="relative z-10 w-full max-w-5xl px-4">
        <a href="#" className="text-[#0546D2] font-semibold text-lg mb-2 inline-block">Lorem ipsum dolor sit amet</a>
        <h2 className="text-3xl md:text-4xl font-extrabold text-[#222] mb-2">LOREM IPSUM DOLOR SIT</h2>
        <p className="text-[#222] mb-8">
          Lorem ipsum dolor sit amet consectetur. Amet sodales sociis facilisis donec dui. Mi porttitor ut aliquam mattis maecenas eget integer in nam. Non nisl iaculis at felis aliquet. Hendrerit tellus at purus lectus.
        </p>
      </div>
      {/* Card Grid */}
      <div className="relative z-10 grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl w-full px-4 ml-32 ">
        {cards.map((card, idx) => (
          <div key={idx} className="bg-white rounded-xl shadow-sm p-0 overflow-hidden flex flex-col">
            <div className="w-full h-48 relative">
              <Image
                src={card.img}
                alt={card.title}
                fill
                className="object-cover"
                sizes="(max-width: 768px) 100vw, 50vw"
              />
            </div>
            <div className="p-6 flex flex-col flex-1">
              <h3 className="font-bold text-lg mb-2">{card.title}</h3>
              <p className="text-[#222] mb-4 flex-1">{card.desc}</p>
              <a href={card.link} className="text-[#0546D2] font-medium underline">Learn More</a>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
