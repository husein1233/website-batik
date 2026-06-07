import Hero from '@/sections/Hero';
import KenapaMemilihKami from '@/sections/KenapaMemilihKami';
import ProdukUnggulan from '@/sections/ProdukUnggulan';
import TentangKamiPreview from '@/sections/TentangKamiPreview';
import TestimoniPreview from '@/sections/TestimoniPreview';
import CTABanner from '@/sections/CTABanner';

export default function HomePage() {
  return (
    <>
      <Hero />
      <KenapaMemilihKami />
      <ProdukUnggulan />
      <TentangKamiPreview />
      <TestimoniPreview />
      <CTABanner />
    </>
  );
}
