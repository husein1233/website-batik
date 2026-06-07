import { useEffect, useRef, useState } from 'react';
import { Link } from 'react-router-dom';

export default function Hero() {
  const [loaded, setLoaded] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    setLoaded(true);
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <section className="relative w-full h-screen overflow-hidden">
      {/* Video Background */}
      <video
        ref={videoRef}
        autoPlay
        muted
        loop
        playsInline
        preload="metadata"
        poster="/assets/process-step-2.jpg"
        className="absolute inset-0 w-full h-full object-cover"
      >
        <source src="/assets/hero-batik-process.mp4" type="video/mp4" />
      </video>

      {/* Overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-[rgba(26,22,18,0.35)] to-[rgba(26,22,18,0.6)]" />

      {/* Content */}
      <div className="relative z-10 flex flex-col items-center justify-center h-full px-4 text-center">
        <div className="max-w-[800px] mt-16">
          {/* Label */}
          <span
            className={`inline-block font-body font-medium text-[0.75rem] uppercase tracking-[0.2em] text-[rgba(245,240,232,0.7)] transition-all duration-800 ${
              loaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
            }`}
            style={{ transitionDelay: '0.5s' }}
          >
            SINCE 2010
          </span>

          {/* Headline */}
          <h1
            className={`mt-5 font-display font-medium text-[clamp(3rem,6vw,5.5rem)] leading-[1.05] tracking-[-0.02em] text-white transition-all duration-1000 ${
              loaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
            }`}
            style={{ transitionDelay: '0.7s' }}
          >
            Warisan Batik
            <br />
            Indonesia
          </h1>

          {/* Subtitle */}
          <p
            className={`mt-5 font-body text-[1.125rem] text-[rgba(245,240,232,0.85)] leading-relaxed max-w-[560px] mx-auto transition-all duration-800 ${
              loaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-5'
            }`}
            style={{ transitionDelay: '1.2s' }}
          >
            Koleksi batik premium hasil tangan pengrajin terbaik Nusantara. Setiap motif menceritakan warisan budaya yang tak ternilai.
          </p>

          {/* CTA Row */}
          <div
            className={`mt-8 flex flex-col sm:flex-row items-center justify-center gap-4 transition-all duration-800 ${
              loaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-5'
            }`}
            style={{ transitionDelay: '1.5s' }}
          >
            <Link
              to="/produk"
              className="bg-[#8B6914] text-white font-body font-semibold text-[0.9375rem] px-8 py-3.5 rounded hover:bg-[#7A5C10] transition-colors shadow-[0_2px_8px_rgba(139,105,20,0.2)]"
            >
              Jelajahi Koleksi
            </Link>
            <a
              href="https://wa.me/6281234567890?text=Halo%20Husein%20Batik"
              target="_blank"
              rel="noopener noreferrer"
              className="border-[1.5px] border-white text-white font-body font-semibold text-[0.9375rem] px-8 py-3.5 rounded hover:bg-white hover:text-[#1A1612] transition-colors"
            >
              Hubungi Kami
            </a>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div
        className={`absolute bottom-8 left-1/2 -translate-x-1/2 transition-opacity duration-500 ${
          scrolled ? 'opacity-0' : 'opacity-100'
        }`}
      >
        <div className="bounce-animate">
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="rgba(245,240,232,0.5)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <polyline points="6 9 12 15 18 9" />
          </svg>
        </div>
      </div>
    </section>
  );
}
