import { motion } from 'framer-motion';
import { MessageSquare, Search, PackageCheck, Truck } from 'lucide-react';
import { SectionHeading } from '@/components/shared/SectionHeading';

const steps = [
  {
    icon: MessageSquare,
    step: '01',
    title: 'Enquiry',
    description: 'Share your product requirements, quantities, and destination details.',
  },
  {
    icon: Search,
    step: '02',
    title: 'Sourcing',
    description: 'We source from certified suppliers with quality checks at every stage.',
  },
  {
    icon: PackageCheck,
    step: '03',
    title: 'Quality & Packing',
    description: 'Rigorous inspection and export-grade packaging under cold chain protocols.',
  },
  {
    icon: Truck,
    step: '04',
    title: 'Shipping & Delivery',
    description: 'Temperature-controlled logistics with real-time tracking to destination.',
  },
];

export const ProcessSection = () => {
  return (
    <section className="section-padding bg-background">
      <div className="container-wide mx-auto">
        <SectionHeading
          badge="How We Work"
          title="Simple, Efficient Process"
          subtitle="From enquiry to delivery, we make food exports seamless and stress-free."
        />

        <div className="relative">
          {/* Connecting Line */}
          <div className="hidden lg:block absolute top-1/2 left-0 right-0 h-0.5 bg-border -translate-y-1/2" />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {steps.map((step, index) => (
              <motion.div
                key={step.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.15 }}
                className="relative"
              >
                <div className="bg-primary rounded-2xl border border-border p-6 relative z-10 hover:shadow-elevated transition-shadow duration-300">
                  <div className="flex items-center justify-between mb-4">
                    <div className="w-12 h-12 rounded-xl bg-secondary flex items-center justify-center">
                      <step.icon className="w-6 h-6 text-secondary-foreground" />
                    </div>
                    <span className="text-4xl font-heading font-bold text-muted/50">
                      {step.step}
                    </span>
                  </div>
                  <h3 className="text-xl font-heading font-semibold text-muted mb-2">
                    {step.title}
                  </h3>
                  <p className="text-muted text-sm leading-relaxed">
                    {step.description}
                  </p>
                </div>

                {/* Connector Dot */}
                {/* <div className="hidden lg:block absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-4 h-4 rounded-full bg-secondary border-4 border-background z-20" /> */}
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
