import { ImageGalleryPhoto, ImageSize } from "@/types/index";
import Tooltip, { TooltipPosition } from "@/components/Tooltip";

// Function to distribute images into columns for a masonry grid
function createMasonryColumns(photos: ImageGalleryPhoto[], numCols: number): ImageGalleryPhoto[][] {
  const columns: ImageGalleryPhoto[][] = Array.from({ length: numCols }, () => []);

  photos.forEach((photo, index) => {
    columns[index % numCols].push(photo);
  });

  return columns;
}

export function ImageGallery({ photos, columns = 3 }: { photos: ImageGalleryPhoto[]; columns?: number }) {
  const columnPhotos = createMasonryColumns(photos, columns);
  return (
    <div className="w-full flex justify-center">
      <div 
        className={`grid gap-4 auto-rows-min mx-auto w-full max-w-5xl
          ${columns === 2 ? 'grid-cols-2' : 
            columns === 3 ? 'grid-cols-1 sm:grid-cols-2 md:grid-cols-3' : 
            columns === 4 ? 'grid-cols-2 md:grid-cols-4' : 
            'grid-cols-1 sm:grid-cols-2 md:grid-cols-3'}`
        }
      >
        {columnPhotos.map((col, colIndex) => (
          <div key={`col-${colIndex}-${col.length > 0 ? col[0].path : "empty"}`} className="flex flex-col gap-4">
{col.map(({ path, link, description, size }, index) => (
  description ? ( // Only render Tooltip if description exists
    <Tooltip key={`img-${index}-${path}`} text={description}>
      <img
        src={path}
        alt={description}
        loading="lazy"
        className={`w-full rounded-lg object-cover bg-[#f1f1f1] ${
          size === ImageSize.SMALL ? "h-20 md:h-32" :
          size === ImageSize.MEDIUM ? "h-36 md:h-48" :
          "h-56 md:h-64" // Default to LARGE
        }`}
      />
    </Tooltip>
  ) : (
    <img
      key={`img-${index}-${path}`}
      src={path}
      alt=""
      loading="lazy"
      className={`w-full rounded-lg object-cover bg-[#f1f1f1] ${
        size === ImageSize.SMALL ? "h-20 md:h-32" :
        size === ImageSize.MEDIUM ? "h-36 md:h-48" :
        "h-56 md:h-64" // Default to LARGE
      }`}
    />
  )
))}
			
          </div>
        ))}
      </div>
    </div>
  );
}

