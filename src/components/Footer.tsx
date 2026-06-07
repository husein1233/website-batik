import { Link } from 'react-router-dom';

const quickLinks = [
  { label: 'Beranda', path: '/' },
  { label: 'Tentang Kami', path: '/tentang-kami' },
  { label: 'Produk', path: '/produk' },
  { label: 'Galeri', path: '/galeri' },
  { label: 'Testimoni', path: '/testimoni' },
  { label: 'Kontak', path: '/kontak' },
];

const productLinks = [
  { label: 'Batik Pria', path: '/produk' },
  { label: 'Batik Wanita', path: '/produk' },
  { label: 'Aksesoris Batik', path: '/produk' },
];

export default function Footer() {
  return (
    <footer className="bg-[#1A1612] pt-16 pb-8">
      <div className="content-max-width">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 lg:gap-8">
          {/* Brand Column */}
          <div>
            <Link to="/" className="inline-block">
              <span className="font-display text-[1.5rem] font-semibold text-[#8B6914]">
                HUSEIN
              </span>
            </Link>
            <p className="mt-3 font-body text-[0.875rem] text-[rgba(245,240,232,0.7)] max-w-[250px] leading-relaxed">
              Batik Berkualitas, Warisan Indonesia
            </p>
            <div className="flex items-center gap-4 mt-5">
              {/* Instagram */}
              <a href="#" aria-label="Instagram" className="text-[rgba(245,240,232,0.6)] hover:text-white transition-colors">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
                  <circle cx="12" cy="12" r="5" />
                  <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
                </svg>
              </a>
              {/* Facebook */}
              <a href="#" aria-label="Facebook" className="text-[rgba(245,240,232,0.6)] hover:text-white transition-colors">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z" />
                </svg>
              </a>
              {/* TikTok */}
              <a href="#" aria-label="TikTok" className="text-[rgba(245,240,232,0.6)] hover:text-white transition-colors">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M19.59 6.69a4.83 4.83 0 01-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 01-2.88 2.5 2.89 2.89 0 01-2.89-2.89 2.89 2.89 0 012.89-2.89c.28 0 .54.04.79.1v-3.5a6.37 6.37 0 00-.79-.05A6.34 6.34 0 003.15 15.2a6.34 6.34 0 0010.24 4.97v-7.03a8.48 8.48 0 004.92 1.57V11.3a4.85 4.85 0 01-3.77-4.25l.05-0.36z" />
                </svg>
              </a>
              {/* YouTube */}
              <a href="#" aria-label="YouTube" className="text-[rgba(245,240,232,0.6)] hover:text-white transition-colors">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M22.54 6.42a2.78 2.78 0 00-1.94-2C18.88 4 12 4 12 4s-6.88 0-8.6.46a2.78 2.78 0 00-1.94 2A29 29 0 001 11.75a29 29 0 00.46 5.33A2.78 2.78 0 003.4 19.13c1.72.46 8.6.46 8.6.46s6.88 0 8.6-.46a2.78 2.78 0 001.94-2 29 29 0 00.46-5.25 29 29 0 00-.46-5.46zM9.75 15.02V8.48l5.75 3.27-5.75 3.27z" />
                </svg>
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-body font-semibold text-[0.875rem] text-white uppercase tracking-[0.1em] mb-4">
              Menu
            </h4>
            <ul className="space-y-2.5">
              {quickLinks.map((link) => (
                <li key={link.path}>
                  <Link
                    to={link.path}
                    className="font-body text-[0.875rem] text-[rgba(245,240,232,0.6)] hover:text-[#8B6914] transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Product Links */}
          <div>
            <h4 className="font-body font-semibold text-[0.875rem] text-white uppercase tracking-[0.1em] mb-4">
              Kategori Produk
            </h4>
            <ul className="space-y-2.5">
              {productLinks.map((link) => (
                <li key={link.label}>
                  <Link
                    to={link.path}
                    className="font-body text-[0.875rem] text-[rgba(245,240,232,0.6)] hover:text-[#8B6914] transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-body font-semibold text-[0.875rem] text-white uppercase tracking-[0.1em] mb-4">
              Hubungi Kami
            </h4>
            <ul className="space-y-3">
              <li className="font-body text-[0.875rem] text-[rgba(245,240,232,0.6)]">
                +62 812-3456-7890
              </li>
              <li className="font-body text-[0.875rem] text-[rgba(245,240,232,0.6)]">
                info@huseinbatik.com
              </li>
              <li className="font-body text-[0.875rem] text-[rgba(245,240,232,0.6)] leading-relaxed">
                Jl. Batik Indah No. 45, Pekalongan, Jawa Tengah
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-10 pt-6 border-t border-[rgba(245,240,232,0.1)] flex flex-col sm:flex-row justify-between items-center gap-2">
          <p className="font-body text-[0.75rem] text-[rgba(245,240,232,0.4)]">
            &copy; 2025 Husein Batik. All rights reserved.
          </p>
          <p className="font-body text-[0.75rem] text-[rgba(245,240,232,0.4)]">
            Crafted with love in Indonesia
          </p>
        </div>
      </div>
    </footer>
  );
}
