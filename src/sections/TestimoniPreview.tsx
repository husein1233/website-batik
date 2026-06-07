import SectionHeader from '@/components/SectionHeader';
import Stars from '@/components/Stars';
import { testimonials } from '@/data/testimonials';

export default function TestimoniPreview() {
  // Duplicate for seamless loop
  const allTestimonials = [...testimonials, ...testimonials];

  return (
    <section className="py-20 bg-[#E8DFD0] overflow-hidden">
      <div className="content-max-width mb-10">
        <SectionHeader
          label="Apa Kata Mereka"
          heading="Testimoni Pelanggan"
          subtext="Pengalaman nyata dari pelanggan setia Husein Batik."
        />
      </div>

      {/* Infinite Ticker */}
      <div className="relative">
        <div className="flex ticker-animate" style={{ width: 'max-content' }}>
          {allTestimonials.map((t, i) => (
            <div
              key={`${t.id}-${i}`}
              className="w-[380px] shrink-0 mx-3 bg-white rounded-lg p-6 shadow-[0_1px_3px_rgba(26,22,18,0.08)]"
            >
              <Stars rating={t.rating} />
              <p className="mt-3 font-display italic text-[1.125rem] text-[#1A1612] leading-[1.5] text-balance">
                &ldquo;{t.quote}&rdquo;
              </p>
              <div className="mt-4 pt-3 border-t border-[#D4C9B8]">
                <p className="font-body font-semibold text-[0.9375rem] text-[#1A1612]">
                  {t.name}
                </p>
                <p className="font-body text-[0.75rem] text-[rgba(26,22,18,0.5)]">
                  {t.location}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="content-max-width text-center mt-10">
        <a
          href="/testimoni"
          className="inline-flex items-center gap-2 font-body font-medium text-[0.9375rem] text-[#1A1612] hover:text-[#8B6914] transition-colors group"
          onClick={(e) => {
            e.preventDefault();
            window.location.href = '/testimoni';
          }}
        >
          Lihat Semua Testimoni
          <svg
            width="16"
            height="16"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="group-hover:translate-x-1 transition-transform"
          >
            <line x1="5" y1="12" x2="19" y2="12" />
            <polyline points="12 5 19 12 12 19" />
          </svg>
        </a>
      </div>
    </section>
  );
}
