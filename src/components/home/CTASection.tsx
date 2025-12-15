import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';

export const CTASection = () => {
  return (
    <section className="py-16 bg-gradient-to-r from-secondary to-secondary/80">
      <div className="container-wide mx-auto px-4 md:px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="flex flex-col md:flex-row items-center justify-between gap-6"
        >
          <div className="text-center md:text-left">
            <h3 className="text-2xl md:text-3xl font-heading font-bold text-secondary-foreground mb-2">
              Looking for a reliable export partner?
            </h3>
            <p className="text-secondary-foreground/80">
              Frozen meat, seafood, and spices – delivered globally with care.
            </p>
          </div>
          <Link to="/contact">
            <Button
              variant="default"
              size="xl"
              className="bg-primary text-primary-foreground hover:bg-primary/90 group"
            >
              Talk to Our Team
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </Button>
          </Link>
        </motion.div>
      </div>
    </section>
  );
};
