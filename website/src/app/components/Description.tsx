import Image from "next/image";


export default function Description() {
  return (
     <div className="bg-[#f2f0ef] p-6 flex justify-around items-start w-full mt-4">
        <div id="Parent div" className="flex md:flex-row sm:flex-col gap-4">
          <div id="Image" className="order-last">
            <Image
              className="rounded-xl"
              src="/images/Original_Doge_meme.jpg"
              height="100"
              width="720"
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
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis
              neque ipsum, malesuada sit amet nibh ut, interdum lobortis quam.
              Morbi dolor purus, rutrum ut imperdiet a, placerat eu eros. Donec
              ut bibendum massa, imperdiet pretium quam. Praesent condimentum
              odio elit, ac congue neque rhoncus varius. Donec diam ante, congue
              et egestas vitae, ullamcorper a mauris. Phasellus rutrum blandit
              diam, vestibulum congue metus pretium id. Phasellus sodales
              imperdiet mi, id molestie enim vestibulum pharetra.
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