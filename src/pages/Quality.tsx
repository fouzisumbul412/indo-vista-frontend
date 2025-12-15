import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Layout } from '@/components/layout/Layout';
import { SectionHeading } from '@/components/shared/SectionHeading';
import { Button } from '@/components/ui/button';
import { 
  Shield, ThermometerSnowflake, Package, FileText, CheckCircle, 
  Award, ArrowRight, Snowflake, Box, Thermometer 
} from 'lucide-react';

const qualityFeatures = [
  {
    icon: Shield,
    title: 'HACCP Compliance',
    description: 'All our supplier facilities follow Hazard Analysis Critical Control Point protocols for food safety management.',
  },
  {
    icon: CheckCircle,
    title: 'FSSAI Standards',
    description: 'Products sourced from FSSAI-licensed facilities meeting Indian food safety regulations.',
  },
  {
    icon: Award,
    title: 'Quality Inspections',
    description: 'Multi-stage quality checks from sourcing to final packaging with detailed documentation.',
  },
  {
    icon: FileText,
    title: 'Traceability',
    description: 'Complete product traceability from farm to fork with batch-wise documentation.',
  },
];

const coldChainFeatures = [
  {
    icon: Snowflake,
    title: 'Deep Freeze Storage',
    temp: '-25°C to -18°C',
    description: 'For frozen meat, seafood, and other products requiring deep freeze conditions.',
  },
  {
    icon: ThermometerSnowflake,
    title: 'Chilled Storage',
    temp: '0°C to +4°C',
    description: 'For fresh products and items requiring refrigerated but not frozen conditions.',
  },
  {
    icon: Thermometer,
    title: 'Controlled Ambient',
    temp: '+15°C to +25°C',
    description: 'For spices, grains, and products requiring cool, dry storage conditions.',
  },
];

const packagingTypes = [
  { name: 'Vacuum Packs', description: 'Extended shelf life, reduced oxidation' },
  { name: 'Food-Grade Cartons', description: 'Corrugated boxes with PE lining' },
  { name: 'Poly-Lined Bags', description: 'For bulk spices and grains' },
  { name: 'IQF Packaging', description: 'Individual quick frozen products' },
  { name: 'Master Cartons', description: 'Export-grade outer packaging' },
  { name: 'Custom Packaging', description: 'Private label and retail packs' },
];

const certifications = [
  { name: 'HACCP', description: 'Food Safety Management' },
  { name: 'FSSAI', description: 'Food Safety Standards' },
  { name: 'APEDA', description: 'Agricultural Export' },
  { name: 'Spices Board', description: 'Spice Export Certification' },
  { name: 'MPEDA', description: 'Marine Products Export' },
  { name: 'ISO 22000', description: 'Food Safety Systems' },
];

const Quality = () => {
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
              Quality & Compliance
            </span>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-heading font-bold mb-6">
              Uncompromising{' '}
              <span className="text-secondary">Quality Standards</span>
            </h1>
            <p className="text-lg text-primary-foreground/80 leading-relaxed">
              From sourcing to delivery, every step is governed by stringent quality protocols. 
              We ensure your products meet international food safety and quality standards.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Quality & Food Safety */}
      <section className="section-padding bg-background">
        <div className="container-wide mx-auto">
          <SectionHeading
            badge="Food Safety"
            title="Quality Assurance Framework"
            subtitle="Comprehensive quality management ensuring the highest standards in food safety."
          />

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {qualityFeatures.map((feature, index) => (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-card rounded-xl border border-border p-6 hover:shadow-elevated transition-all"
              >
                <div className="w-12 h-12 rounded-xl bg-secondary/10 flex items-center justify-center mb-4">
                  <feature.icon className="w-6 h-6 text-secondary" />
                </div>
                <h3 className="text-lg font-heading font-semibold mb-2">{feature.title}</h3>
                <p className="text-muted-foreground text-sm leading-relaxed">{feature.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Cold Chain */}
      <section className="section-padding section-gradient">
        <div className="container-wide mx-auto">
          <SectionHeading
            badge="Cold Chain"
            title="Temperature-Controlled Excellence"
            subtitle="State-of-the-art cold chain infrastructure ensuring product integrity."
          />

          <div className="grid md:grid-cols-3 gap-6 mb-12">
            {coldChainFeatures.map((feature, index) => (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-card rounded-xl border border-border p-8 text-center hover:shadow-elevated transition-all"
              >
                <div className="w-16 h-16 rounded-full bg-accent/10 flex items-center justify-center mx-auto mb-4">
                  <feature.icon className="w-8 h-8 text-accent" />
                </div>
                <div className="text-3xl font-heading font-bold text-secondary mb-2">{feature.temp}</div>
                <h3 className="text-lg font-heading font-semibold mb-2">{feature.title}</h3>
                <p className="text-muted-foreground text-sm">{feature.description}</p>
              </motion.div>
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="bg-primary text-primary-foreground rounded-2xl p-8 lg:p-12"
          >
            <div className="grid lg:grid-cols-2 gap-8 items-center">
              <div>
                <h3 className="text-2xl font-heading font-bold mb-4">Reefer Container Expertise</h3>
                <p className="text-primary-foreground/80 mb-6">
                  Our team manages reefer container operations with precision, ensuring 
                  optimal temperature maintenance throughout the sea voyage. We work with 
                  major shipping lines and handle pre-trip inspections, temperature settings, 
                  and monitoring.
                </p>
                <ul className="space-y-2">
                  {['Pre-trip container inspection', 'Optimal temperature pre-cooling', 'Real-time temperature logging', 'Genset arrangement for ports'].map((item) => (
                    <li key={item} className="flex items-center gap-2 text-primary-foreground/90">
                      <CheckCircle className="w-4 h-4 text-secondary" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
              <div className="relative">
                <img
                  src="https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?q=80&w=2070&auto=format&fit=crop"
                  alt="Reefer containers at port"
                  className="rounded-xl shadow-elevated"
                />
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Packaging */}
      <section className="section-padding bg-background">
        <div className="container-wide mx-auto">
          <SectionHeading
            badge="Packaging"
            title="Export-Grade Packaging Solutions"
            subtitle="Professional packaging designed to maintain product quality during transit."
          />

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
            {packagingTypes.map((pkg, index) => (
              <motion.div
                key={pkg.name}
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.05 }}
                className="bg-card rounded-xl border border-border p-6 text-center hover:border-secondary/30 hover:shadow-medium transition-all"
              >
                <Box className="w-8 h-8 text-secondary mx-auto mb-3" />
                <h4 className="font-semibold text-sm mb-1">{pkg.name}</h4>
                <p className="text-xs text-muted-foreground">{pkg.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Certifications */}
      <section className="section-padding section-gradient">
        <div className="container-wide mx-auto">
          <SectionHeading
            badge="Certifications"
            title="Compliance & Certifications"
            subtitle="Fully licensed and certified for international food exports."
          />

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
            {certifications.map((cert, index) => (
              <motion.div
                key={cert.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.05 }}
                className="bg-card rounded-xl border border-border p-6 text-center hover:border-secondary/30 hover:shadow-medium transition-all"
              >
                <Award className="w-10 h-10 text-secondary mx-auto mb-3" />
                <h4 className="font-semibold">{cert.name}</h4>
                <p className="text-xs text-muted-foreground mt-1">{cert.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Documentation */}
      <section className="section-padding bg-background">
        <div className="container-wide mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <SectionHeading
                badge="Documentation"
                title="Complete Documentation Support"
                centered={false}
              />
              <p className="text-muted-foreground mb-6">
                We handle all export documentation requirements, ensuring smooth customs 
                clearance and compliance with destination country regulations.
              </p>
              <ul className="space-y-3">
                {[
                  'Health Certificate from competent authorities',
                  'Certificate of Origin (preferential and non-preferential)',
                  'Phytosanitary Certificate for plant products',
                  'Halal Certificate where required',
                  'Commercial Invoice and Packing List',
                  'Bill of Lading / Airway Bill',
                ].map((doc) => (
                  <li key={doc} className="flex items-center gap-2 text-muted-foreground">
                    <FileText className="w-4 h-4 text-secondary flex-shrink-0" />
                    {doc}
                  </li>
                ))}
              </ul>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="bg-card rounded-2xl border border-border p-8"
            >
              <h4 className="font-heading font-semibold text-xl mb-4">Need Documentation Assistance?</h4>
              <p className="text-muted-foreground mb-6">
                Our documentation team can guide you through the requirements for your 
                specific destination and product category.
              </p>
              <Link to="/contact">
                <Button variant="hero" className="group">
                  Contact Our Team
                  <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </Button>
              </Link>
            </motion.div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Quality;
