import { useEffect, useRef } from 'react';
import SectionHeader from '@/components/SectionHeader';

const features = [
  {
    icon: (
      <svg width="48" height="48" viewBox="0 0 48 48" fill="none" stroke="#8B6914" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M24 4C12 4 8 14 8 20c0 8 6 16 16 24 10-8 16-16 16-24 0-6-4-16-16-16z" />
        <path d="M24 12v8M20 16h8" />
      </svg>
    ),
    title: '100% Handmade',
    description:
      'Setiap kain batik kami dibuat secara manual oleh pengrajin berpengalaman menggunakan teknik tradisional wax-resist dyeing.',
  },
  {
    icon: (
      <svg width="48" height="48" viewBox="0 0 48 48" fill="none" stroke="#8B6914" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M24 4L6 14v20l18 10 18-10V14L24 4z" />
        <path d="M24 24v18M24 24L6 14M24 24l18-10" />
        <path d="M12 17l12 7 12-7" />
      </svg>
    ),
    title: 'Kualitas Premium',
    description:
      'Bahan katun dan sutra pilihan dengan pewarna alami yang aman dan ramah lingkungan, tahan lama dan nyaman dipakai.',
  },
  {
    icon: (
      <svg width="48" height="48" viewBox="0 0 48 48" fill="none" stroke="#8B6914" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <rect x="6" y="18" width="36" height="22" rx="2" />
        <path d="M14 18V12a10 10 0 0120 0v6" />
        <circle cx="24" cy="30" r="3" />
        <path d="M24 33v3" />
      </svg>
    ),
    title: 'Pengiriman Aman',
    description:
      'Kami kirim ke seluruh Indonesia dengan packaging khusus yang melindungi kain batik Anda dari kerusakan selama perjalanan.',
  },
];

export default function KenapaMemilihKami() {
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const cards = entry.target.querySelectorAll('.feature-card');
            cards.forEach((card, i) => {
              setTimeout(() => {
                (card as HTMLElement).style.opacity = '1';
                (card as HTMLElement).style.transform = 'translateY(0)';
              }, i * 150);
            });
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
        <SectionHeader
          label="Mengapa Kami"
          heading="Keunggulan Husein Batik"
          subtext="Komitmen kami untuk melestarikan dan menghadirkan batik berkualitas tertinggi kepada Anda."
        />
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
          {features.map((feature, i) => (
            <div
              key={i}
              className="feature-card text-center p-6 opacity-0 translate-y-10 transition-all duration-700"
              style={{ transitionTimingFunction: 'cubic-bezier(0.16, 1, 0.3, 1)' }}
            >
              <div className="flex justify-center mb-4">{feature.icon}</div>
              <h3 className="font-display font-medium text-[1.25rem] text-[#1A1612] mb-2">
                {feature.title}
              </h3>
              <p className="font-body text-[0.9375rem] text-[rgba(26,22,18,0.6)] leading-relaxed">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
