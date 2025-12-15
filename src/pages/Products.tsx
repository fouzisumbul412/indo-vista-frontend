import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Layout } from '@/components/layout/Layout';
import { SectionHeading } from '@/components/shared/SectionHeading';
import { Button } from '@/components/ui/button';
import { Beef, Fish, Leaf, Package, ArrowRight, Info } from 'lucide-react';

const productCategories = [
  {
    icon: Beef,
    title: 'Frozen Meat',
    description: 'Premium quality frozen meat products sourced from FSSAI-certified processing plants with strict hygiene and quality protocols.',
    products: [
      { name: 'Buffalo Meat', variants: 'Topside, Silverside, Striploin, Chuck tender, Offals' },
      { name: 'Chicken', variants: 'Whole chicken, Breast, Legs, Wings, Paws' },
      { name: 'Mutton & Lamb', variants: 'Carcass, Leg, Shoulder, Chops, Rack' },
      { name: 'Goat Meat', variants: 'Whole carcass, Cuts, Offals' },
    ],
    forms: ['Block Frozen', 'IQF (Individually Quick Frozen)', 'Vacuum Packed', 'Carton Packed'],
    color: 'from-red-500/10 to-red-600/5',
  },
  {
    icon: Fish,
    title: 'Seafood & Fish',
    description: 'Fresh-frozen marine products from coastal regions, processed and packed under controlled conditions for maximum freshness.',
    products: [
      { name: 'Shrimp & Prawns', variants: 'HOSO, HLSO, PUD, PD, Breaded' },
      { name: 'Fish', variants: 'Whole, Fillet, Steaks, Portions' },
      { name: 'Squid & Cuttlefish', variants: 'Whole cleaned, Rings, Tubes' },
      { name: 'Crab', variants: 'Whole, Meat, Claws' },
    ],
    forms: ['Block Frozen', 'IQF', 'Glazed', 'Vacuum Packed', 'Retail Packs'],
    color: 'from-blue-500/10 to-blue-600/5',
  },
  {
    icon: Leaf,
    title: 'Spices & Herbs',
    description: 'Authentic Indian spices sourced directly from growing regions, cleaned, graded, and packed for international markets.',
    products: [
      { name: 'Turmeric', variants: 'Finger, Powder, Organic certified' },
      { name: 'Red Chilli', variants: 'Whole dried, Powder, Crushed flakes' },
      { name: 'Cumin Seeds', variants: 'Whole, Powder, Machine cleaned' },
      { name: 'Coriander', variants: 'Seeds, Powder, Split' },
    ],
    forms: ['Whole', 'Powder', 'Crushed', 'Food-Grade Bags', 'Bulk Containers'],
    color: 'from-green-500/10 to-green-600/5',
  },
  {
    icon: Package,
    title: 'Other Food Products',
    description: 'Extended range of Indian food products for export including grains, pulses, and processed foods.',
    products: [
      { name: 'Basmati Rice', variants: '1121, Pusa, Traditional' },
      { name: 'Pulses & Lentils', variants: 'Chickpeas, Lentils, Beans' },
      { name: 'Oils', variants: 'Groundnut, Sesame, Mustard' },
      { name: 'Processed Foods', variants: 'Pickles, Sauces, Ready-to-eat' },
    ],
    forms: ['Bulk Bags', 'Consumer Packs', 'Private Label', 'Branded'],
    color: 'from-amber-500/10 to-amber-600/5',
  },
];

const Products = () => {
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
              Our Products
            </span>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-heading font-bold mb-6">
              Premium{' '}
              <span className="text-secondary">Food Export</span> Range
            </h1>
            <p className="text-lg text-primary-foreground/80 leading-relaxed">
              Quality-assured products sourced from certified suppliers across India. 
              From frozen meat to authentic spices, we export the best of India to the world.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Notice */}
      <section className="py-4 bg-secondary/10 border-b border-secondary/20">
        <div className="container-wide mx-auto px-4 md:px-6">
          <div className="flex items-center gap-3 text-sm">
            <Info className="w-5 h-5 text-secondary" />
            <p className="text-muted-foreground">
              <strong>Note:</strong> Product listings are indicative only. Detailed specifications and cut lists available on request.
            </p>
          </div>
        </div>
      </section>

      {/* Products */}
      <section className="section-padding bg-background">
        <div className="container-wide mx-auto">
          <div className="space-y-16">
            {productCategories.map((category, index) => (
              <motion.div
                key={category.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
                className={`bg-gradient-to-br ${category.color} rounded-2xl p-8 lg:p-12 border border-border`}
              >
                <div className="flex items-center gap-4 mb-8">
                  <div className="w-16 h-16 rounded-xl bg-secondary flex items-center justify-center">
                    <category.icon className="w-8 h-8 text-secondary-foreground" />
                  </div>
                  <div>
                    <h2 className="text-3xl font-heading font-bold">{category.title}</h2>
                    <p className="text-muted-foreground mt-1">{category.description}</p>
                  </div>
                </div>

                <div className="grid lg:grid-cols-2 gap-8">
                  {/* Products List */}
                  <div>
                    <h4 className="font-semibold text-lg mb-4">Products</h4>
                    <div className="space-y-4">
                      {category.products.map((product) => (
                        <div key={product.name} className="bg-card rounded-xl p-4 border border-border">
                          <h5 className="font-semibold text-foreground mb-1">{product.name}</h5>
                          <p className="text-sm text-muted-foreground">{product.variants}</p>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Forms */}
                  <div>
                    <h4 className="font-semibold text-lg mb-4">Available Forms</h4>
                    <div className="flex flex-wrap gap-2">
                      {category.forms.map((form) => (
                        <span
                          key={form}
                          className="px-4 py-2 bg-card rounded-full text-sm font-medium border border-border"
                        >
                          {form}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-secondary">
        <div className="container-wide mx-auto px-4 md:px-6 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h3 className="text-3xl font-heading font-bold text-secondary-foreground mb-4">
              Share Your Product Requirements
            </h3>
            <p className="text-secondary-foreground/80 mb-8 max-w-2xl mx-auto">
              Looking for specific cuts, grades, or packaging? Contact us with your 
              detailed requirements and we'll provide a customized quote.
            </p>
            <Link to="/contact">
              <Button variant="default" size="xl" className="group">
                Request Product Details
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Button>
            </Link>
          </motion.div>
        </div>
      </section>
    </Layout>
  );
};

export default Products;
