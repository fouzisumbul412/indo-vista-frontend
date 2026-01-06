import { useMemo, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Link } from "react-router-dom";
import { Beef, Fish, Leaf, Package, ArrowRight } from "lucide-react";
import { SectionHeading } from "@/components/shared/SectionHeading";

type Product = {
  icon: any;
  title: string;
  description: string;
  items: string[];
  accent: string;      // used for subtle glows
  stripImage: string;     // used in strip tiles
  heroImage: string;      // used in featured panel background
};

const products: Product[] = [
  {
    icon: Beef,
    title: "Frozen Meat",
    description:
      "Premium quality buffalo meat, chicken parts, and mutton cuts processed under strict hygiene standards.",
    items: ["Buffalo meat cuts", "Chicken parts", "Mutton & lamb", "Offals"],
    accent: "rgba(239, 68, 68, 0.35)", // red-500
    stripImage: "/images/meat.png",
    heroImage: "/images/meat.png",
  },
  {
    icon: Fish,
    title: "Seafood & Fish",
    description:
      "Fresh-frozen seafood including shrimp, prawns, fish fillets, and marine products.",
    items: ["Shrimp & prawns", "Fish fillets", "Squid & cuttlefish", "Crab"],
    accent: "rgba(59, 130, 246, 0.35)", // blue-500
    stripImage: "/images/seafood.png",
    heroImage: "/images/seafood.png",
  },
  {
    icon: Leaf,
    title: "Spices & Herbs",
    description:
      "Authentic Indian spices and herbs, cleaned, graded, and packed for export.",
    items: ["Turmeric", "Red chilli", "Cumin seeds", "Coriander"],
    accent: "rgba(34, 197, 94, 0.35)", // green-500
    stripImage: "/images/spices.png",
    heroImage: "/images/spices.png",
  },
  {
    icon: Package,
    title: "Other Food Products",
    description:
      "Extended range of food products including pulses, grains, and processed foods.",
    items: ["Basmati rice", "Pulses & lentils", "Processed foods", "Oils"],
    accent: "rgba(245, 158, 11, 0.35)", // amber-500
    stripImage: "/images/other.png",
    heroImage: "/images/other.png",
  },
];

const fadeUp = {
  hidden: { opacity: 0, y: 18 },
  show: (i: number) => ({ opacity: 1, y: 0, transition: { duration: 0.5, delay: i * 0.06 } }),
};

export const ProductsSection = () => {
  const [active, setActive] = useState(0);
  const current = products[active];

  // Optional: precompute “fake image texture” variations per card
  const textures = useMemo(
    () => [
      "bg-[radial-gradient(circle_at_20%_20%,rgba(255,255,255,0.14),transparent_40%),radial-gradient(circle_at_80%_30%,rgba(255,255,255,0.08),transparent_35%),linear-gradient(to_bottom,rgba(255,255,255,0.06),transparent_55%)]",
      "bg-[radial-gradient(circle_at_25%_25%,rgba(255,255,255,0.14),transparent_42%),radial-gradient(circle_at_75%_35%,rgba(255,255,255,0.08),transparent_35%),linear-gradient(to_bottom,rgba(255,255,255,0.06),transparent_55%)]",
      "bg-[radial-gradient(circle_at_28%_22%,rgba(255,255,255,0.14),transparent_40%),radial-gradient(circle_at_72%_32%,rgba(255,255,255,0.08),transparent_35%),linear-gradient(to_bottom,rgba(255,255,255,0.06),transparent_55%)]",
      "bg-[radial-gradient(circle_at_22%_28%,rgba(255,255,255,0.14),transparent_40%),radial-gradient(circle_at_78%_28%,rgba(255,255,255,0.08),transparent_35%),linear-gradient(to_bottom,rgba(255,255,255,0.06),transparent_55%)]",
    ],
    []
  );

  return (
    <section className="section-padding bg-primary">
      <div className="container-wide mx-auto">
        <SectionHeading
          badge="Products"
          title="Premium Food Export Range"
          subtitle="Quality-assured products sourced from certified suppliers across India." 
          light={true}
         
        />

        {/* NEW: Showcase Strip (unique + trendy, not like Services cards) */}
        <motion.div
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-80px" }}
          className="mt-10"
        >
          <div className="relative">
            {/* soft ambient glow behind strip */}
            <div
              className="pointer-events-none absolute -inset-x-6 -inset-y-10 rounded-[32px] opacity-70 blur-3xl"
              style={{
                background: `radial-gradient(circle at 40% 35%, ${current.accent}, transparent 95%)`,
              }}
            />

            <div className="relative rounded-[28px] border border-border bg-card/10 backdrop-blur-md p-4 sm:p-5">
              <div className="flex items-center justify-between gap-4 mb-3">
                <div className="text-sm text-muted">
                  Hover / tap a category to preview
                </div>
                <div className="hidden sm:flex items-center gap-2">
                  <span className="h-1.5 w-1.5 rounded-full bg-secondary/70" />
                  <span className="text-xs text-muted">Export-ready • Cold chain</span>
                </div>
              </div>

              {/* Strip: vertical tiles (desktop) / horizontal scroll (mobile) */}
              <div className="flex gap-3 overflow-x-auto pb-2 sm:pb-0 sm:grid sm:grid-cols-4 sm:overflow-visible">
                {products.map((p, i) => {
                  const Icon = p.icon;
                  const isActive = i === active;

                  return (
                    <motion.button
                      key={p.title}
                      custom={i}
                      variants={fadeUp}
                      onMouseEnter={() => setActive(i)}
                      onFocus={() => setActive(i)}
                      onClick={() => setActive(i)}
                      className={[
                        "relative shrink-0 sm:shrink",
                        "w-[240px] sm:w-auto",
                        "rounded-2xl border transition-all duration-300 text-left",
                        isActive
                          ? "border-secondary/40"
                          : "border-border hover:border-secondary/25",
                      ].join(" ")}
                    >
                      {/* “Image” layer (replace later with real image using bg-[url(...)] ) */}
                      <div className="relative h-[150px] sm:h-[170px] overflow-hidden rounded-2xl">
                        {/* <div
                          className={[
                            "absolute inset-0 bg-gradient-to-br",
                            p.stripBg,
                            textures[i],
                          ].join(" ")}
                        /> */}

                        <div
  className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-105"
  style={{ backgroundImage: `url(${p.stripImage})` }}
/>

{/* overlay for readability */}
<div className="absolute inset-0 bg-black/45" />

                        <div className="absolute inset-0 bg-[linear-gradient(to_top,rgba(0,0,0,0.72),rgba(0,0,0,0.12),rgba(0,0,0,0.10))]" />
                        <div className="absolute inset-0 opacity-25 bg-[radial-gradient(circle_at_20%_30%,rgba(255,255,255,0.18),transparent_55%)]" />

                        {/* top-right icon chip */}
                        <div className="absolute top-3 right-3">
                          <div className="h-10 w-10 rounded-xl bg-secondary/12 border border-secondary/15 backdrop-blur flex items-center justify-center">
                            <Icon className="h-5 w-5 text-secondary" />
                          </div>
                        </div>

                        {/* bottom title */}
                        <div className="absolute bottom-3 left-3 right-3">
                          <div className="flex items-end justify-between gap-3">
                            <div>
                              <div className="text-[15px] font-heading font-semibold text-white">
                                {p.title}
                              </div>
                              <div className="text-[12px] text-white/70">
                                Export grade packaging
                              </div>
                            </div>

                            {/* active indicator */}
                            <div
                              className={[
                                "h-2 w-2 rounded-full",
                                isActive ? "bg-secondary" : "bg-white/35",
                              ].join(" ")}
                            />
                          </div>
                        </div>

                        {/* hover/active zoom */}
                        <motion.div
                          aria-hidden
                          className="absolute inset-0"
                          initial={false}
                          animate={{ scale: isActive ? 1.04 : 1 }}
                          transition={{ duration: 0.35 }}
                        />
                      </div>
                    </motion.button>
                  );
                })}
              </div>
            </div>
          </div>
        </motion.div>

        {/* NEW: Featured Panel (dynamic) */}
        <div className="mt-8">
          <div className="relative overflow-hidden rounded-[28px] border border-border bg-card">
            <div className="grid grid-cols-1 lg:grid-cols-[1.35fr_0.65fr]">
              {/* Left: cinematic “visual” */}
              <div className="relative min-h-[260px] sm:min-h-[320px] lg:min-h-[380px]">
                <AnimatePresence mode="wait">
                  <motion.div
                    key={current.title}
                    initial={{ opacity: 0.0, scale: 1.02 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0.0, scale: 1.02 }}
                    transition={{ duration: 0.35 }}
                    className="absolute inset-0"
                  >
                    {/* <div
                      className={[
                        "absolute inset-0 bg-gradient-to-br",
                        current.heroBg,
                      ].join(" ")}
                    /> */}
                    <div
  className="absolute inset-0 bg-cover bg-center"
  style={{ backgroundImage: `url(${current.heroImage})` }}
/>

{/* cinematic overlays */}
<div className="absolute inset-0 bg-gradient-to-br from-black/60 via-black/30 to-black/80" />
<div className="absolute inset-0 opacity-20 bg-[radial-gradient(circle_at_30%_20%,rgba(255,255,255,0.25),transparent_55%)]" />

                    {/* texture/noise for premium look */}
                    <div className="absolute inset-0 opacity-[0.18] bg-[radial-gradient(circle_at_30%_20%,rgba(255,255,255,0.22),transparent_55%)]" />
                    <div className="absolute inset-0 bg-[linear-gradient(to_top,rgba(0,0,0,0.70),rgba(0,0,0,0.12))]" />

                    {/* “framing lines” */}
                    <div className="absolute inset-0">
                      <div className="absolute left-6 top-6 h-10 w-10 border-l border-t border-white/25 rounded-tl-xl" />
                      <div className="absolute right-6 top-6 h-10 w-10 border-r border-t border-white/25 rounded-tr-xl" />
                      <div className="absolute left-6 bottom-6 h-10 w-10 border-l border-b border-white/25 rounded-bl-xl" />
                      <div className="absolute right-6 bottom-6 h-10 w-10 border-r border-b border-white/25 rounded-br-xl" />
                    </div>

                    {/* bottom-left “badge” */}
                    <div className="absolute bottom-6 left-6">
                      <div className="inline-flex items-center gap-2 rounded-full bg-white/10 border border-white/15 px-3 py-1.5 backdrop-blur">
                        <span className="h-2 w-2 rounded-full bg-secondary" />
                        <span className="text-xs text-white/80">
                          Cold chain compliant
                        </span>
                      </div>
                    </div>

                    {/* big category title overlay */}
                    <div className="absolute top-6 left-6 right-6">
                      <div className="max-w-[520px]">
                        <div className="text-2xl sm:text-3xl font-heading font-semibold text-white">
                          {current.title}
                        </div>
                        <div className="mt-2 text-sm sm:text-base text-white/70 leading-relaxed">
                          {current.description}
                        </div>
                      </div>
                    </div>
                  </motion.div>
                </AnimatePresence>
              </div>

              {/* Right: content */}
              <div className="relative p-6 sm:p-8">
                <div className="flex items-start gap-3">
                  <div className="h-11 w-11 rounded-2xl bg-secondary/10 border border-secondary/15 flex items-center justify-center">
                    <current.icon className="h-5 w-5 text-secondary" />
                  </div>
                  <div>
                    <div className="text-sm text-muted-foreground">Sample Products</div>
                    <div className="text-lg font-heading font-semibold text-foreground">
                      Export-ready assortment
                    </div>
                  </div>
                </div>

                <ul className="mt-5 space-y-2">
                  {current.items.map((item) => (
                    <li key={item} className="flex items-center gap-3 text-sm text-muted-foreground">
                      <span className="h-1.5 w-1.5 rounded-full bg-secondary" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>

                <div className="mt-6 rounded-2xl border border-border bg-background/60 p-4">
                  <div className="text-xs text-muted-foreground">Packaging & compliance</div>
                  <div className="mt-1 text-sm text-foreground">
                    Clean labeling, graded lots, temperature-safe handling.
                  </div>
                </div>

                <div className="mt-7 flex flex-col gap-3">
                  <Link
                    to="/products"
                    className="group inline-flex items-center justify-between rounded-2xl bg-secondary text-secondary-foreground px-4 py-3 font-semibold transition hover:opacity-95"
                  >
                    Explore Full Range
                    <ArrowRight className="h-5 w-5 transition-transform group-hover:translate-x-0.5" />
                  </Link>

                  <Link
                    to="/contact"
                    className="inline-flex items-center justify-between rounded-2xl border border-border bg-card px-4 py-3 text-foreground font-semibold hover:border-secondary/30 transition"
                  >
                    Request Quote
                    <ArrowRight className="h-5 w-5 text-muted-foreground" />
                  </Link>
                </div>

                {/* subtle glow */}
                <div
                  className="pointer-events-none absolute -bottom-20 -right-20 h-56 w-56 rounded-full blur-3xl opacity-60"
                  style={{
                    background: `radial-gradient(circle at 30% 30%, ${current.accent}, transparent 60%)`,
                  }}
                />
              </div>
            </div>
          </div>
        </div>

        {/* Footer link (optional; can remove since CTA is inside panel) */}
        <motion.div
          initial={{ opacity: 0, y: 14 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-10 text-center"
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
