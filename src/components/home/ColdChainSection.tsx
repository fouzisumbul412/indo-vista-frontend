import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ThermometerSnowflake, Package, Shield, ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';

const features = [
  {
    icon: ThermometerSnowflake,
    title: 'Temperature Control',
    description: 'Precision monitoring from -25°C to +25°C throughout the supply chain.',
  },
  {
    icon: Package,
    title: 'Export-Grade Packaging',
    description: 'Vacuum packs, cartons, and food-grade liners meeting international standards.',
  },
  {
    icon: Shield,
    title: 'Quality Assurance',
    description: 'HACCP & FSSAI compliant processing with full traceability.',
  },
];

export const ColdChainSection = () => {
  return (
    <section className="section-padding bg-primary text-primary-foreground relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.4'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
        }} />
      </div>

      <div className="container-wide mx-auto relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <span className="inline-block px-4 py-1.5 rounded-full bg-secondary/20 text-secondary text-xs font-semibold uppercase tracking-wider mb-6">
              Cold Chain Excellence
            </span>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-heading font-bold mb-6">
              Temperature-Controlled{' '}
              <span className="text-secondary">Logistics</span>
            </h2>
            <p className="text-primary-foreground/80 text-lg leading-relaxed mb-8">
              Our state-of-the-art cold chain infrastructure ensures your perishable goods 
              maintain optimal freshness from origin to destination. With reefer containers, 
              cold storage facilities, and real-time temperature monitoring.
            </p>

            <div className="space-y-4 mb-8">
              {features.map((feature, index) => (
                <motion.div
                  key={feature.title}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="flex items-start gap-4"
                >
                  <div className="w-10 h-10 rounded-lg bg-secondary/20 flex items-center justify-center flex-shrink-0">
                    <feature.icon className="w-5 h-5 text-secondary" />
                  </div>
                  <div>
                    <h4 className="font-semibold mb-1">{feature.title}</h4>
                    <p className="text-primary-foreground/70 text-sm">{feature.description}</p>
                  </div>
                </motion.div>
              ))}
            </div>

            <Link to="/quality">
              <Button variant="hero" size="lg" className="group">
                Learn More
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Button>
            </Link>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="relative"
          >
            <div className="relative rounded-2xl overflow-hidden shadow-elevated">
              <img
                src="https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?q=80&w=2070&auto=format&fit=crop"
                alt="Cold storage facility with temperature-controlled containers"
                className="w-full h-[400px] object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-primary/50 to-transparent" />
            </div>

            {/* Floating Stats Card */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.4 }}
              className="absolute -bottom-6 -left-6 bg-card text-foreground rounded-xl shadow-elevated p-6"
            >
              <div className="text-3xl font-heading font-bold text-secondary mb-1">-25°C</div>
              <div className="text-sm text-muted-foreground">Deep Freeze Capability</div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
