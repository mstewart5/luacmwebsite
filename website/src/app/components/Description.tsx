import Image from "next/image";

export default function Description() {
  return (
    <div className="bg-[#f2f0ef] p-6 flex justify-around items-start w-full mt-4">
      <div id="Parent div" className="flex md:flex-row sm:flex-col gap-4">
        <div id="Image" className="order-last">
          <Image
            className="rounded-xl"
            src="/images/gallery/acm_possibly_2023.jpg"
            height="100"
            width="550"
            alt=""
          />
        </div>
        <div
          id="Description"
          className="flex flex-col p-3 gap-4 overflow-hidden rounded-xl md:max-w-xl"
        >
          <h1 className="text-3xl font-black text-black">
            Lamar University's ACM Chapter
          </h1>
          <p className="text-xl text-black">
            Welcome to Lamar University's ACM chapter! ACM LU strives to be the
            place where CS students come together to level up their skills. It's
            not just about coding, it's about building a community where
            everyone helps each other grow.<br></br><br></br>
            Members team up on real projects, sharpen their skills in friendly/serious competitions, and connect
            with grads who've walked the same path.<br></br><br></br>
            Whether you want to build something awesome for your portfolio or just find your people. ACM
            LU is the place to be for LU CS students.
          </p>

          {/*TODO: add functionality */}
          <div className="flex flex-row justify-between">
            <button className="bg-transparent hover:bg-blue-500 text-blue-700 font-semibold hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded">
              Join LU ACM
            </button>
            <button className="bg-transparent hover:bg-blue-500 text-blue-700 font-semibold hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded">
              Discord
            </button>
            <button className="bg-transparent hover:bg-blue-500 text-blue-700 font-semibold hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded">
              Instagram
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
