// Types.

/* Interface containing data for officer's grid. */
export interface Officer {
  //id: number;
  name: string;
  position: string;
  positionDesc: string;
  //email?: string; // Optional email field
  image: string; // URL for the officer's image
  //photoUrl?: string;  // Optional profile picture
}

/* Interface containing data for image gallery photos. */
export interface ImageGalleryPhoto {
  path: string; // Path to image
  link: string; // Link for image click
  description: string; // Image description
};
