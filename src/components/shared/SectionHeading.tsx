import { motion } from 'framer-motion';

interface SectionHeadingProps {
  title: string;
  subtitle?: string;
  badge?: string;
  centered?: boolean;
  light?: boolean;
   className?: string;
  badgeClass?: string;
  titleClass?: string;
  subtitleClass?: string;
}

export const SectionHeading = ({
  title,
  subtitle,
  badge,
  centered = true,
  light = false,
   className = "",
  badgeClass = "",
  titleClass = "",
  subtitleClass = "",
}: SectionHeadingProps) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
      className={`mb-12 ${centered ? 'text-center' : ''}`}
    >
      {badge && (
        <span
          className={`inline-block px-4 py-1.5 rounded-full text-xs font-semibold uppercase tracking-wider mb-4 ${
            light
              ? 'bg-primary-foreground/20 text-primary-foreground'
              : 'bg-secondary/10 text-secondary'
          }`}
        >
          {badge}
        </span>
      )}
      <h2
        className={`text-3xl md:text-4xl lg:text-5xl font-heading font-bold mb-4 ${
          light ? 'text-primary-foreground' : 'text-foreground'
        }`}
      >
        {title}
      </h2>
      {subtitle && (
        <p
          className={`text-lg max-w-2xl ${centered ? 'mx-auto' : ''} ${
            light ? 'text-primary-foreground/80' : 'text-muted-foreground'
          }`}
        >
          {subtitle}
        </p>
      )}
    </motion.div>
  );
};
