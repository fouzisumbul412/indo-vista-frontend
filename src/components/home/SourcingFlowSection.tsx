import { motion } from 'framer-motion';
import { SectionHeading } from '@/components/shared/SectionHeading';
import { 
  Users, Search, CheckCircle, Truck, Package, Award,
  ArrowRight, Leaf, ShieldCheck, Thermometer
} from 'lucide-react';

const sourcingSteps = [
  {
    step: '01',
    icon: Users,
    title: 'Partner Network',
    description: 'We work with a trusted network of quality farmers, fishermen, and certified processing facilities across India.',
    highlights: ['Verified suppliers', 'Long-term partnerships', 'Regional expertise'],
    image: 'https://images.unsplash.com/photo-1500937386664-56d1dfef3854?q=80&w=2070&auto=format&fit=crop',
  },
  {
    step: '02',
    icon: Search,
    title: 'Quality Selection',
    description: 'Each product undergoes rigorous quality checks at source, ensuring only the finest produce makes it to our processing facilities.',
    highlights: ['On-site inspections', 'Lab testing', 'Grade verification'],
    image: 'https://images.unsplash.com/photo-1607623814075-e51df1bdc82f?q=80&w=2070&auto=format&fit=crop',
  },
  {
    step: '03',
    icon: Thermometer,
    title: 'Cold Chain Processing',
    description: 'Products are processed in HACCP-certified facilities with strict temperature control from reception to packaging.',
    highlights: ['Temperature monitored', 'Hygiene protocols', 'Batch traceability'],
    image: 'https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?q=80&w=2070&auto=format&fit=crop',
  },
  {
    step: '04',
    icon: Package,
    title: 'Export Packaging',
    description: 'Products are packed in export-grade materials designed to maintain freshness and meet international standards.',
    highlights: ['Vacuum sealed', 'Custom labeling', 'Compliance ready'],
    image: 'https://images.unsplash.com/photo-1553413077-190dd305871c?q=80&w=2070&auto=format&fit=crop',
  },
];

const directSourcingBenefits = [
  { icon: Leaf, title: 'Farm Fresh', description: 'Direct from source, minimizing handling' },
  { icon: ShieldCheck, title: 'Quality Control', description: 'Full visibility at every stage' },
  { icon: Award, title: 'Best Prices', description: 'No middlemen, competitive rates' },
  { icon: Truck, title: 'Fast Turnaround', description: 'Streamlined supply chain' },
];

export const SourcingFlowSection = () => {
  return (
    <section className="section-padding bg-background overflow-hidden">
      <div className="container-wide mx-auto">
        <SectionHeading
          badge="Farm to Ship"
          title="Direct Sourcing Excellence"
          subtitle="From quality farmers and verified suppliers to your destination — a transparent, traceable supply chain you can trust."
        />

        {/* Direct Sourcing Intro */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="relative bg-primary rounded-3xl p-8 lg:p-12 mb-16 overflow-hidden"
        >
          {/* Background Pattern */}
          <div className="absolute inset-0 opacity-10">
            <div className="absolute top-0 right-0 w-96 h-96 bg-secondary rounded-full blur-3xl transform translate-x-1/2 -translate-y-1/2" />
            <div className="absolute bottom-0 left-0 w-64 h-64 bg-accent rounded-full blur-3xl transform -translate-x-1/2 translate-y-1/2" />
          </div>

          <div className="relative grid lg:grid-cols-2 gap-10 items-center">
            <div className="text-primary-foreground">
              <motion.span
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.1 }}
                className="inline-block px-4 py-1.5 rounded-full bg-secondary/20 text-secondary text-sm font-semibold mb-4"
              >
                Why Direct Sourcing?
              </motion.span>
              <motion.h3
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2 }}
                className="text-3xl lg:text-4xl font-heading font-bold mb-4"
              >
                Straight from <span className="text-secondary">Quality Farmers</span>
              </motion.h3>
              <motion.p
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.3 }}
                className="text-primary-foreground/80 text-lg mb-8 leading-relaxed"
              >
                We eliminate intermediaries by sourcing directly from farmers, fishermen, 
                and certified processors. This ensures fresher products, better prices, 
                and complete traceability from origin to export.
              </motion.p>
              
              <div className="grid grid-cols-2 gap-4">
                {directSourcingBenefits.map((benefit, index) => (
                  <motion.div
                    key={benefit.title}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.4 + index * 0.1 }}
                    className="flex items-start gap-3"
                  >
                    <div className="w-10 h-10 rounded-lg bg-secondary/20 flex items-center justify-center flex-shrink-0">
                      <benefit.icon className="w-5 h-5 text-secondary" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-sm">{benefit.title}</h4>
                      <p className="text-xs text-primary-foreground/70">{benefit.description}</p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>

            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3, duration: 0.5 }}
              className="relative"
            >
              <div className="relative rounded-2xl overflow-hidden shadow-elevated">
                <img
                  src="https://images.unsplash.com/photo-1625246333195-78d9c38ad449?q=80&w=2070&auto=format&fit=crop"
                  alt="Quality farmer harvesting fresh produce"
                  className="w-full h-80 object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-primary/60 to-transparent" />
                <div className="absolute bottom-4 left-4 right-4">
                  <div className="flex items-center gap-2 text-primary-foreground">
                    <CheckCircle className="w-5 h-5 text-secondary" />
                    <span className="text-sm font-medium">Verified & Certified Suppliers</span>
                  </div>
                </div>
              </div>
              
              {/* Floating Badge */}
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                animate={{ y: [0, -8, 0] }}
                transition={{ delay: 0.6, duration: 3, repeat: Infinity, ease: 'easeInOut' }}
                className="absolute -top-4 -right-4 bg-secondary text-secondary-foreground px-4 py-2 rounded-xl shadow-lg"
              >
                <span className="text-sm font-bold">100% Traceable</span>
              </motion.div>
            </motion.div>
          </div>
        </motion.div>

        {/* Sourcing Flow Steps */}
        <div className="relative">
          {/* Connecting Line */}
          <div className="hidden lg:block absolute left-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-secondary via-accent to-primary transform -translate-x-1/2 z-0" />

          <div className="space-y-12 lg:space-y-0">
            {sourcingSteps.map((step, index) => (
              <motion.div
                key={step.title}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-100px' }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className={`relative grid lg:grid-cols-2 gap-8 items-center ${
                  index % 2 === 1 ? 'lg:direction-rtl' : ''
                } ${index !== sourcingSteps.length - 1 ? 'lg:pb-20' : ''}`}
              >
                {/* Step Number Circle */}
                <div className="hidden lg:flex absolute left-1/2 top-8 transform -translate-x-1/2 z-10">
                  <motion.div
                    whileHover={{ scale: 1.1 }}
                    className="w-16 h-16 rounded-full bg-gradient-to-br from-secondary to-secondary/80 flex items-center justify-center shadow-lg"
                  >
                    <span className="text-secondary-foreground font-heading font-bold text-lg">{step.step}</span>
                  </motion.div>
                </div>

                {/* Content */}
                <div className={`${index % 2 === 1 ? 'lg:order-2 lg:pl-16' : 'lg:pr-16 lg:text-right'}`}>
                  <div className={`flex items-center gap-3 mb-4 ${index % 2 === 0 ? 'lg:justify-end' : ''}`}>
                    <div className="lg:hidden w-10 h-10 rounded-full bg-secondary flex items-center justify-center">
                      <span className="text-secondary-foreground font-bold text-sm">{step.step}</span>
                    </div>
                    <div className={`w-12 h-12 rounded-xl bg-accent/10 flex items-center justify-center ${
                      index % 2 === 0 ? 'lg:order-2' : ''
                    }`}>
                      <step.icon className="w-6 h-6 text-accent" />
                    </div>
                  </div>
                  
                  <h3 className="text-2xl font-heading font-bold mb-3">{step.title}</h3>
                  <p className="text-muted-foreground mb-4 leading-relaxed">{step.description}</p>
                  
                  <div className={`flex flex-wrap gap-2 ${index % 2 === 0 ? 'lg:justify-end' : ''}`}>
                    {step.highlights.map((highlight) => (
                      <span
                        key={highlight}
                        className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-secondary/10 text-secondary text-sm font-medium"
                      >
                        <CheckCircle className="w-3.5 h-3.5" />
                        {highlight}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Image */}
                <motion.div
                  whileHover={{ scale: 1.02 }}
                  transition={{ duration: 0.3 }}
                  className={`${index % 2 === 1 ? 'lg:order-1 lg:pr-16' : 'lg:pl-16'}`}
                >
                  <div className="relative group rounded-2xl overflow-hidden shadow-medium">
                    <img
                      src={step.image}
                      alt={step.title}
                      className="w-full h-64 object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-primary/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                    
                    {/* Hover Overlay */}
                    <div className="absolute bottom-0 left-0 right-0 p-4 translate-y-full group-hover:translate-y-0 transition-transform duration-300">
                      <div className="flex items-center gap-2 text-primary-foreground">
                        <ArrowRight className="w-4 h-4" />
                        <span className="text-sm font-medium">Step {step.step}</span>
                      </div>
                    </div>
                  </div>
                </motion.div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-16 text-center"
        >
          <div className="inline-flex items-center gap-3 px-6 py-3 rounded-full bg-accent/10 border border-accent/20">
            <CheckCircle className="w-5 h-5 text-accent" />
            <span className="text-muted-foreground">
              Complete traceability from farm to destination port
            </span>
          </div>
        </motion.div>
      </div>
    </section>
  );
};
