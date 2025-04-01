import Image from 'next/image';

const eventGallery = [
  { src: '/images/gallery/ACM_Banquet_2023_1.jpg', 
    alt: 'Members at ACM Banquet 2023' 

  },
  { src: '/images/gallery/acm_game_night_here_to_slay_11_05_2024.jpg', 
    alt: 'Game night fun with board games' 
},
  { src: '/images/gallery/acm_spring_banquet_2024.png', 
    alt: 'Spring banquet group photo 2024' 

  },
  { src: '/images/gallery/ICPC_SCUSA_2024.jpg', 
    alt: 'Team photo at ICPC SCUSA 2024' 

  },
  { src: '/images/gallery/acm_valentines_day_cookie_sale_02_13_2025_01.jpg', 
    alt: 'Valentine’s Day cookie sale event' 

  },
  { src: '/images/gallery/IMG_0082.jpg', alt: 'ACM social gathering' },
  { src: '/images/gallery/ICPC Competition (Date Unsure).jpg', 
    alt: 'IPCP Competition' 

  },
  { src: '/images/gallery/acm_possibly_2023.jpg', 
    alt: 'ACM Group Photo 2023' 

  },
  { src: '/images/gallery/ACM_Banquet_Date_unsure_2_1.jpg', 
    alt: 'ACM Banquet' 
}
];

export default function EventGallery() {
  return (
    <section>
      <div className="w-full bg-black text-white py-4 px-6">
        <h2 className="text-2xl font-semibold">Event Gallery</h2>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {eventGallery.map((img, index) => (
          <div key={index} className="relative group overflow-hidden rounded-md shadow-md">
            <Image
              src={img.src}
              alt={img.alt}
              width={400}
              height={300}
              className="w-full h-60 object-cover transform group-hover:scale-105 transition duration-300"
            />
            <div className="absolute bottom-0 left-0 right-0 bg-black bg-opacity-60 text-white text-sm p-2 opacity-0 group-hover:opacity-100 transition duration-300">
              {img.alt}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
