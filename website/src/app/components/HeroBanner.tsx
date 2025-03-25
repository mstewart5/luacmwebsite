export default function HeroBanner() {
    return (
      <div 
        className="relative bg-cover bg-center text-white py-16 sm:py-24 px-6 lg:px-8"
        style={{ backgroundImage: "url('/images/bannerBackground.jpg')" }}
      >
        <div className="absolute inset-0 bg-black bg-opacity-40"></div> 
        <div className="relative z-10 flex justify-center items-center h-full text-center">
          <h1 className="text-3xl sm:text-5xl font-bold">
            Changing the world, one line of code at a time.
          </h1>
        </div>
      </div>
    );
  }
  