import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Layout } from '@/components/layout/Layout';
import { SectionHeading } from '@/components/shared/SectionHeading';
import { Button } from '@/components/ui/button';
import { 
  Ship, Plane, Truck, FileText, ThermometerSnowflake, 
  Clock, MapPin, Shield, CheckCircle, ArrowRight 
} from 'lucide-react';

const services = [
  {
    id: 'sea-freight',
    icon: Ship,
    title: 'Sea Freight',
    description: 'Comprehensive ocean freight solutions for bulk and containerized cargo with global port coverage.',
    features: [
      'Full Container Load (FCL) services',
      'Less Container Load (LCL) options',
      'Reefer container booking',
      'Port-to-port and door-to-door delivery',
      'Real-time shipment tracking',
      'Competitive freight rates',
    ],
    useCases: 'Ideal for bulk frozen meat shipments, large spice orders, and regular export consignments where transit time flexibility exists.',
  },
  {
    id: 'air-freight',
    icon: Plane,
    title: 'Air Freight',
    description: 'Express and standard air cargo services for time-sensitive perishable shipments worldwide.',
    features: [
      'Express delivery options',
      'Temperature-controlled air cargo',
      'Airport-to-airport service',
      'Customs clearance assistance',
      'Same-day dispatch available',
      'Priority handling for perishables',
    ],
    useCases: 'Perfect for urgent orders, sample shipments, high-value seafood, and products requiring fast market delivery.',
  },
  {
    id: 'road-transport',
    icon: Truck,
    title: 'Road Transport',
    description: 'Refrigerated trucking and domestic logistics with reliable door-to-door service.',
    features: [
      'Reefer truck fleet',
      'Temperature monitoring',
      'GPS tracking',
      'Multi-city coverage',
      'Factory pickup service',
      'Port delivery service',
    ],
    useCases: 'Essential for inland sourcing, factory-to-port movement, and domestic distribution of imported goods.',
  },
  {
    id: 'customs',
    icon: FileText,
    title: 'Customs & Documentation',
    description: 'Complete customs clearance and export documentation support for hassle-free international trade.',
    features: [
      'Export customs clearance',
      'Health certificate processing',
      'Certificate of Origin',
      'Phytosanitary certificates',
      'Bill of Lading preparation',
      'Import documentation support',
    ],
    useCases: 'Critical for all international shipments, ensuring compliance with destination country requirements and smooth cargo release.',
  },
  {
    id: 'cold-chain',
    icon: ThermometerSnowflake,
    title: 'Cold Chain Solutions',
    description: 'End-to-end temperature-controlled logistics maintaining product integrity from origin to destination.',
    features: [
      'Cold storage facilities (-25°C to +25°C)',
      'Reefer container management',
      'Temperature data logging',
      'Blast freezing services',
      'Pre-shipment cooling',
      'Cold chain audit reports',
    ],
    useCases: 'Essential for all frozen meat, seafood, and temperature-sensitive products requiring unbroken cold chain integrity.',
  },
];

const whyChoose = [
  { icon: Clock, title: 'On-Time Delivery', description: 'Reliable schedules with minimal delays' },
  { icon: Shield, title: 'Quality Assurance', description: 'Rigorous checks at every stage' },
  { icon: MapPin, title: 'Global Network', description: '45+ countries, all major ports' },
  { icon: CheckCircle, title: 'Compliance', description: 'Full regulatory adherence' },
];

const Services = () => {
  return (
    <Layout>
      {/* Hero Section */}
      <section className="relative pt-32 pb-20 bg-primary text-primary-foreground">
        <div className="container-wide mx-auto px-4 md:px-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="max-w-3xl"
          >
            <span className="inline-block px-4 py-2 rounded-full bg-secondary/20 text-secondary text-sm font-semibold mb-6">
              Our Services
            </span>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-heading font-bold mb-6">
              Comprehensive{' '}
              <span className="text-secondary">Logistics Solutions</span>
            </h1>
            <p className="text-lg text-primary-foreground/80 leading-relaxed">
              From sea freight to cold chain management, we offer end-to-end logistics 
              services tailored for food exports. Experience seamless international trade 
              with our expert team.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-12 bg-secondary">
        <div className="container-wide mx-auto px-4 md:px-6">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {whyChoose.map((item, index) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="text-center"
              >
                <item.icon className="w-8 h-8 text-secondary-foreground mx-auto mb-2" />
                <h4 className="font-semibold text-secondary-foreground">{item.title}</h4>
                <p className="text-secondary-foreground/70 text-sm">{item.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Services Detail */}
      <section className="section-padding bg-background">
        <div className="container-wide mx-auto">
          <div className="space-y-16">
            {services.map((service, index) => (
              <motion.div
                key={service.id}
                id={service.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
                className={`grid lg:grid-cols-2 gap-12 items-center ${
                  index % 2 === 1 ? 'lg:grid-flow-col-dense' : ''
                }`}
              >
                <div className={index % 2 === 1 ? 'lg:col-start-2' : ''}>
                  <div className="flex items-center gap-4 mb-6">
                    <div className="w-14 h-14 rounded-xl bg-secondary/10 flex items-center justify-center">
                      <service.icon className="w-7 h-7 text-secondary" />
                    </div>
                    <h2 className="text-3xl font-heading font-bold">{service.title}</h2>
                  </div>
                  <p className="text-muted-foreground text-lg mb-6 leading-relaxed">
                    {service.description}
                  </p>
                  <div className="bg-card rounded-xl border border-border p-6 mb-6">
                    <h4 className="font-semibold mb-4">Key Features</h4>
                    <ul className="grid grid-cols-1 md:grid-cols-2 gap-2">
                      {service.features.map((feature) => (
                        <li key={feature} className="flex items-center gap-2 text-sm text-muted-foreground">
                          <CheckCircle className="w-4 h-4 text-secondary flex-shrink-0" />
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div className="bg-secondary/5 rounded-xl p-6">
                    <h4 className="font-semibold mb-2 text-secondary">Typical Use Cases</h4>
                    <p className="text-muted-foreground text-sm">{service.useCases}</p>
                  </div>
                </div>
                <div className={`relative ${index % 2 === 1 ? 'lg:col-start-1' : ''}`}>
                  <div className="rounded-2xl overflow-hidden shadow-elevated bg-muted h-[350px] flex items-center justify-center">
                    <service.icon className="w-32 h-32 text-muted-foreground/20" />
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-primary text-primary-foreground">
        <div className="container-wide mx-auto px-4 md:px-6 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h3 className="text-3xl font-heading font-bold mb-4">
              Ready to streamline your exports?
            </h3>
            <p className="text-primary-foreground/80 mb-8 max-w-2xl mx-auto">
              Let us handle the logistics while you focus on your business. 
              Get a customized quote for your specific requirements.
            </p>
            <Link to="/contact">
              <Button variant="hero" size="xl" className="group">
                Get a Quote
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Button>
            </Link>
          </motion.div>
        </div>
      </section>
    </Layout>
  );
};

export default Services;
