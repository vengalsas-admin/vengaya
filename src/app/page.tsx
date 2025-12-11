import { Metadata } from 'next';

import SecondaryNav from '@/components/navigation/secondary/SecondaryNav';
import Carousel from '@/components/carousel/Carousel';
import CardSection from '@/components/cardSection/CardSection';
import SolutionsSection from '@/components/solutionsSection/SolutionsSection';
import StatsCard from '@/components/animatedCounter/StatsCard';
import Testimonials from '@/components/testimonials/Testimonials';
import NewsletterSignup from '@/components/newsletterSignup/NewsletterSignup';

export const metadata: Metadata = {
  title: 'Inicio | VengaYa',
  description: 'Conoce nuestras soluciones financieras digitales. Rápido, seguro y confiable.',
};

export default function HomePage(): JSX.Element {
  return (
    <main id="main-content" role="main" tabIndex={-1}>
      <SecondaryNav />
      <Carousel />
      <CardSection />
      <SolutionsSection />
      <StatsCard />
      <Testimonials />
      <NewsletterSignup />
    </main>
  );
}
