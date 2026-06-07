export interface GalleryImage {
  id: number;
  src: string;
  alt: string;
  span?: 'tall' | 'wide';
}

export const galleryImages: GalleryImage[] = [
  { id: 1, src: '/assets/gallery-1.jpg', alt: 'Pengrajin batik menggambar wax dengan canting', span: 'tall' },
  { id: 2, src: '/assets/gallery-2.jpg', alt: 'Kemeja batik pria premium di manekin' },
  { id: 3, src: '/assets/gallery-3.jpg', alt: 'Kain batik yang baru diwarnai sedang dijemur' },
  { id: 4, src: '/assets/gallery-4.jpg', alt: 'Wanita mengenakan dress batik modern' },
  { id: 5, src: '/assets/gallery-5.jpg', alt: 'Panorama workshop batik tradisional', span: 'wide' },
  { id: 6, src: '/assets/gallery-6.jpg', alt: 'Detail motif parang klasik' },
  { id: 7, src: '/assets/gallery-7.jpg', alt: 'Packaging premium Husein Batik' },
  { id: 8, src: '/assets/gallery-8.jpg', alt: 'Pelanggan membuka pesanan batik' },
  { id: 9, src: '/assets/gallery-9.jpg', alt: 'Koleksi produk Husein Batik', span: 'tall' },
];
