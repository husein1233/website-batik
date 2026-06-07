export interface Testimonial {
  id: number;
  name: string;
  location: string;
  rating: number;
  quote: string;
  initial: string;
}

export const testimonials: Testimonial[] = [
  {
    id: 1,
    name: 'Ahmad Fauzi',
    location: 'Jakarta',
    rating: 5,
    quote: 'Kualitas batiknya luar biasa! Saya sudah membeli 3 kemeja dan semuanya nyaman dipakai. Motifnya autentik dan warnanya tidak luntur.',
    initial: 'A',
  },
  {
    id: 2,
    name: 'Siti Rahayu',
    location: 'Surabaya',
    rating: 5,
    quote: 'Pelayanan sangat ramah dan pengiriman cepat. Dress batik yang saya pesan pas di badan dan motifnya elegan. Recommended!',
    initial: 'S',
  },
  {
    id: 3,
    name: 'Budi Santoso',
    location: 'Bandung',
    rating: 5,
    quote: 'Saya beli sebagai hadiah untuk orang tua dan mereka sangat suka. Packagingnya mewah dan batiknya terlihat premium.',
    initial: 'B',
  },
  {
    id: 4,
    name: 'Dewi Anggraini',
    location: 'Yogyakarta',
    rating: 5,
    quote: 'Pengalaman belanja online terbaik. Bisa konsultasi via WhatsApp untuk pilihan motif. Produk sesuai ekspektasi!',
    initial: 'D',
  },
  {
    id: 5,
    name: 'Rudi Hartono',
    location: 'Semarang',
    rating: 5,
    quote: 'Batiknya bagus untuk acara formal maupun casual. Harga sepadan dengan kualitas. Pasti akan beli lagi!',
    initial: 'R',
  },
  {
    id: 6,
    name: 'Maya Sari',
    location: 'Bali',
    rating: 5,
    quote: 'Senang mendukung UMKM lokal yang melestarikan budaya. Batiknya original dan pengrajinnya berbakat.',
    initial: 'M',
  },
];
