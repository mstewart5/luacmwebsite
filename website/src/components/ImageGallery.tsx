import { ImageGalleryPhoto } from "@/types/index";

// This image gallery isn't completed yet. It is intended to be a masonry grid.

export function ImageGallery({ photos }: { photos: ImageGalleryPhoto[] }) {
  return (
    <div className="masonry sm:masonry-sm md:masonry-md p-5">
      {photos.map(({ path, link, description }, index) => (
        <div key={index} className="break-inside p-2">
          <img src={path} alt={`${description}`} loading="lazy" className="rounded-lg w-full h-auto object-cover" />
        </div>
      ))}
    </div>
  );
}

/*<div class="bg-transparent dark:bg-gray-800 h-screen h-full py-6 sm:py-8 lg:py-12">
      <div class="mx-auto max-w-screen-2xl px-4 md:px-8">
        <div class="grid grid-cols-2 gap-4 sm:grid-cols-3 md:gap-6 xl:gap-8">
          {photos.map(({ path, link, description }, index) => (
            <a href={link}
               className="group relative flex h-48 items-end overflow-hidden rounded-lg bg-gray-100 shadow-lg md:h-80">
               <img src={path} alt={`${description}`} loading="lazy" className="absolute inset-0 h-full w-full object-cover object-center transition duration-200 group-hover:scale-110" />
                <div
                    class="pointer-events-none absolute inset-0 bg-gradient-to-t from-gray-800 via-transparent to-transparent opacity-50">
                </div>
                <span class="relative ml-4 mb-3 inline-block text-sm text-white md:ml-5 md:text-lg">{description}</span>
            </a>
          ))}
        </div>
      </div>
    </div>
 */

/* <a href={link}>
<span class="relative ml-4 mb-3 inline-block text-sm text-white md:ml-5 md:text-lg">{description}</span>
</a>
*/

/*function ImageGallery({ photos }: { photos: ImageGalleryPhoto[] }) {
  return (
    <div className="p-5 sm:p-8">
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4 auto-rows-[64px]">
        {photos.map(({ path, link, description }, index) => (
          <a key={index} href={link || "#"} target="_blank" rel="noopener noreferrer" className="block">
            <img
              src={path}
              alt={description}
              loading="lazy"
              className="rounded-lg w-full h-auto object-cover"
              style={{
                gridRowEnd: `span ${Math.floor(Math.random() * 2) + 2}`, // Random height
              }}
            />
          </a>
        ))}
      </div>
    </div>
  );
}*/
