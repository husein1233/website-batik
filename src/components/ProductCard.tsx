import { useState } from 'react';
import type { Product } from '@/data/products';

interface ProductCardProps {
  product: Product;
  onQuickView?: (product: Product) => void;
}

function formatPrice(price: number): string {
  return `Rp${price.toLocaleString('id-ID')}`;
}

export default function ProductCard({ product, onQuickView }: ProductCardProps) {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div
      className="group bg-white rounded-lg overflow-hidden shadow-[0_1px_3px_rgba(26,22,18,0.08)] hover:shadow-[0_8px_30px_rgba(26,22,18,0.12)] transition-shadow duration-400"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Image Container */}
      <div className="relative aspect-[3/4] overflow-hidden">
        <img
          src={product.image}
          alt={product.name}
          loading="lazy"
          className="w-full h-full object-cover image-hover-zoom"
        />
        {/* Category Badge */}
        <span className="absolute top-3 left-0 bg-[#8B6914] text-white font-body font-medium text-[0.75rem] px-3 py-1 rounded-r">
          {product.category}
        </span>
        {/* Discount Badge */}
        {product.discount && (
          <span className="absolute top-3 right-0 bg-[#C75B2A] text-white font-body font-semibold text-[0.75rem] px-3 py-1 rounded-l">
            {product.discount}
          </span>
        )}
        {/* Quick View Overlay */}
        {isHovered && onQuickView && (
          <div
            className="absolute inset-0 bg-[rgba(26,22,18,0.7)] flex items-center justify-center transition-opacity duration-300"
          >
            <button
              onClick={() => onQuickView(product)}
              className="bg-transparent border-[1.5px] border-white text-white font-body font-semibold text-[0.875rem] px-6 py-2.5 rounded hover:bg-white hover:text-[#1A1612] transition-colors"
            >
              Lihat Detail
            </button>
          </div>
        )}
      </div>

      {/* Info Section */}
      <div className="p-4">
        <h3 className="font-display font-medium text-[1.125rem] text-[#1A1612] leading-tight">
          {product.name}
        </h3>
        <div className="flex items-center gap-2 mt-2">
          <span className="font-body font-semibold text-[1.125rem] text-[#8B6914]">
            {formatPrice(product.price)}
          </span>
          {product.originalPrice && (
            <span className="font-body text-[0.875rem] text-[rgba(26,22,18,0.4)] line-through">
              {formatPrice(product.originalPrice)}
            </span>
          )}
        </div>
        {/* Rating */}
        <div className="flex items-center gap-1 mt-2">
          {Array.from({ length: 5 }).map((_, i) => (
            <svg
              key={i}
              width="14"
              height="14"
              viewBox="0 0 24 24"
              fill={i < product.rating ? '#8B6914' : '#D4C9B8'}
            >
              <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
            </svg>
          ))}
          <span className="font-body text-[0.75rem] text-[rgba(26,22,18,0.5)] ml-1">
            ({product.reviews})
          </span>
        </div>
      </div>
    </div>
  );
}
