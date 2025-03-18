import { ImageGalleryPhoto, ImageSize } from "@/types/index";
import { ImageGallery } from "@/components/ImageGallery";

export function EventsImageGallery({ photos, columns = 3 }: { photos: ImageGalleryPhoto[]; columns?: number }) {
  const galleryPhotos: ImageGalleryPhoto[] = [
	{ path: "images/gallery/ACM_Banquet_2023_1.jpg", link: "#", description: "", size: ImageSize.MEDIUM },
	{ path: "images/gallery/ACM_Banquet_Date_unsure_2_1.jpg", link: "#", description: "", size: ImageSize.MEDIUM },
	{ path: "images/gallery/ICPC Competition (Date Unsure).jpg", link: "#", description: "", size: ImageSize.LARGE },
	{ path: "images/gallery/ICPC_SCUSA_2024.jpg", link: "#", description: "ICPC SCUSA 2024", size: ImageSize.LARGE },
	{ path: "images/gallery/IMG_0082.jpg", link: "#", description: "", size: ImageSize.MEDIUM },
	{ path: "images/gallery/acm_game_night_here_to_slay_11_05_2024.jpg", link: "#", description: "", size: ImageSize.MEDIUM },
	{ path: "images/gallery/acm_possibly_2023.jpg", link: "#", description: "", size: ImageSize.MEDIUM },
	{ path: "images/gallery/acm_spring_banquet_2024.png", link: "#", description: "", size: ImageSize.MEDIUM },
	{ path: "images/gallery/acm_valentines_day_cookie_sale_02_13_2025_01.jpg", link: "#", description: "", size: ImageSize.LARGE },
  ];

  return (
    <ImageGallery photos={galleryPhotos} columns={3} />
  );
}

