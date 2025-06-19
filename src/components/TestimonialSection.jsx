export default function TestimonialSection() {
  return (
    <section className="bg-[#1769e0] py-12 px-4">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-6">
          <div>
            <p className="text-white text-sm mb-1">Join other Sun harvesters</p>
            <h2 className="text-2xl md:text-3xl font-bold text-white mb-2">
              LOREM IPSUM DOLOR SIT AMET
            </h2>
            <p className="text-white/80 max-w-xl">
              Dui euismod iaculis libero, aliquet vitae et elementum porttitor. Etiam id mi tristique condimentum congue fusce nunc, donec magnis commodo.
            </p>
          </div>
          <button className="mt-4 md:mt-0 bg-white text-[#1769e0] font-semibold px-6 py-2 rounded shadow hover:bg-gray-100 transition">
            Lorem Ipsum
          </button>
        </div>
        {/* Cards */}
        <div className="flex flex-col md:flex-row gap-4 mb-8">
          {/* Card 1 */}
          <div className="bg-white rounded-lg p-6 flex-1 flex flex-col shadow">
            <div className="mb-4">
              <span className="inline-block bg-blue-100 text-blue-600 rounded-full p-2">
                {/* Example icon: user */}
                <svg width="24" height="24" fill="none" stroke="currentColor" strokeWidth="2"><circle cx="12" cy="8" r="4"/><path d="M4 20c0-2.2 3.6-4 8-4s8 1.8 8 4"/></svg>
              </span>
            </div>
            <p className="text-gray-700 mb-6 text-sm">
              Purus maecenas quis elit eu, aliquet. Tellus porttitor ut sollicitudin sit non fringilla. Donec nunc volutpat senectus neque eget amet pharetra, euismod. Tempus, nunc, euismod imperdiet curabitur commodo euismod.
            </p>
            <div className="flex items-center gap-3 mt-auto">
              <img src="https://randomuser.me/api/portraits/women/1.jpg" alt="Jane Cooper" className="w-8 h-8 rounded-full" />
              <span className="text-gray-900 font-medium text-sm">Jane Cooper</span>
            </div>
          </div>
          {/* Card 2 */}
          <div className="bg-white rounded-lg p-6 flex-1 flex flex-col shadow">
            <div className="mb-4">
              <span className="inline-block bg-blue-100 text-blue-600 rounded-full p-2">
                {/* Example icon: user */}
                <svg width="24" height="24" fill="none" stroke="currentColor" strokeWidth="2"><circle cx="12" cy="8" r="4"/><path d="M4 20c0-2.2 3.6-4 8-4s8 1.8 8 4"/></svg>
              </span>
            </div>
            <p className="text-gray-700 mb-6 text-sm">
              Vehicula sit sit pharetra bibendum ut et duis accumsan. Purus in, metus enim, ipsum morbi euismod pellentesque. Mattis pharetra accumsan est mi enim, id. Sit quam tortor eu tellus non, in euismod integer.
            </p>
            <div className="flex items-center gap-3 mt-auto">
              <img src="https://randomuser.me/api/portraits/men/2.jpg" alt="Ralph Edwards" className="w-8 h-8 rounded-full" />
              <span className="text-gray-900 font-medium text-sm">Ralph Edwards</span>
            </div>
          </div>
          {/* Card 3 */}
          <div className="bg-white rounded-lg p-6 flex-1 flex flex-col shadow">
            <div className="mb-4">
              <span className="inline-block bg-blue-100 text-blue-600 rounded-full p-2">
                {/* Example icon: crown */}
                <svg width="24" height="24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M3 17l3-9 4 7 4-7 3 9"/><path d="M4 21h16"/></svg>
              </span>
            </div>
            <p className="text-gray-700 mb-6 text-sm">
              Viverra lacus suspendisse et, adipiscing orci non, quam turpis enim sapien. Vitae amet senectus neque pretium. Duis urna massa pretium consectetur egestas aenean libero. Blandit porta leo condimentum dolor, sit aliquet sit aliquet.
            </p>
            <div className="flex items-center gap-3 mt-auto">
              <img src="https://randomuser.me/api/portraits/women/3.jpg" alt="Courtney Henry" className="w-8 h-8 rounded-full" />
              <span className="text-gray-900 font-medium text-sm">Courtney Henry</span>
            </div>
          </div>
          {/* Card 4 */}
          <div className="bg-white rounded-lg p-6 flex-1 flex flex-col shadow">
            <div className="mb-4">
              <span className="inline-block bg-blue-100 text-blue-600 rounded-full p-2">
                {/* Example icon: user */}
                <svg width="24" height="24" fill="none" stroke="currentColor" strokeWidth="2"><circle cx="12" cy="8" r="4"/><path d="M4 20c0-2.2 3.6-4 8-4s8 1.8 8 4"/></svg>
              </span>
            </div>
            <p className="text-gray-700 mb-6 text-sm">
              Hendrerit augue egestas et sagittis volutpat egestas. Mauris massa viverra posuere. Nunc, vitae massa pretium venenatis posuere.
            </p>
            <div className="flex items-center gap-3 mt-auto">
              <img src="https://randomuser.me/api/portraits/men/4.jpg" alt="Cameron Williamson" className="w-8 h-8 rounded-full" />
              <span className="text-gray-900 font-medium text-sm">Cameron Williamson</span>
            </div>
          </div>
        </div>
        {/* Pagination */}
        <div className="flex gap-2">
          <button className="w-8 h-8 rounded-full border border-white flex items-center justify-center text-white hover:bg-white hover:text-[#1769e0] transition">
            <svg width="16" height="16" fill="none" stroke="currentColor" strokeWidth="2"><path d="M10 4l-4 4 4 4"/></svg>
          </button>
          <button className="w-8 h-8 rounded-full border border-white flex items-center justify-center text-white hover:bg-white hover:text-[#1769e0] transition">
            <svg width="16" height="16" fill="none" stroke="currentColor" strokeWidth="2"><path d="M6 4l4 4-4 4"/></svg>
          </button>
        </div>
      </div>
    </section>
  );
}
