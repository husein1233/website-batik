export interface Product {
  id: number;
  name: string;
  category: 'Batik Pria' | 'Batik Wanita' | 'Aksesoris';
  price: number;
  originalPrice?: number;
  discount?: string;
  rating: number;
  reviews: number;
  image: string;
  description: string;
  sizes?: string[];
  featured?: boolean;
}

export const products: Product[] = [
  {
    id: 1,
    name: 'Kemeja Batik Pria Lengan Panjang',
    category: 'Batik Pria',
    price: 459000,
    rating: 5,
    reviews: 28,
    image: '/assets/product-kemeja-panjang.jpg',
    description: 'Kemeja batik premium dengan motif parang klasik. Terbuat dari katun premium yang nyaman dan adem. Cocok untuk acara formal maupun semi-formal.',
    sizes: ['M', 'L', 'XL', 'XXL'],
    featured: true,
  },
  {
    id: 2,
    name: 'Dress Batik Wanita Modern',
    category: 'Batik Wanita',
    price: 529000,
    rating: 5,
    reviews: 36,
    image: '/assets/product-dress-wanita.jpg',
    description: 'Dress elegan dengan motif mega mendung modern. Desain A-line yang flattering untuk berbagai bentuk tubuh.',
    sizes: ['S', 'M', 'L', 'XL'],
    featured: true,
  },
  {
    id: 3,
    name: 'Kemeja Batik Pria Lengan Pendek',
    category: 'Batik Pria',
    price: 399000,
    originalPrice: 499000,
    discount: 'DISKON 20%',
    rating: 5,
    reviews: 45,
    image: '/assets/product-kemeja-pendek.jpg',
    description: 'Kemeja casual dengan motif kawung modern. Kain katun ringan yang nyaman untuk pemakaian sehari-hari.',
    sizes: ['M', 'L', 'XL', 'XXL'],
    featured: true,
  },
  {
    id: 4,
    name: 'Selendang Batik Sutra',
    category: 'Aksesoris',
    price: 289000,
    rating: 5,
    reviews: 41,
    image: '/assets/product-selendang.jpg',
    description: 'Selendang halus dari sutra dengan motif sidomukti klasik. Elegan dan timeless.',
    featured: true,
  },
  {
    id: 5,
    name: 'Blazer Batik Pria Formal',
    category: 'Batik Pria',
    price: 789000,
    rating: 4,
    reviews: 12,
    image: '/assets/product-blazer.jpg',
    description: 'Blazer semi-formal dengan lapisan batik di bagian dalam. Campuran katun dan sutra untuk kesan premium.',
    sizes: ['M', 'L', 'XL', 'XXL'],
  },
  {
    id: 6,
    name: 'Blouse Batik Wanita Casual',
    category: 'Batik Wanita',
    price: 349000,
    rating: 5,
    reviews: 52,
    image: '/assets/product-blouse.jpg',
    description: 'Blouse santai dengan motif floral batik yang feminin. Kain katun yang lembut dan breathable.',
    sizes: ['S', 'M', 'L', 'XL'],
  },
  {
    id: 7,
    name: 'Kebaya Batik Set',
    category: 'Batik Wanita',
    price: 899000,
    originalPrice: 1099000,
    discount: 'DISKON 18%',
    rating: 5,
    reviews: 19,
    image: '/assets/product-kebaya.jpg',
    description: 'Set kebaya tradisional dengan rok batik. Sempurna untuk acara spesial dan perayaan budaya.',
    sizes: ['S', 'M', 'L', 'XL'],
  },
  {
    id: 8,
    name: 'Tas Tote Batik',
    category: 'Aksesoris',
    price: 259000,
    rating: 4,
    reviews: 23,
    image: '/assets/product-tas.jpg',
    description: 'Tote bag handmade dengan patchwork batik warna-warni. Basis kanvas yang kuat dan tahan lama.',
  },
];

export const categories = ['Semua', 'Batik Pria', 'Batik Wanita', 'Aksesoris'] as const;
