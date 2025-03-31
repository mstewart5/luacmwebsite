export default function JoinSection() {
  return (
    <div className="bg-[#f2f0ef]">
      <div
        className="bg-center"
        style={{
          backgroundImage: "url('/images/acmevent.jpg')",
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat",
        }}
      >
        <div className="flex flex-col justify-center items-center bg-[#f2f0ef] bg-opacity-50 backdrop-blur-sm h-full">
          <h1 className="text-black font-bold text-3xl m-auto my-5 rounded m-6">
            Join LU's primary CS organization
          </h1>
          <div>
            <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-5 px-5 rounded m-8">
              Purchase membership
            </button>
          </div>
        </div>
      </div>

      <div className="h-5 border-b-4 border-black text-2xl text-black text-center m-8">
        <span className="bg-[#C9C8C7] px-5 rounded">FAQ</span>
      </div>

      <div>
        <h1>aura</h1>
      </div>
    </div>
  );
}
