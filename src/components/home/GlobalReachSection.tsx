import { motion } from 'framer-motion';
import { Globe, MapPin } from 'lucide-react';
import { SectionHeading } from '@/components/shared/SectionHeading';

const regions = [
  { name: 'Middle East', countries: ['UAE', 'Saudi Arabia', 'Qatar', 'Kuwait'] },
  { name: 'Southeast Asia', countries: ['Vietnam', 'Malaysia', 'Indonesia', 'Philippines'] },
  { name: 'Africa', countries: ['Egypt', 'South Africa', 'Nigeria', 'Kenya'] },
  { name: 'Europe', countries: ['Germany', 'UK', 'Netherlands', 'France'] },
];

const ports = ['JNPT Mumbai', 'Nhava Sheva', 'Chennai Port', 'Mundra Port'];

export const GlobalReachSection = () => {
  return (
    <section className="section-padding section-gradient relative overflow-hidden">
      {/* Decorative Globe */}
      <div className="absolute right-0 top-1/2 -translate-y-1/2 opacity-5">
        <Globe className="w-[600px] h-[600px]" />
      </div>

      <div className="container-wide mx-auto relative z-10">
        <SectionHeading
          badge="Global Network"
          title="Connecting India to the World"
          subtitle="Extensive network of shipping routes and partnerships across continents."
        />

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {regions.map((region, index) => (
            <motion.div
              key={region.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-card rounded-xl border border-border p-6 hover:border-secondary/30 hover:shadow-medium transition-all duration-300"
            >
              <div className="w-10 h-10 rounded-lg bg-secondary/10 flex items-center justify-center mb-4">
                <MapPin className="w-5 h-5 text-secondary" />
              </div>
              <h3 className="font-heading font-semibold text-lg mb-3">{region.name}</h3>
              <ul className="space-y-1">
                {region.countries.map((country) => (
                  <li key={country} className="text-sm text-muted-foreground">{country}</li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>

        {/* Ports */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="bg-card rounded-xl border border-border p-8"
        >
          <h3 className="font-heading font-semibold text-lg mb-6 text-center">Key Indian Ports</h3>
          <div className="flex flex-wrap justify-center gap-4">
            {ports.map((port) => (
              <span
                key={port}
                className="px-4 py-2 bg-secondary/10 text-secondary rounded-full text-sm font-medium"
              >
                {port}
              </span>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};
