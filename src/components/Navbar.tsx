import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';

const navLinks = [
  { label: 'Beranda', path: '/' },
  { label: 'Tentang Kami', path: '/tentang-kami' },
  { label: 'Produk', path: '/produk' },
  { label: 'Galeri', path: '/galeri' },
  { label: 'Testimoni', path: '/testimoni' },
  { label: 'Kontak', path: '/kontak' },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 80);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    setMobileOpen(false);
  }, [location.pathname]);

  useEffect(() => {
    if (mobileOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [mobileOpen]);

  return (
    <>
      <nav
        className={`fixed top-0 left-0 right-0 z-[100] transition-all duration-300 ${
          scrolled
            ? 'bg-[rgba(245,240,232,0.95)] backdrop-blur-[12px] border-b border-[#D4C9B8] shadow-sm'
            : 'bg-transparent'
        }`}
      >
        <div className="content-max-width flex items-center justify-between h-16 lg:h-20">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-2 shrink-0">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" className="text-[#8B6914]">
              <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
            <span className="font-display text-[1.25rem] font-semibold text-[#8B6914] tracking-tight">
              HUSEIN
            </span>
          </Link>

          {/* Desktop Nav */}
          <div className="hidden lg:flex items-center gap-1">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                className={`font-body font-medium text-[0.9375rem] px-3 py-2 rounded transition-colors ${
                  location.pathname === link.path
                    ? 'text-[#8B6914] border-b-2 border-[#8B6914]'
                    : 'text-[#1A1612] hover:text-[#8B6914]'
                }`}
              >
                {link.label}
              </Link>
            ))}
          </div>

          {/* Desktop CTA */}
          <div className="hidden lg:flex items-center gap-3">
            <a
              href="https://wa.me/6281234567890?text=Halo%20Husein%20Batik,%20saya%20ingin%20memesan%20batik"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-[#8B6914] text-white font-body font-semibold text-[0.875rem] px-6 py-2.5 rounded hover:bg-[#7A5C10] transition-colors shadow-[0_2px_8px_rgba(139,105,20,0.2)]"
            >
              Pesan Sekarang
            </a>
          </div>

          {/* Mobile Hamburger */}
          <button
            className="lg:hidden flex flex-col gap-[5px] p-2"
            onClick={() => setMobileOpen(!mobileOpen)}
            aria-label="Toggle menu"
          >
            <span className={`w-6 h-[2px] bg-[#8B6914] transition-all duration-300 ${mobileOpen ? 'rotate-45 translate-y-[7px]' : ''}`} />
            <span className={`w-6 h-[2px] bg-[#8B6914] transition-all duration-300 ${mobileOpen ? 'opacity-0' : ''}`} />
            <span className={`w-6 h-[2px] bg-[#8B6914] transition-all duration-300 ${mobileOpen ? '-rotate-45 -translate-y-[7px]' : ''}`} />
          </button>
        </div>
      </nav>

      {/* Mobile Menu Overlay */}
      {mobileOpen && (
        <div className="fixed inset-0 z-[99] bg-[#F5F0E8] flex flex-col items-center justify-center gap-6 pt-20">
          {navLinks.map((link, i) => (
            <Link
              key={link.path}
              to={link.path}
              className={`font-display text-2xl font-medium transition-all duration-500 ${
                location.pathname === link.path ? 'text-[#8B6914]' : 'text-[#1A1612]'
              }`}
              style={{
                animation: `slideInRight 0.5s ease ${i * 0.08}s both`,
              }}
            >
              {link.label}
            </Link>
          ))}
          <a
            href="https://wa.me/6281234567890?text=Halo%20Husein%20Batik,%20saya%20ingin%20memesan%20batik"
            target="_blank"
            rel="noopener noreferrer"
            className="mt-4 bg-[#8B6914] text-white font-body font-semibold text-[0.875rem] px-8 py-3 rounded hover:bg-[#7A5C10] transition-colors"
            style={{
              animation: `slideInRight 0.5s ease ${navLinks.length * 0.08}s both`,
            }}
          >
            Pesan Sekarang
          </a>
          <style>{`
            @keyframes slideInRight {
              from { opacity: 0; transform: translateX(30px); }
              to { opacity: 1; transform: translateX(0); }
            }
          `}</style>
        </div>
      )}
    </>
  );
}
