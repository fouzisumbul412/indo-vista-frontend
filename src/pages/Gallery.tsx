import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Layout } from '@/components/layout/Layout';
import { SectionHeading } from '@/components/shared/SectionHeading';
import { X } from 'lucide-react';

const galleryImages = [
  {
    category: 'Cold Storage',
    items: [
      { url: 'https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?q=80&w=800&auto=format&fit=crop', alt: 'Cold storage facility interior' },
      { url: 'https://images.unsplash.com/photo-1553413077-190dd305871c?q=80&w=800&auto=format&fit=crop', alt: 'Warehouse storage racks' },
      { url: 'https://images.unsplash.com/photo-1416879595882-3373a0480b5b?q=80&w=800&auto=format&fit=crop', alt: 'Temperature controlled storage' },
    ],
  },
  {
    category: 'Packaging',
    items: [
      { url: 'https://images.unsplash.com/photo-1607082348824-0a96f2a4b9da?q=80&w=800&auto=format&fit=crop', alt: 'Product packaging' },
      { url: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?q=80&w=800&auto=format&fit=crop', alt: 'Export boxes' },
      { url: 'https://images.unsplash.com/photo-1605732562742-3023a888e56e?q=80&w=800&auto=format&fit=crop', alt: 'Carton packaging' },
    ],
  },
  {
    category: 'Containers & Transport',
    items: [
      { url: 'https://images.unsplash.com/photo-1494412574643-ff11b0a5c1c3?q=80&w=800&auto=format&fit=crop', alt: 'Container ship at port' },
      { url: 'https://images.unsplash.com/photo-1591768575198-88dac53fbd0a?q=80&w=800&auto=format&fit=crop', alt: 'Shipping containers' },
      { url: 'https://images.unsplash.com/photo-1601584115197-04ecc0da31d7?q=80&w=800&auto=format&fit=crop', alt: 'Cargo airplane' },
    ],
  },
  {
    category: 'Shipments & Ports',
    items: [
      { url: 'https://images.unsplash.com/photo-1578575437130-527eed3abbec?q=80&w=800&auto=format&fit=crop', alt: 'Port operations' },
      { url: 'https://images.unsplash.com/photo-1519003722824-194d4455a60c?q=80&w=800&auto=format&fit=crop', alt: 'Shipping dock' },
      { url: 'https://images.unsplash.com/photo-1473662712020-75289ee8a184?q=80&w=800&auto=format&fit=crop', alt: 'Container loading' },
    ],
  },
];

const Gallery = () => {
  const [selectedImage, setSelectedImage] = useState<{ url: string; alt: string } | null>(null);
  const [activeCategory, setActiveCategory] = useState<string>('All');

  const categories = ['All', ...galleryImages.map((g) => g.category)];
  
  const filteredImages = activeCategory === 'All' 
    ? galleryImages.flatMap((g) => g.items.map((item) => ({ ...item, category: g.category })))
    : galleryImages.find((g) => g.category === activeCategory)?.items.map((item) => ({ ...item, category: activeCategory })) || [];

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
              Gallery
            </span>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-heading font-bold mb-6">
              Our{' '}
              <span className="text-secondary">Facilities & Operations</span>
            </h1>
            <p className="text-lg text-primary-foreground/80 leading-relaxed">
              Take a visual tour of our cold storage facilities, packaging processes, 
              and logistics operations that power Indo Vista's export capabilities.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Gallery */}
      <section className="section-padding bg-background">
        <div className="container-wide mx-auto">
          {/* Category Filter */}
          <div className="flex flex-wrap justify-center gap-3 mb-12">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setActiveCategory(category)}
                className={`px-5 py-2 rounded-full text-sm font-medium transition-all ${
                  activeCategory === category
                    ? 'bg-secondary text-secondary-foreground'
                    : 'bg-muted text-muted-foreground hover:bg-muted/80'
                }`}
              >
                {category}
              </button>
            ))}
          </div>

          {/* Image Grid */}
          <motion.div
            layout
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
          >
            <AnimatePresence mode="popLayout">
              {filteredImages.map((image, index) => (
                <motion.div
                  key={image.url}
                  layout
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.9 }}
                  transition={{ duration: 0.3, delay: index * 0.05 }}
                  className="relative group cursor-pointer overflow-hidden rounded-xl aspect-[4/3]"
                  onClick={() => setSelectedImage(image)}
                >
                  <img
                    src={image.url}
                    alt={image.alt}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-primary/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <div className="absolute bottom-0 left-0 right-0 p-4">
                      <span className="text-xs text-secondary font-medium uppercase tracking-wider">
                        {image.category}
                      </span>
                      <p className="text-primary-foreground font-medium mt-1">{image.alt}</p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </AnimatePresence>
          </motion.div>
        </div>
      </section>

      {/* Lightbox */}
      <AnimatePresence>
        {selectedImage && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 bg-primary/95 flex items-center justify-center p-4"
            onClick={() => setSelectedImage(null)}
          >
            <button
              onClick={() => setSelectedImage(null)}
              className="absolute top-6 right-6 w-12 h-12 rounded-full bg-primary-foreground/10 flex items-center justify-center text-primary-foreground hover:bg-primary-foreground/20 transition-colors"
            >
              <X className="w-6 h-6" />
            </button>
            <motion.img
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              src={selectedImage.url}
              alt={selectedImage.alt}
              className="max-w-full max-h-[80vh] rounded-xl shadow-elevated"
              onClick={(e) => e.stopPropagation()}
            />
          </motion.div>
        )}
      </AnimatePresence>
    </Layout>
  );
};

export default Gallery;
