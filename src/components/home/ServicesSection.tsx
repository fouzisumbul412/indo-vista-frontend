import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Ship, Plane, Truck, FileText, ThermometerSnowflake, ArrowRight } from 'lucide-react';
import { SectionHeading } from '@/components/shared/SectionHeading';
import { AnimatedCard } from '@/components/shared/AnimatedCard';

const services = [
  {
    icon: Ship,
    title: 'Sea Freight',
    description: 'Full container load (FCL) and less container load (LCL) services with global port coverage.',
  },
  {
    icon: Plane,
    title: 'Air Freight',
    description: 'Express and standard air cargo for time-sensitive perishable shipments worldwide.',
  },
  {
    icon: Truck,
    title: 'Road Transport',
    description: 'Refrigerated trucking and domestic logistics with real-time tracking.',
  },
  {
    icon: FileText,
    title: 'Customs & Documentation',
    description: 'Complete customs clearance, health certificates, and export documentation support.',
  },
  {
    icon: ThermometerSnowflake,
    title: 'Cold Chain Solutions',
    description: 'Temperature-controlled storage, reefer containers, and frozen cargo handling.',
  },
];

export const ServicesSection = () => {
  return (
    <section id="services" className="section-padding section-gradient">
      <div className="container-wide mx-auto">
        <SectionHeading
          badge="Our Services"
          title="Comprehensive Logistics Solutions"
          subtitle="End-to-end supply chain management for your food export needs, from sourcing to delivery."
        />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, index) => (
            <AnimatedCard key={service.title} delay={index * 0.1} className="p-6 group">
              <div className="w-14 h-14 rounded-xl bg-secondary/10 flex items-center justify-center mb-5 group-hover:bg-secondary group-hover:scale-110 transition-all duration-300">
                <service.icon className="w-7 h-7 text-secondary group-hover:text-secondary-foreground transition-colors" />
              </div>
              <h3 className="text-xl font-heading font-semibold text-foreground mb-3">
                {service.title}
              </h3>
              <p className="text-muted-foreground leading-relaxed mb-4">
                {service.description}
              </p>
              <Link
                to="/services"
                className="inline-flex items-center text-secondary font-medium text-sm group/link"
              >
                Learn More
                <ArrowRight className="w-4 h-4 ml-1 group-hover/link:translate-x-1 transition-transform" />
              </Link>
            </AnimatedCard>
          ))}
        </div>
      </div>
    </section>
  );
};
