import { useState, useEffect, useRef } from 'react';
import PageHeader from '@/components/PageHeader';
import SectionHeader from '@/components/SectionHeader';

export default function ContactPage() {
  const [formState, setFormState] = useState<'idle' | 'submitting' | 'success'>('idle');
  const [formData, setFormData] = useState({ name: '', email: '', phone: '', message: '' });
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const left = entry.target.querySelector('.contact-left');
            const right = entry.target.querySelector('.contact-right');
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
      { threshold: 0.15 }
    );

    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setFormState('submitting');
    setTimeout(() => {
      setFormState('success');
    }, 1500);
  };

  const contactInfo = [
    {
      icon: (
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#8B6914" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07 19.5 19.5 0 01-6-6 19.79 19.79 0 01-3.07-8.67A2 2 0 014.11 2h3a2 2 0 012 1.72 12.84 12.84 0 00.7 2.81 2 2 0 01-.45 2.11L8.09 9.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45 12.84 12.84 0 002.81.7A2 2 0 0122 16.92z" />
        </svg>
      ),
      label: 'Telepon / WhatsApp',
      value: '+62 812-3456-7890',
      href: 'https://wa.me/6281234567890',
    },
    {
      icon: (
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#8B6914" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <rect x="2" y="4" width="20" height="16" rx="2" />
          <path d="M22 7l-8.97 5.7a1.94 1.94 0 01-2.06 0L2 7" />
        </svg>
      ),
      label: 'Email',
      value: 'info@huseinbatik.com',
      href: 'mailto:info@huseinbatik.com',
    },
    {
      icon: (
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#8B6914" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0118 0z" />
          <circle cx="12" cy="10" r="3" />
        </svg>
      ),
      label: 'Alamat',
      value: 'Jl. Batik Indah No. 45, Pekalongan, Jawa Tengah 51111',
    },
    {
      icon: (
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#8B6914" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <circle cx="12" cy="12" r="10" />
          <polyline points="12 6 12 12 16 14" />
        </svg>
      ),
      label: 'Jam Operasional',
      value: 'Senin - Sabtu, 08.00 - 17.00 WIB',
    },
  ];

  return (
    <>
      <PageHeader title="Hubungi Kami" />
      <section ref={sectionRef} className="section-padding bg-[#F5F0E8]">
        <div className="content-max-width">
          <div className="grid grid-cols-1 lg:grid-cols-[45%_55%] gap-8 lg:gap-16">
            {/* Left - Contact Info */}
            <div
              className="contact-left opacity-0 -translate-x-10 transition-all duration-[1.2s]"
              style={{ transitionTimingFunction: 'cubic-bezier(0.16, 1, 0.3, 1)' }}
            >
              <SectionHeader
                label="Kontak"
                heading="Mari Berbincang"
                subtext="Kami siap membantu Anda memilih batik terbaik. Hubungi kami melalui WhatsApp atau isi formulir di bawah."
                align="left"
                className="!text-left"
              />

              <div className="space-y-4 mt-8">
                {contactInfo.map((info) => (
                  <a
                    key={info.label}
                    href={info.href}
                    className="flex items-center gap-4 bg-white rounded-lg p-5 shadow-[0_1px_3px_rgba(26,22,18,0.08)] hover:shadow-[0_4px_12px_rgba(26,22,18,0.08)] transition-shadow"
                  >
                    <div className="w-11 h-11 rounded-full bg-[rgba(139,105,20,0.1)] flex items-center justify-center shrink-0">
                      {info.icon}
                    </div>
                    <div>
                      <p className="font-body font-medium text-[0.75rem] text-[rgba(26,22,18,0.5)] uppercase tracking-wide">
                        {info.label}
                      </p>
                      <p className="font-body font-medium text-[1rem] text-[#1A1612] mt-0.5">
                        {info.value}
                      </p>
                    </div>
                  </a>
                ))}
              </div>

              {/* Social Links */}
              <div className="mt-8">
                <p className="font-body font-semibold text-[0.9375rem] text-[#1A1612] mb-3">
                  Ikuti Kami
                </p>
                <div className="flex gap-3">
                  {['Instagram', 'Facebook', 'TikTok', 'YouTube'].map((social) => (
                    <a
                      key={social}
                      href="#"
                      aria-label={social}
                      className="w-10 h-10 rounded-full bg-[rgba(139,105,20,0.1)] flex items-center justify-center text-[#8B6914] hover:bg-[#8B6914] hover:text-white transition-colors"
                    >
                      {social === 'Instagram' && (
                        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                          <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
                          <circle cx="12" cy="12" r="5" />
                          <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
                        </svg>
                      )}
                      {social === 'Facebook' && (
                        <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
                          <path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z" />
                        </svg>
                      )}
                      {social === 'TikTok' && (
                        <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
                          <path d="M19.59 6.69a4.83 4.83 0 01-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 01-2.88 2.5 2.89 2.89 0 01-2.89-2.89 2.89 2.89 0 012.89-2.89c.28 0 .54.04.79.1v-3.5a6.37 6.37 0 00-.79-.05A6.34 6.34 0 003.15 15.2a6.34 6.34 0 0010.24 4.97v-7.03a8.48 8.48 0 004.92 1.57V11.3a4.85 4.85 0 01-3.77-4.25l.05-0.36z" />
                        </svg>
                      )}
                      {social === 'YouTube' && (
                        <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
                          <path d="M22.54 6.42a2.78 2.78 0 00-1.94-2C18.88 4 12 4 12 4s-6.88 0-8.6.46a2.78 2.78 0 00-1.94 2A29 29 0 001 11.75a29 29 0 00.46 5.33A2.78 2.78 0 003.4 19.13c1.72.46 8.6.46 8.6.46s6.88 0 8.6-.46a2.78 2.78 0 001.94-2 29 29 0 00.46-5.25 29 29 0 00-.46-5.46zM9.75 15.02V8.48l5.75 3.27-5.75 3.27z" />
                        </svg>
                      )}
                    </a>
                  ))}
                </div>
              </div>
            </div>

            {/* Right - Contact Form */}
            <div
              className="contact-right opacity-0 translate-x-10 transition-all duration-[1.2s]"
              style={{ transitionTimingFunction: 'cubic-bezier(0.16, 1, 0.3, 1)' }}
            >
              <div className="bg-white rounded-lg p-6 md:p-8 shadow-[0_1px_3px_rgba(26,22,18,0.08)]">
                {formState === 'success' ? (
                  <div className="text-center py-12">
                    <svg width="48" height="48" viewBox="0 0 48 48" fill="none" className="mx-auto mb-4">
                      <circle cx="24" cy="24" r="22" stroke="#8B6914" strokeWidth="2" />
                      <path d="M14 24l7 7 13-13" stroke="#8B6914" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                    <p className="font-body font-medium text-[1rem] text-[#1A1612]">
                      Terima kasih! Pesan Anda telah terkirim.
                    </p>
                    <p className="font-body text-[0.875rem] text-[rgba(26,22,18,0.6)] mt-2">
                      Kami akan menghubungi Anda segera.
                    </p>
                  </div>
                ) : (
                  <>
                    <h3 className="font-display font-medium text-[1.25rem] text-[#1A1612] mb-6">
                      Kirim Pesan
                    </h3>
                    <form onSubmit={handleSubmit} className="space-y-4">
                      <div>
                        <label className="block font-body font-medium text-[0.875rem] text-[#1A1612] mb-1.5">
                          Nama Lengkap
                        </label>
                        <input
                          type="text"
                          required
                          value={formData.name}
                          onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                          className="w-full border-[1.5px] border-[#D4C9B8] rounded px-4 py-3 font-body text-[1rem] text-[#1A1612] placeholder:text-[rgba(26,22,18,0.35)] focus:border-[#8B6914] focus:shadow-[0_0_0_3px_rgba(139,105,20,0.1)] outline-none transition-all"
                          placeholder="Nama Anda"
                        />
                      </div>
                      <div>
                        <label className="block font-body font-medium text-[0.875rem] text-[#1A1612] mb-1.5">
                          Email
                        </label>
                        <input
                          type="email"
                          required
                          value={formData.email}
                          onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                          className="w-full border-[1.5px] border-[#D4C9B8] rounded px-4 py-3 font-body text-[1rem] text-[#1A1612] placeholder:text-[rgba(26,22,18,0.35)] focus:border-[#8B6914] focus:shadow-[0_0_0_3px_rgba(139,105,20,0.1)] outline-none transition-all"
                          placeholder="email@anda.com"
                        />
                      </div>
                      <div>
                        <label className="block font-body font-medium text-[0.875rem] text-[#1A1612] mb-1.5">
                          Nomor Telepon
                        </label>
                        <input
                          type="tel"
                          required
                          value={formData.phone}
                          onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                          className="w-full border-[1.5px] border-[#D4C9B8] rounded px-4 py-3 font-body text-[1rem] text-[#1A1612] placeholder:text-[rgba(26,22,18,0.35)] focus:border-[#8B6914] focus:shadow-[0_0_0_3px_rgba(139,105,20,0.1)] outline-none transition-all"
                          placeholder="0812-3456-7890"
                        />
                      </div>
                      <div>
                        <label className="block font-body font-medium text-[0.875rem] text-[#1A1612] mb-1.5">
                          Pesan
                        </label>
                        <textarea
                          required
                          rows={5}
                          value={formData.message}
                          onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                          className="w-full border-[1.5px] border-[#D4C9B8] rounded px-4 py-3 font-body text-[1rem] text-[#1A1612] placeholder:text-[rgba(26,22,18,0.35)] focus:border-[#8B6914] focus:shadow-[0_0_0_3px_rgba(139,105,20,0.1)] outline-none transition-all resize-none"
                          placeholder="Tulis pesan Anda di sini..."
                        />
                      </div>
                      <button
                        type="submit"
                        disabled={formState === 'submitting'}
                        className="w-full bg-[#8B6914] text-white font-body font-semibold text-[0.9375rem] px-6 py-3.5 rounded hover:bg-[#7A5C10] transition-colors shadow-[0_2px_8px_rgba(139,105,20,0.2)] disabled:opacity-70 disabled:cursor-not-allowed"
                      >
                        {formState === 'submitting' ? 'Mengirim...' : 'Kirim Pesan'}
                      </button>
                    </form>
                  </>
                )}
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
