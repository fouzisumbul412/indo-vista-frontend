import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ArrowRight, Ship, Plane, ThermometerSnowflake } from 'lucide-react';
import { Button } from '@/components/ui/button';

export const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center overflow-hidden">
      {/* Background with Parallax Effect */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: `url('https://images.unsplash.com/photo-1494412574643-ff11b0a5c1c3?q=80&w=2070&auto=format&fit=crop')`,
        }}
      >
        <div className="absolute inset-0 hero-gradient" />
      </div>

      {/* Floating Elements */}
      <motion.div
        animate={{ y: [-10, 10, -10] }}
        transition={{ duration: 6, repeat: Infinity, ease: 'easeInOut' }}
        className="absolute top-1/4 right-[10%] hidden lg:block"
      >
        <div className="w-20 h-20 rounded-2xl bg-secondary/20 backdrop-blur-sm border border-secondary/30 flex items-center justify-center">
          <Ship className="w-10 h-10 text-secondary" />
        </div>
      </motion.div>

      <motion.div
        animate={{ y: [10, -10, 10] }}
        transition={{ duration: 5, repeat: Infinity, ease: 'easeInOut', delay: 0.5 }}
        className="absolute top-1/3 right-[20%] hidden lg:block"
      >
        <div className="w-16 h-16 rounded-xl bg-accent/20 backdrop-blur-sm border border-accent/30 flex items-center justify-center">
          <Plane className="w-8 h-8 text-accent" />
        </div>
      </motion.div>

      <motion.div
        animate={{ y: [-5, 15, -5] }}
        transition={{ duration: 7, repeat: Infinity, ease: 'easeInOut', delay: 1 }}
        className="absolute bottom-1/3 right-[15%] hidden lg:block"
      >
        <div className="w-14 h-14 rounded-lg bg-primary-foreground/10 backdrop-blur-sm border border-primary-foreground/20 flex items-center justify-center">
          <ThermometerSnowflake className="w-7 h-7 text-primary-foreground" />
        </div>
      </motion.div>

      {/* Content */}
      <div className="container-wide mx-auto px-4 md:px-6 relative z-10 pt-24">
        <div className="max-w-3xl">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <span className="inline-block px-4 py-2 rounded-full bg-secondary/20 text-secondary text-sm font-semibold mb-6 backdrop-blur-sm border border-secondary/30">
              Premium Export Solutions Since 2010
            </span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-heading font-bold text-primary-foreground mb-6 leading-tight"
          >
            Global Cold Chain &{' '}
            <span className="text-secondary">Food Export</span> Solutions
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-lg md:text-xl text-primary-foreground/80 mb-8 leading-relaxed max-w-2xl"
          >
            Your trusted partner for importing and exporting frozen meat, seafood, and spices. 
            Comprehensive sea, air, and road logistics with state-of-the-art temperature-controlled solutions.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="flex flex-col sm:flex-row gap-4"
          >
            <Link to="/contact">
              <Button variant="hero" size="xl" className="group">
                Request Quote
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Button>
            </Link>
            <a href="#services">
              <Button variant="heroOutline" size="xl">
                View Services
              </Button>
            </a>
          </motion.div>

          {/* Stats */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-8"
          >
            {[
              { value: '45+', label: 'Countries Served' },
              { value: '500+', label: 'Active Clients' },
              { value: '10K+', label: 'Shipments/Year' },
              { value: '15+', label: 'Years Experience' },
            ].map((stat, index) => (
              <div key={index} className="text-center md:text-left">
                <div className="text-3xl md:text-4xl font-heading font-bold text-secondary mb-1">
                  {stat.value}
                </div>
                <div className="text-sm text-primary-foreground/70">{stat.label}</div>
              </div>
            ))}
          </motion.div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
      >
        <div className="w-6 h-10 rounded-full border-2 border-primary-foreground/30 flex items-start justify-center p-2">
          <div className="w-1 h-2 bg-primary-foreground/50 rounded-full" />
        </div>
      </motion.div>
    </section>
  );
};
