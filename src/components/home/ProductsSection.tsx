import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Beef, Fish, Leaf, Package, ArrowRight } from 'lucide-react';
import { SectionHeading } from '@/components/shared/SectionHeading';

const products = [
  {
    icon: Beef,
    title: 'Frozen Meat',
    description: 'Premium quality buffalo meat, chicken parts, and mutton cuts processed under strict hygiene standards.',
    items: ['Buffalo meat cuts', 'Chicken parts', 'Mutton & lamb', 'Offals'],
    color: 'from-red-500/20 to-red-600/10',
  },
  {
    icon: Fish,
    title: 'Seafood & Fish',
    description: 'Fresh-frozen seafood including shrimp, prawns, fish fillets, and marine products.',
    items: ['Shrimp & prawns', 'Fish fillets', 'Squid & cuttlefish', 'Crab'],
    color: 'from-blue-500/20 to-blue-600/10',
  },
  {
    icon: Leaf,
    title: 'Spices & Herbs',
    description: 'Authentic Indian spices and herbs, cleaned, graded, and packed for export.',
    items: ['Turmeric', 'Red chilli', 'Cumin seeds', 'Coriander'],
    color: 'from-green-500/20 to-green-600/10',
  },
  {
    icon: Package,
    title: 'Other Food Products',
    description: 'Extended range of food products including pulses, grains, and processed foods.',
    items: ['Basmati rice', 'Pulses & lentils', 'Processed foods', 'Oils'],
    color: 'from-amber-500/20 to-amber-600/10',
  },
];

export const ProductsSection = () => {
  return (
    <section className="section-padding bg-background">
      <div className="container-wide mx-auto">
        <SectionHeading
          badge="Products"
          title="Premium Food Export Range"
          subtitle="Quality-assured products sourced from certified suppliers across India."
        />

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
          {products.map((product, index) => (
            <motion.div
              key={product.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="group relative overflow-hidden rounded-2xl bg-card border border-border hover:border-secondary/30 transition-all duration-300"
            >
              <div className={`absolute inset-0 bg-gradient-to-br ${product.color} opacity-0 group-hover:opacity-100 transition-opacity duration-300`} />
              
              <div className="relative p-6 lg:p-8">
                <div className="flex items-start gap-4 mb-4">
                  <div className="w-12 h-12 rounded-xl bg-secondary/10 flex items-center justify-center group-hover:bg-secondary transition-colors duration-300">
                    <product.icon className="w-6 h-6 text-secondary group-hover:text-secondary-foreground transition-colors" />
                  </div>
                  <div>
                    <h3 className="text-xl font-heading font-semibold text-foreground mb-1">
                      {product.title}
                    </h3>
                    <p className="text-muted-foreground text-sm leading-relaxed">
                      {product.description}
                    </p>
                  </div>
                </div>

                <div className="ml-16">
                  <h4 className="text-sm font-semibold text-foreground mb-2">Sample Products:</h4>
                  <ul className="grid grid-cols-2 gap-1">
                    {product.items.map((item) => (
                      <li key={item} className="text-sm text-muted-foreground flex items-center gap-2">
                        <span className="w-1.5 h-1.5 rounded-full bg-secondary" />
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-12 text-center"
        >
          <Link
            to="/products"
            className="inline-flex items-center gap-2 text-secondary font-semibold hover:gap-3 transition-all"
          >
            View Full Product Range
            <ArrowRight className="w-5 h-5" />
          </Link>
        </motion.div>
      </div>
    </section>
  );
};
