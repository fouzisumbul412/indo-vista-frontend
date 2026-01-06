"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";

import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Ship, Plane, Truck, FileText, ThermometerSnowflake, ArrowRight, ChevronLeft, ChevronRight } from 'lucide-react';
import { SectionHeading } from '@/components/shared/SectionHeading';
import { AnimatedCard } from '@/components/shared/AnimatedCard';



const services = [
  {
    icon: Ship,
    title: 'Sea Freight',
    description: 'Full container load (FCL) and less container load (LCL) services with global port coverage.',
    bg: '/images/sea.png',
  },
  {
    icon: Plane,
    title: 'Air Freight',
    description: 'Express and standard air cargo for time-sensitive perishable shipments worldwide.',
    bg: '/images/air.png',
  },
  {
    icon: Truck,
    title: 'Road Transport',
    description: 'Refrigerated trucking and domestic logistics with real-time tracking.',
    bg: '/images/road.png',
  },
  {
    icon: FileText,
    title: 'Customs & Documentation',
    description: 'Complete customs clearance, health certificates, and export documentation support.',
    bg: '/images/document.png',
  },
  {
    icon: ThermometerSnowflake,
    title: 'Cold Chain Solutions',
    description: 'Temperature-controlled storage, reefer containers, and frozen cargo handling.',
    bg: '/images/cold.png',
  },
];

export const ServicesSection = () => {
  return (
    <section id="services" className="section-padding section-gradient">
      <div className="container-wide mx-auto">
        <SectionHeading
          badge="Our Services"
          title="Comprehensive Logistics Solutions"
          subtitle="End-to-end supply chain management for your food export needs, from sourcing to delivery."
        />

        <div className="relative services-swiper-wrapper">
  
  {/* LEFT ARROW */}
  <button
    className="services-prev"
    aria-label="Previous"
  >
    <ChevronLeft className="w-5 h-5" />
  </button>

  {/* RIGHT ARROW */}
  <button
    className="services-next"
    aria-label="Next"
  >
    <ChevronRight className="w-5 h-5" />
  </button>

  <Swiper
    modules={[Navigation, Autoplay]}
    navigation={{
      prevEl: ".services-prev",
      nextEl: ".services-next",
    }}
    autoplay={{ delay: 3000, disableOnInteraction: false }}
    spaceBetween={24}
    loop
    breakpoints={{
      0: { slidesPerView: 1 },
      640: { slidesPerView: 1.2 },
      768: { slidesPerView: 2 },
      1024: { slidesPerView: 3 },
    }}
  >
    {services.map((service, index) => (
      <SwiperSlide key={service.title}>
        <AnimatedCard
          delay={index * 0.1}
          className="relative p-6 h-full overflow-hidden group"
        >
          {/* Background */}
          <div
            className="absolute inset-0 bg-cover bg-center scale-100 group-hover:scale-110 transition-transform duration-700"
            style={{ backgroundImage: `url(${service.bg})` }}
          />
          <div className="absolute inset-0 bg-black/70" />

          <div className="relative z-10">
            <div className="w-14 h-14 rounded-xl bg-secondary/90 flex items-center justify-center mb-5">
              <service.icon className="w-7 h-7 text-secondary-foreground" />
            </div>

            <h3 className="text-xl font-heading font-semibold text-white mb-3">
              {service.title}
            </h3>

            <p className="text-white/80 leading-relaxed mb-4">
              {service.description}
            </p>

            <Link
              to="/services"
              className="inline-flex items-center text-secondary font-medium text-sm"
            >
              Learn More
              <ArrowRight className="w-4 h-4 ml-1" />
            </Link>
          </div>
        </AnimatedCard>
      </SwiperSlide>
    ))}
  </Swiper>
</div>

      </div>
<style>{`
  .services-swiper-wrapper {
    position: relative;
  }

  .services-prev,
  .services-next {
    position: absolute;
    top: 50%;
    transform: translateY(-50%);
    z-index: 20;
    width: 46px;
    height: 46px;
    border-radius: 50%;
    background: white;
    color: #111;
    display: flex;
    align-items: center;
    justify-content: center;
    box-shadow: 0 10px 30px rgba(0,0,0,0.2);
    transition: all 0.25s ease;
  }

  .services-prev:hover,
  .services-next:hover {
    background: #f59e0b; /* accent */
    color: white;
    transform: translateY(-50%) scale(1.05);
  }

  .services-prev {
    left: -60px;
  }

  .services-next {
    right: -60px;
  }

  /* Mobile adjustments */
  @media (max-width: 768px) {
    .services-prev {
      left: -15px;
    }
    .services-next {
      right: -15px;
    }
  }
`}</style>


    </section>
  );
};

// export const ServicesSection = () => {
//   return (
//     <section id="services" className="section-padding section-gradient">
//       <div className="container-wide mx-auto">
//         <SectionHeading
//           badge="Our Services"
//           title="Comprehensive Logistics Solutions"
//           subtitle="End-to-end supply chain management for your food export needs, from sourcing to delivery."
//         />

//         <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
//           {services.map((service, index) => (
//             <AnimatedCard key={service.title} delay={index * 0.1} className="p-6 group">
//               <div className="w-14 h-14 rounded-xl bg-secondary/10 flex items-center justify-center mb-5 group-hover:bg-secondary group-hover:scale-110 transition-all duration-300">
//                 <service.icon className="w-7 h-7 text-secondary group-hover:text-secondary-foreground transition-colors" />
//               </div>
//               <h3 className="text-xl font-heading font-semibold text-foreground mb-3">
//                 {service.title}
//               </h3>
//               <p className="text-muted-foreground leading-relaxed mb-4">
//                 {service.description}
//               </p>
//               <Link
//                 to="/services"
//                 className="inline-flex items-center text-secondary font-medium text-sm group/link"
//               >
//                 Learn More
//                 <ArrowRight className="w-4 h-4 ml-1 group-hover/link:translate-x-1 transition-transform" />
//               </Link>
//             </AnimatedCard>
//           ))}
//         </div>
//       </div>
//     </section>
//   );
// };
