import { useState, useEffect, useRef } from 'react';
import PageHeader from '@/components/PageHeader';
import ProductCard from '@/components/ProductCard';
import { products, categories } from '@/data/products';
import type { Product } from '@/data/products';

export default function ProductsPage() {
  const [activeCategory, setActiveCategory] = useState<string>('Semua');
  const [quickViewProduct, setQuickViewProduct] = useState<Product | null>(null);
  const [selectedSize, setSelectedSize] = useState<string>('');
  const [isAnimating, setIsAnimating] = useState(false);
  const gridRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const filteredProducts =
    activeCategory === 'Semua'
      ? products
      : products.filter((p) => p.category === activeCategory);

  const handleCategoryChange = (cat: string) => {
    if (cat === activeCategory) return;
    setIsAnimating(true);
    setTimeout(() => {
      setActiveCategory(cat);
      setIsAnimating(false);
    }, 200);
  };

  const formatPrice = (price: number) => `Rp${price.toLocaleString('id-ID')}`;

  return (
    <>
      <PageHeader title="Koleksi Produk" />
      <section className="section-padding bg-[#F5F0E8]">
        <div className="content-max-width">
          {/* Category Filter Tabs */}
          <div className="flex flex-wrap justify-center gap-2 mb-10">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => handleCategoryChange(cat)}
                className={`font-body font-medium text-[0.9375rem] px-6 py-2.5 rounded transition-all duration-300 ${
                  activeCategory === cat
                    ? 'bg-[#8B6914] text-white'
                    : 'bg-transparent border-[1.5px] border-[#D4C9B8] text-[#1A1612] hover:border-[#8B6914]'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>

          {/* Product Grid */}
          <div
            ref={gridRef}
            className={`grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 transition-opacity duration-300 ${
              isAnimating ? 'opacity-0' : 'opacity-100'
            }`}
          >
            {filteredProducts.map((product) => (
              <ProductCard
                key={product.id}
                product={product}
                onQuickView={setQuickViewProduct}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Quick View Modal */}
      {quickViewProduct && (
        <div
          className="fixed inset-0 z-[200] flex items-center justify-center p-4"
          onClick={() => {
            setQuickViewProduct(null);
            setSelectedSize('');
          }}
        >
          <div className="absolute inset-0 bg-[rgba(26,22,18,0.7)]" />
          <div
            className="relative bg-white rounded-xl p-6 md:p-8 max-w-[900px] w-full max-h-[90vh] overflow-y-auto shadow-[0_25px_50px_rgba(26,22,18,0.25)]"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              onClick={() => {
                setQuickViewProduct(null);
                setSelectedSize('');
              }}
              className="absolute top-4 right-4 w-10 h-10 rounded-full bg-[rgba(26,22,18,0.1)] flex items-center justify-center hover:bg-[rgba(26,22,18,0.2)] transition-colors"
            >
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#1A1612" strokeWidth="2" strokeLinecap="round">
                <line x1="18" y1="6" x2="6" y2="18" />
                <line x1="6" y1="6" x2="18" y2="18" />
              </svg>
            </button>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="aspect-[3/4] rounded-lg overflow-hidden">
                <img
                  src={quickViewProduct.image}
                  alt={quickViewProduct.name}
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="flex flex-col">
                <h3 className="font-display font-medium text-[1.5rem] text-[#1A1612]">
                  {quickViewProduct.name}
                </h3>
                <div className="flex items-center gap-3 mt-2">
                  <span className="font-body font-semibold text-[1.25rem] text-[#8B6914]">
                    {formatPrice(quickViewProduct.price)}
                  </span>
                  {quickViewProduct.originalPrice && (
                    <span className="font-body text-[0.875rem] text-[rgba(26,22,18,0.4)] line-through">
                      {formatPrice(quickViewProduct.originalPrice)}
                    </span>
                  )}
                </div>
                <div className="flex items-center gap-2 mt-2">
                  {Array.from({ length: 5 }).map((_, i) => (
                    <svg key={i} width="14" height="14" viewBox="0 0 24 24" fill={i < quickViewProduct.rating ? '#8B6914' : '#D4C9B8'}>
                      <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
                    </svg>
                  ))}
                  <span className="font-body text-[0.75rem] text-[rgba(26,22,18,0.5)]">
                    ({quickViewProduct.reviews} ulasan)
                  </span>
                </div>
                <p className="mt-4 font-body text-[0.9375rem] text-[rgba(26,22,18,0.7)] leading-relaxed">
                  {quickViewProduct.description}
                </p>
                {quickViewProduct.sizes && (
                  <div className="mt-5">
                    <span className="font-body font-medium text-[0.875rem] text-[#1A1612]">Ukuran:</span>
                    <div className="flex gap-2 mt-2">
                      {quickViewProduct.sizes.map((size) => (
                        <button
                          key={size}
                          onClick={() => setSelectedSize(size)}
                          className={`w-10 h-10 rounded border font-body font-medium text-[0.875rem] transition-colors ${
                            selectedSize === size
                              ? 'bg-[#8B6914] text-white border-[#8B6914]'
                              : 'border-[#D4C9B8] text-[#1A1612] hover:border-[#8B6914]'
                          }`}
                        >
                          {size}
                        </button>
                      ))}
                    </div>
                  </div>
                )}
                <div className="mt-auto pt-6 flex flex-col gap-3">
                  <a
                    href={`https://wa.me/6281234567890?text=Halo%20Husein%20Batik,%20saya%20ingin%20memesan%20${encodeURIComponent(quickViewProduct.name)}${selectedSize ? `%20ukuran%20${selectedSize}` : ''}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-[#8B6914] text-white font-body font-semibold text-[0.9375rem] px-6 py-3 rounded text-center hover:bg-[#7A5C10] transition-colors shadow-[0_2px_8px_rgba(139,105,20,0.2)]"
                  >
                    Pesan via WhatsApp
                  </a>
                  <button
                    onClick={() => {
                      setQuickViewProduct(null);
                      setSelectedSize('');
                    }}
                    className="border-[1.5px] border-[#8B6914] text-[#8B6914] font-body font-semibold text-[0.9375rem] px-6 py-3 rounded hover:bg-[#8B6914] hover:text-white transition-colors"
                  >
                    Tutup
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
