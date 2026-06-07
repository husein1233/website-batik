import { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import SectionHeader from '@/components/SectionHeader';

export default function TentangKamiPreview() {
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const left = entry.target.querySelector('.about-left');
            const right = entry.target.querySelector('.about-right');
            if (left) {
              (left as HTMLElement).style.opacity = '1';
              (left as HTMLElement).style.transform = 'translateX(0)';
            }
            if (right) {
              (right as HTMLElement).style.opacity = '1';
              (right as HTMLElement).style.transform = 'translateX(0)';
            }
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.2 }
    );

    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section ref={sectionRef} className="section-padding bg-[#F5F0E8]">
      <div className="content-max-width">
        <div className="grid grid-cols-1 lg:grid-cols-[55%_45%] gap-8 lg:gap-16 items-center">
          {/* Left - Image */}
          <div
            className="about-left opacity-0 -translate-x-10 transition-all duration-[1.2s]"
            style={{ transitionTimingFunction: 'cubic-bezier(0.16, 1, 0.3, 1)' }}
          >
            <div className="aspect-[4/5] rounded-lg overflow-hidden shadow-[0_4px_20px_rgba(26,22,18,0.1)]">
              <img
                src="/assets/about-workshop.jpg"
                alt="Workshop batik Husein Batik"
                loading="lazy"
                className="w-full h-full object-cover"
              />
            </div>
          </div>

          {/* Right - Content */}
          <div
            className="about-right opacity-0 translate-x-10 transition-all duration-[1.2s]"
            style={{ transitionTimingFunction: 'cubic-bezier(0.16, 1, 0.3, 1)' }}
          >
            <SectionHeader
              label="Cerita Kami"
              heading="Melestarikan Warisan Batik Indonesia"
              align="left"
              className="!text-left"
            />
            <div className="mt-6 space-y-4">
              <p className="font-body text-[1rem] text-[rgba(26,22,18,0.75)] leading-[1.7] max-w-[65ch]">
                Husein Batik didirikan pada tahun 2010 di Pekalongan, kota yang dikenal sebagai salah satu pusat batik terbaik di Indonesia. Kami berkomitmen untuk melestarikan seni batik tradisional sambil menghadirkan desain yang relevan dengan gaya modern.
              </p>
              <p className="font-body text-[1rem] text-[rgba(26,22,18,0.75)] leading-[1.7] max-w-[65ch]">
                Kolaborasi kami dengan pengrajin lokal memastikan bahwa setiap pembelian Anda turut mendukung ekonomi keluarga pengrajin batik dan melestarikan warisan budaya tak benda UNESCO ini.
              </p>
            </div>
            <div className="mt-8">
              <Link
                to="/tentang-kami"
                className="inline-block bg-[#8B6914] text-white font-body font-semibold text-[0.9375rem] px-8 py-3.5 rounded hover:bg-[#7A5C10] transition-colors shadow-[0_2px_8px_rgba(139,105,20,0.2)]"
              >
                Pelajari Lebih Lanjut
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
