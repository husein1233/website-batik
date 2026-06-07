import { useState, useEffect, useRef } from 'react';
import PageHeader from '@/components/PageHeader';
import SectionHeader from '@/components/SectionHeader';
import Stars from '@/components/Stars';
import { testimonials } from '@/data/testimonials';

const stats = [
  { value: 500, suffix: '+', label: 'Pelanggan Puas' },
  { value: 4.9, suffix: '', label: 'Rating Rata-rata', isDecimal: true },
  { value: 1200, suffix: '+', label: 'Produk Terjual' },
  { value: 15, suffix: '', label: 'Tahun Berdiri' },
];

export default function TestimonialsPage() {
  const [counts, setCounts] = useState(stats.map(() => 0));
  const sectionRef = useRef<HTMLElement>(null);
  const statsRef = useRef<HTMLDivElement>(null);
  const cardsRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            // Animate stats
            stats.forEach((stat, i) => {
              const duration = 1500;
              const steps = 60;
              const increment = stat.value / steps;
              let current = 0;
              const timer = setInterval(() => {
                current += increment;
                if (current >= stat.value) {
                  current = stat.value;
                  clearInterval(timer);
                }
                setCounts((prev) => {
                  const next = [...prev];
                  next[i] = stat.isDecimal ? Math.round(current * 10) / 10 : Math.floor(current);
                  return next;
                });
              }, duration / steps);
            });
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.3 }
    );

    if (statsRef.current) observer.observe(statsRef.current);
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const cards = entry.target.querySelectorAll('.testimonial-card');
            cards.forEach((card, i) => {
              setTimeout(() => {
                (card as HTMLElement).style.opacity = '1';
                (card as HTMLElement).style.transform = 'translateY(0)';
              }, i * 120);
            });
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.1 }
    );

    if (cardsRef.current) observer.observe(cardsRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <>
      <PageHeader title="Testimoni Pelanggan" />
      <section ref={sectionRef} className="section-padding bg-[#F5F0E8]">
        <div className="content-max-width max-w-[1000px]">
          <SectionHeader
            label="Ulasan"
            heading="Apa Kata Mereka?"
            subtext="Baca pengalaman pelanggan yang telah mempercayakan kebutuhan batiknya kepada Husein Batik."
          />

          {/* Stats Bar */}
          <div
            ref={statsRef}
            className="flex flex-wrap justify-center gap-6 lg:gap-12 my-10 p-6 bg-[#E8DFD0] rounded-lg"
          >
            {stats.map((stat, i) => (
              <div key={stat.label} className="text-center min-w-[120px]">
                <p className="font-display font-semibold text-[2rem] text-[#8B6914]">
                  {stat.isDecimal ? counts[i].toFixed(1) : counts[i]}{stat.suffix}
                </p>
                <p className="font-body text-[0.875rem] text-[rgba(26,22,18,0.6)] mt-1">
                  {stat.label}
                </p>
              </div>
            ))}
          </div>

          {/* Testimonial Cards */}
          <div ref={cardsRef} className="space-y-6 mt-8">
            {testimonials.map((t) => (
              <div
                key={t.id}
                className="testimonial-card bg-white rounded-lg p-8 shadow-[0_1px_3px_rgba(26,22,18,0.08)] opacity-0 translate-y-8 transition-all duration-700"
                style={{ transitionTimingFunction: 'cubic-bezier(0.16, 1, 0.3, 1)' }}
              >
                <Stars rating={t.rating} size={16} />
                <p className="mt-4 font-display italic text-[1.25rem] text-[#1A1612] leading-[1.6]">
                  &ldquo;{t.quote}&rdquo;
                </p>
                <div className="mt-5 pt-4 border-t border-[#D4C9B8] flex items-center gap-4">
                  <div className="w-12 h-12 rounded-full bg-[#E8DFD0] flex items-center justify-center shrink-0">
                    <span className="font-body font-semibold text-[1.25rem] text-[#8B6914]">
                      {t.initial}
                    </span>
                  </div>
                  <div>
                    <p className="font-body font-semibold text-[1rem] text-[#1A1612]">
                      {t.name}
                    </p>
                    <p className="font-body text-[0.875rem] text-[rgba(26,22,18,0.5)]">
                      {t.location}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
