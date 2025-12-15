import { motion } from 'framer-motion';
import { Layout } from '@/components/layout/Layout';
import { SectionHeading } from '@/components/shared/SectionHeading';
import { Target, Eye, Heart, Award, Users, Globe, Package, CheckCircle } from 'lucide-react';

const values = [
  { icon: Heart, title: 'Integrity', description: 'Transparent business practices and honest communication at every step.' },
  { icon: CheckCircle, title: 'Quality', description: 'Uncompromising standards in sourcing, processing, and delivery.' },
  { icon: Package, title: 'Reliability', description: 'Timely deliveries with consistent product quality, every shipment.' },
  { icon: Award, title: 'Compliance', description: 'Adherence to international food safety and export regulations.' },
];

const stats = [
  { value: '15+', label: 'Years of Experience' },
  { value: '45+', label: 'Countries Served' },
  { value: '500+', label: 'Active Clients' },
  { value: '10,000+', label: 'Shipments Annually' },
];

const licenses = [
  'FSSAI Licensed',
  'HACCP Certified',
  'APEDA Registered',
  'Spices Board Certified',
  'MPEDA Registered',
  'Export License Holder',
];

const About = () => {
  return (
    <Layout>
      {/* Hero Section */}
      <section className="relative pt-32 pb-20 bg-primary text-primary-foreground overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0" style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.4'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
          }} />
        </div>
        
        <div className="container-wide mx-auto px-4 md:px-6 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="max-w-3xl"
          >
            <span className="inline-block px-4 py-2 rounded-full bg-secondary/20 text-secondary text-sm font-semibold mb-6">
              About Us
            </span>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-heading font-bold mb-6">
              Your Trusted Partner in{' '}
              <span className="text-secondary">Global Food Trade</span>
            </h1>
            <p className="text-lg text-primary-foreground/80 leading-relaxed">
              Indo Vista is a leading import-export company specializing in cold chain logistics 
              and premium food products. With over 15 years of experience, we connect Indian 
              suppliers with markets across the globe.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Company Overview */}
      <section className="section-padding bg-background">
        <div className="container-wide mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <SectionHeading
                badge="Our Story"
                title="Building Trust Through Excellence"
                centered={false}
              />
              <div className="space-y-4 text-muted-foreground">
                <p>
                  Founded in 2010, Indo Vista began with a simple mission: to make international 
                  food trade accessible, reliable, and efficient for businesses of all sizes.
                </p>
                <p>
                  Today, we've grown into a full-service export company handling everything from 
                  sourcing and quality control to cold chain logistics and customs documentation. 
                  Our expertise spans frozen meat, seafood, spices, and a wide range of food products.
                </p>
                <p>
                  We pride ourselves on our strong relationships with certified suppliers, 
                  state-of-the-art cold storage facilities, and a logistics network that 
                  reaches over 45 countries across five continents.
                </p>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="relative"
            >
              <div className="rounded-2xl overflow-hidden shadow-elevated">
                <img
                  src="https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?q=80&w=2070&auto=format&fit=crop"
                  alt="Indo Vista warehouse operations"
                  className="w-full h-[400px] object-cover"
                />
              </div>
              <div className="absolute -bottom-6 -left-6 bg-secondary text-secondary-foreground rounded-xl p-6 shadow-elevated">
                <div className="text-3xl font-heading font-bold">15+</div>
                <div className="text-sm">Years of Excellence</div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Mission, Vision, Values */}
      <section className="section-padding section-gradient">
        <div className="container-wide mx-auto">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
            {/* Mission */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="bg-card rounded-2xl border border-border p-8 hover:shadow-elevated transition-shadow"
            >
              <div className="w-14 h-14 rounded-xl bg-primary flex items-center justify-center mb-6">
                <Target className="w-7 h-7 text-primary-foreground" />
              </div>
              <h3 className="text-2xl font-heading font-bold mb-4">Our Mission</h3>
              <p className="text-muted-foreground leading-relaxed">
                To provide reliable, efficient, and quality-focused export solutions that 
                connect Indian food producers with global markets while maintaining the 
                highest standards of food safety and customer service.
              </p>
            </motion.div>

            {/* Vision */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="bg-card rounded-2xl border border-border p-8 hover:shadow-elevated transition-shadow"
            >
              <div className="w-14 h-14 rounded-xl bg-secondary flex items-center justify-center mb-6">
                <Eye className="w-7 h-7 text-secondary-foreground" />
              </div>
              <h3 className="text-2xl font-heading font-bold mb-4">Our Vision</h3>
              <p className="text-muted-foreground leading-relaxed">
                To become a globally recognized leader in cold chain logistics and food 
                exports, known for innovation, integrity, and unwavering commitment to 
                quality and sustainability.
              </p>
            </motion.div>

            {/* Values */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="bg-card rounded-2xl border border-border p-8 hover:shadow-elevated transition-shadow md:col-span-2 lg:col-span-1"
            >
              <div className="w-14 h-14 rounded-xl bg-accent flex items-center justify-center mb-6">
                <Heart className="w-7 h-7 text-accent-foreground" />
              </div>
              <h3 className="text-2xl font-heading font-bold mb-4">Our Values</h3>
              <ul className="space-y-2">
                {values.map((value) => (
                  <li key={value.title} className="flex items-center gap-2 text-muted-foreground">
                    <CheckCircle className="w-4 h-4 text-secondary flex-shrink-0" />
                    <span><strong>{value.title}:</strong> {value.description.split(' ').slice(0, 4).join(' ')}...</span>
                  </li>
                ))}
              </ul>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="py-16 bg-primary text-primary-foreground">
        <div className="container-wide mx-auto px-4 md:px-6">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="text-center"
              >
                <div className="text-4xl md:text-5xl font-heading font-bold text-secondary mb-2">
                  {stat.value}
                </div>
                <div className="text-primary-foreground/70 text-sm">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Licenses & Certifications */}
      <section className="section-padding bg-background">
        <div className="container-wide mx-auto">
          <SectionHeading
            badge="Certifications"
            title="Licenses & Registrations"
            subtitle="Fully compliant with Indian and international export regulations."
          />

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
            {licenses.map((license, index) => (
              <motion.div
                key={license}
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.05 }}
                className="bg-card rounded-xl border border-border p-6 text-center hover:border-secondary/30 hover:shadow-medium transition-all"
              >
                <Award className="w-8 h-8 text-secondary mx-auto mb-3" />
                <span className="text-sm font-medium text-foreground">{license}</span>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default About;
