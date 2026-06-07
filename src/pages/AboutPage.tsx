import { useEffect, useRef } from 'react';
import PageHeader from '@/components/PageHeader';
import SectionHeader from '@/components/SectionHeader';

export default function AboutPage() {
  const storyRef = useRef<HTMLDivElement>(null);
  const visiRef = useRef<HTMLDivElement>(null);
  const processRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  useEffect(() => {
    const observers: IntersectionObserver[] = [];
    const setupObserver = (ref: React.RefObject<HTMLDivElement | null>, selector: string, stagger = 0) => {
      if (!ref.current) return;
      const observer = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              const items = entry.target.querySelectorAll(selector);
              items.forEach((item, i) => {
                setTimeout(() => {
                  (item as HTMLElement).style.opacity = '1';
                  (item as HTMLElement).style.transform = 'translateY(0)';
                }, i * stagger);
              });
              observer.unobserve(entry.target);
            }
          });
        },
        { threshold: 0.15 }
      );
      observer.observe(ref.current);
      observers.push(observer);
    };

    setupObserver(storyRef, '.reveal-item', 150);
    setupObserver(visiRef, '.reveal-item', 120);
    setupObserver(processRef, '.reveal-item', 150);

    return () => observers.forEach((o) => o.disconnect());
  }, []);

  const processSteps = [
    {
      num: '01',
      title: 'Pembuatan Pola',
      desc: 'Desainer membuat motif tradisional atau modern pada kain putih menggunakan pensil.',
      image: '/assets/process-step-1.jpg',
    },
    {
      num: '02',
      title: 'Penulisan Wax',
      desc: 'Pengrajin mengaplikasikan lilin panas menggunakan canting untuk membentuk pola.',
      image: '/assets/process-step-2.jpg',
    },
    {
      num: '03',
      title: 'Pewarnaan',
      desc: 'Kain direndam dalam larutan pewarna alami dari tumbuhan untuk memberikan warna indah.',
      image: '/assets/process-step-3.jpg',
    },
    {
      num: '04',
      title: 'Pelepasan Wax',
      desc: 'Lilin dilelehkan untuk mengungkapkan motif cantik yang tersembunyi di baliknya.',
      image: '/assets/process-step-4.jpg',
    },
  ];

  return (
    <>
      <PageHeader title="Tentang Kami" />

      {/* Our Story */}
      <section className="section-padding bg-[#F5F0E8]">
        <div ref={storyRef} className="content-max-width">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16 items-center">
            <div className="reveal-item opacity-0 -translate-x-10 transition-all duration-[1.2s]" style={{ transitionTimingFunction: 'cubic-bezier(0.16, 1, 0.3, 1)' }}>
              <div className="aspect-[4/3] rounded-lg overflow-hidden">
                <img src="/assets/about-workshop.jpg" alt="Workshop batik Husein Batik" loading="lazy" className="w-full h-full object-cover" />
              </div>
            </div>
            <div className="reveal-item opacity-0 translate-x-10 transition-all duration-[1.2s]" style={{ transitionTimingFunction: 'cubic-bezier(0.16, 1, 0.3, 1)' }}>
              <h2 className="font-display font-medium text-[clamp(1.5rem,2.5vw,2.5rem)] text-[#1A1612] leading-[1.15]">
                Kisah Husein Batik
              </h2>
              <p className="mt-4 font-body text-[1rem] text-[rgba(26,22,18,0.75)] leading-[1.7]">
                Husein Batik berdiri sejak tahun 2010 di Pekalongan, kota yang dijuluki sebagai &lsquo;Kota Batik&rsquo;. Bermula dari sebuah bengkel kecil di gang sempit, kami tumbuh menjadi salah satu penyedia batik premium yang dipercaya pelanggan dari berbagai penjuru Indonesia.
              </p>
              <p className="mt-4 font-body text-[1rem] text-[rgba(26,22,18,0.75)] leading-[1.7]">
                Nama &lsquo;Husein&rsquo; diambil dari nama pendiri yang merupakan keturunan pengrajin batik generasi keempat. Warisan keluarga inilah yang mendorong kami untuk selalu menjaga kualitas dan keaslian setiap produk yang kami hasilkan.
              </p>
              <blockquote className="mt-6 pl-6 border-l-[3px] border-[#8B6914]">
                <p className="font-display italic text-[1.25rem] lg:text-[1.5rem] text-[#8B6914] leading-relaxed">
                  &ldquo;Batik adalah jendela menuju jiwa bangsa. Setiap motif adalah cerita, setiap warna adalah emosi.&rdquo;
                </p>
              </blockquote>
            </div>
          </div>
        </div>
      </section>

      {/* Visi Misi */}
      <section className="section-padding bg-[#E8DFD0]">
        <div ref={visiRef} className="content-max-width">
          <SectionHeader label="Arah Kami" heading="Visi & Misi" />

          {/* Visi Card */}
          <div className="reveal-item opacity-0 translate-y-10 transition-all duration-700 mt-8" style={{ transitionTimingFunction: 'cubic-bezier(0.16, 1, 0.3, 1)' }}>
            <div className="bg-white rounded-lg p-8 shadow-[0_1px_3px_rgba(26,22,18,0.08)] max-w-[800px] mx-auto">
              <div className="flex items-center gap-3 mb-4">
                <svg width="40" height="40" viewBox="0 0 48 48" fill="none" stroke="#8B6914" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                  <circle cx="24" cy="24" r="10" />
                  <circle cx="24" cy="24" r="4" />
                  <path d="M24 4v6M24 38v6M4 24h6M38 24h6" />
                </svg>
                <h3 className="font-display font-medium text-[1.5rem] text-[#1A1612]">Visi</h3>
              </div>
              <p className="font-body text-[1rem] text-[rgba(26,22,18,0.7)] leading-[1.7]">
                Menjadi toko batik online terpercaya yang menghubungkan pengrajin lokal Indonesia dengan pecinta batik di seluruh dunia, sambil terus melestarikan warisan budaya batik sebagai kekayaan tak ternilai bangsa.
              </p>
            </div>
          </div>

          {/* Misi Grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-8 max-w-[800px] mx-auto">
            {[
              { num: '01', title: 'Kualitas Terbaik', desc: 'Menyediakan produk batik dengan kualitas premium menggunakan bahan alami dan teknik tradisional yang terjaga.' },
              { num: '02', title: 'Pemberdayaan Pengrajin', desc: 'Berkolaborasi langsung dengan pengrajin lokal untuk memberikan nilai ekonomi yang adil dan memajukan kesejahteraan mereka.' },
              { num: '03', title: 'Edukasi & Inovasi', desc: 'Mengedukasi masyarakat tentang kekayaan budaya batik sambil terus berinovasi dalam desain yang relevan dengan gaya modern.' },
            ].map((misi) => (
              <div
                key={misi.num}
                className="reveal-item opacity-0 translate-y-10 transition-all duration-700 bg-white rounded-lg p-6 shadow-[0_1px_3px_rgba(26,22,18,0.08)]"
                style={{ transitionTimingFunction: 'cubic-bezier(0.16, 1, 0.3, 1)' }}
              >
                <span className="inline-flex items-center justify-center w-9 h-9 rounded-full bg-[#8B6914] text-white font-body font-semibold text-[1rem]">
                  {misi.num}
                </span>
                <h4 className="mt-3 font-display font-medium text-[1.125rem] text-[#1A1612]">
                  {misi.title}
                </h4>
                <p className="mt-2 font-body text-[0.9375rem] text-[rgba(26,22,18,0.6)] leading-relaxed">
                  {misi.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Our Process */}
      <section className="section-padding bg-[#F5F0E8]">
        <div ref={processRef} className="content-max-width">
          <SectionHeader
            label="Proses Kami"
            heading="Dari Kain hingga Karya"
            subtext="Mengenal tahapan pembuatan batik yang menjadi ciri khas produk Husein Batik."
          />
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 mt-12">
            {processSteps.map((step) => (
              <div
                key={step.num}
                className="reveal-item opacity-0 translate-y-10 transition-all duration-700"
                style={{ transitionTimingFunction: 'cubic-bezier(0.16, 1, 0.3, 1)' }}
              >
                <div className="aspect-[3/4] rounded-lg overflow-hidden">
                  <img src={step.image} alt={step.title} loading="lazy" className="w-full h-full object-cover" />
                </div>
                <span className="block mt-4 font-body font-semibold text-[0.75rem] text-[#8B6914] uppercase">
                  {step.num}
                </span>
                <h3 className="mt-1 font-display font-medium text-[1.25rem] text-[#1A1612]">
                  {step.title}
                </h3>
                <p className="mt-1 font-body text-[0.875rem] text-[rgba(26,22,18,0.6)] leading-relaxed">
                  {step.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
