import { Layout } from '@/components/layout/Layout';
import { HeroSection } from '@/components/home/HeroSection';
import { ServicesSection } from '@/components/home/ServicesSection';
import { ProductsSection } from '@/components/home/ProductsSection';
import { SourcingFlowSection } from '@/components/home/SourcingFlowSection';
import { ColdChainSection } from '@/components/home/ColdChainSection';
import { GlobalReachSection } from '@/components/home/GlobalReachSection';
import { ProcessSection } from '@/components/home/ProcessSection';
import { CTASection } from '@/components/home/CTASection';
import { FAQSection } from '@/components/home/FAQSection';

const Index = () => {
  return (
    <Layout>
      <HeroSection />
      <ServicesSection />
      <ProductsSection />
      <SourcingFlowSection />
      <ColdChainSection />
      <ProcessSection />
      <GlobalReachSection />
      
      <FAQSection />
      <CTASection />
    </Layout>
  );
};

export default Index;
