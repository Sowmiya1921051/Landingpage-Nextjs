export default function RequestQuoteForm() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-white py-8">
      <h1 className="text-3xl md:text-4xl font-extrabold text-[#222] mb-10 text-center uppercase">Request a Quote</h1>
      <form className="w-full max-w-3xl bg-white flex flex-col gap-6">
        {/* Row 1 */}
        <div className="flex flex-col md:flex-row gap-6">
          <div className="flex-1">
            <label className="block mb-1 text-sm font-medium text-[#222]">Name</label>
            <input type="text" className="w-full border rounded px-3 py-2 bg-gray-100" />
          </div>
          <div className="flex-1">
            <label className="block mb-1 text-sm font-medium text-[#222]">E-mail</label>
            <input type="email" className="w-full border rounded px-3 py-2 bg-gray-100" />
          </div>
        </div>
        {/* Row 2 */}
        <div className="flex flex-col md:flex-row gap-6">
          <div className="flex-1">
            <label className="block mb-1 text-sm font-medium text-[#222]">Phone Number</label>
            <input type="text" className="w-full border rounded px-3 py-2 bg-gray-100" />
          </div>
          <div className="flex-1">
            <label className="block mb-1 text-sm font-medium text-[#222]">Time Frame<span className="text-red-500">*</span></label>
            <select className="w-full border rounded px-3 py-2 bg-gray-100">
              <option>Choose Time Frame</option>
              <option>1 Week</option>
              <option>2 Weeks</option>
              <option>1 Month</option>
            </select>
          </div>
        </div>
        {/* Row 3 */}
        <div className="flex flex-col md:flex-row gap-6">
          <div className="flex-1">
            <label className="block mb-1 text-sm font-medium text-[#222]">Size<span className="text-red-500">*</span></label>
            <select className="w-full border rounded px-3 py-2 bg-gray-100">
              <option>Choose Size</option>
              <option>Small</option>
              <option>Medium</option>
              <option>Large</option>
            </select>
          </div>
          <div className="flex-1">
            <label className="block mb-1 text-sm font-medium text-[#222]">Quantity<span className="text-red-500">*</span></label>
            <select className="w-full border rounded px-3 py-2 bg-gray-100">
              <option>Choose Quantity</option>
              <option>1</option>
              <option>2</option>
              <option>3+</option>
            </select>
          </div>
        </div>
        {/* Row 4 */}
        <div>
          <label className="block mb-1 text-sm font-medium text-[#222]">Please Describe Your Project<span className="text-red-500">*</span></label>
          <textarea className="w-full border rounded px-3 py-2 bg-gray-100 min-h-[120px]" placeholder="Choose a project type" />
        </div>
        {/* Terms */}
        <div className="text-center text-sm text-[#222] mt-2">
          By submitting this form you agree to our <a href="#" className="underline">Terms of Service</a> and <a href="#" className="underline">Privacy Policy</a>.
        </div>
        {/* Button */}
        <div className="flex justify-center">
          <button type="submit" className="bg-[#1959AC] hover:bg-[#0546D2] text-white font-semibold px-6 py-2 rounded shadow flex items-center gap-2">
            Lorem Ipsum <span>→</span>
          </button>
        </div>
      </form>
    </div>
  );
}
