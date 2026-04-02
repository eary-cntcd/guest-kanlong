"use client";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ArrowRight, CheckCircle, ClipboardPenLine, HeartHandshake, Stethoscope } from "lucide-react";

function SectionDivider({ flip = false }: { flip?: boolean }) {
  return flip ? (
    <svg viewBox="0 0 1440 110" preserveAspectRatio="none" style={{ display: "block", width: "100%", height: "70px", marginBottom: "-2px" }} xmlns="http://www.w3.org/2000/svg">
      <path d="M0,10 C300,130 900,-30 1440,10 L1440,110 L0,110 Z" fill="#14532d"/>
      <path d="M0,10 C300,130 900,-30 1440,10" fill="none" stroke="#eab308" strokeWidth="4" opacity="0.7"/>
    </svg>
  ) : (
    <svg viewBox="0 0 1440 110" preserveAspectRatio="none" style={{ display: "block", width: "100%", height: "70px", marginTop: "-2px" }} xmlns="http://www.w3.org/2000/svg">
      <path d="M0,100 C300,-20 900,140 1440,100 L1440,0 L0,0 Z" fill="#14532d"/>
      <path d="M0,100 C300,-20 900,140 1440,100" fill="none" stroke="#eab308" strokeWidth="4" opacity="0.7"/>
    </svg>
  );
}

export default function programPage()   {
  const features = [
    {
      title: "This is the flagship program of KANLONG FOUNDATION FOR DIFFERENTLY-ABLED CHILDREN",
      description: "We provide inclusive educational programs that cater to the unique needs of differently-abled children. Our trained educators use specialized approaches to unlock each child's full potential.",
      image: "/assets/feature-1.jpg",
      imageAlt: "Education program",
    },
    {
      title: "Inakay Center for Child Development",
      description: "This is the flagship program of KANLONG FOUNDATION FOR DIFFERENTLY-ABLED CHILDREN. The INAKAY CENTER FOR CHILD DEVELOPMENT begins with an assessment of a child’s psychological, developmental and learning needs to provide them with appropriate assistance and interventions.",
      image: "/assets/feature-2.jpg",
      imageAlt: "Community health program",
    },
  ];
  const featuresGroup1 = features.slice(0, 1); 
  const featuresGroup2 = features.slice(1);    
  const [hoveredId, setHoveredId] = useState<number | null>(null);
  const cards = [
  {
    id: 1,
    title: "LIMLIM",
    description:
      "Our flagship education program provides inclusive learning for differently-abled children using specialized approaches that unlock each child's full potential.",
    image: "/assets/mission.jpg",
    href: "#",
  },
  {
    id: 2,
    title: "lIPAD",
    description:
      "We reach out to underserved families to ensure no child is left without the support and care they need to grow and thrive.",
    image: "/assets/vision.jpg",
    href: "#",
  },
  {
    id: 3,
    title: "SAMUT-SARI",
    description:
      "Specialized therapy sessions and wellness programs designed to support the physical, emotional, and social development of differently-abled children.",
    image: "/assets/image1.jpg",
    href: "#",
  },
];
const featuresCards = [
  {
    id: "1",
    icon: ClipboardPenLine,
    title: "Initial Assessment",
    description:
      "Ready to use components that work out of the box with no configuration.",
  },
  {
    id: "2",
    icon: Stethoscope,
    title: "Referral Specialists",
    description:
      "Fully customizable components with clean, maintainable code structure.",
  },
  {
    id: "3",
    icon: HeartHandshake,
    title: "Referral Therapists",
    description:
      "Complete control over styling and animations with modern patterns.",
  },
];

  return (
      <>
    {/* what is inakay */}
{/* Section 1 — What is Inakay */}
<section className="py-24 px-6">
  <div className="mx-auto max-w-6xl">
    <div className="flex flex-col gap-16">

      <div className="text-center mb-5">
        <h2 className="text-4xl font-bold tracking-tight text-foreground sm:text-5xl">
          What is Inakay Center for Child Development?
        </h2>
      </div>

      {/* Row 1 */}
      <div className="flex flex-col gap-8 lg:flex-row lg:items-center lg:gap-16">
        <div className="w-full lg:w-1/2">
          <div className="overflow-hidden rounded-2xl border border-border aspect-video relative">
            <img src="/assets/image2.jpg" alt="Education program" className="object-cover w-full h-full" />
          </div>
        </div>
        <div className="w-full lg:w-1/2 flex flex-col gap-4">
          <h3 className="text-3xl font-bold tracking-tight text-foreground lg:text-4xl">
            This is the flagship program of KANLONG FOUNDATION FOR DIFFERENTLY-ABLED CHILDREN
          </h3>
          <p className="text-lg text-muted-foreground leading-relaxed">
          “Inakay” is a Filipino term from two root words - “Ina” meaning mother and “akay” which means to lead 
           hand or be guided by.  It is also the term used for a fledgling, a young bird learning to fly.
          </p>
        </div>
      </div>

      {/* Row 2 — reversed */}
      <div className="flex flex-col gap-8 lg:flex-row-reverse lg:items-center lg:gap-16">
        <div className="w-full lg:w-1/2">
          <div className="overflow-hidden rounded-2xl border border-border aspect-video relative">
            <img src="/assets/image2.jpg" alt="Community health program" className="object-cover w-full h-full" />
          </div>
        </div>
        <div className="w-full lg:w-1/2 flex flex-col gap-4">
          <p className="text-lg text-muted-foreground leading-relaxed">
          Differently-abled children, with their vulnerabilities are carefully hand-held and led towards their next stage of 
          growth and development, as a mother nurtures and guides her child.  
          </p>
        </div>
      </div>

    </div>
  </div>
</section>

<SectionDivider flip />

{/* Section 2 — Inakay Center */}
<section className="py-12 px-6 bg-green-900">
  <div className="mx-auto max-w-6xl">
    <div className="flex flex-col gap-16">

      {/* Header */}
      <div className="text-center">
        <h2 className="text-4xl font-bold tracking-tight text-white sm:text-5xl">
          Inakay Center for Child Development
        </h2>
      </div>

      {/* Row 1 */}
      <div className="flex flex-col gap-8 lg:flex-row lg:items-center lg:gap-16">
        <div className="w-full lg:w-1/2 flex flex-col gap-4">
          <p className="text-lg text-white/70 leading-relaxed">
            This is the flagship program of KANLONG FOUNDATION FOR DIFFERENTLY-ABLED 
            CHILDREN. The INAKAY CENTER FOR CHILD DEVELOPMENT begins with an assessment 
             a child’s psychological, developmental and learning needs to provide them 
             with appropriate assistance and interventions.
          </p>
          <ul className="flex flex-col gap-2 mt-2">
            <li className="flex items-start gap-3 text-white/80">
              <CheckCircle className="size-5 shrink-0 text-yellow-400 mt-0.5" />
              <span className="text-base leading-relaxed">Early Intervention Program</span>
            </li>
            <li className="flex items-start gap-3 text-white/80">
              <CheckCircle className="size-5 shrink-0 text-yellow-400 mt-0.5" />
              <span className="text-base leading-relaxed">Behavior Intervention Program</span>
            </li>
            <li className="flex items-start gap-3 text-white/80">
              <CheckCircle className="size-5 shrink-0 text-yellow-400 mt-0.5" />
              <span className="text-base leading-relaxed">Beyond School Program-Tutorial</span>
            </li>
                        <li className="flex items-start gap-3 text-white/80">
              <CheckCircle className="size-5 shrink-0 text-yellow-400 mt-0.5" />
              <span className="text-base leading-relaxed">Life Skills Program</span>
            </li>
            <li className="flex items-start gap-3 text-white/80">
              <CheckCircle className="size-5 shrink-0 text-yellow-400 mt-0.5" />
              <span className="text-base leading-relaxed">Speech Therapy</span>
            </li>
            <li className="flex items-start gap-3 text-white/80">
              <CheckCircle className="size-5 shrink-0 text-yellow-400 mt-0.5" />
              <span className="text-base leading-relaxed">Occupational Therapy</span>
            </li>
          </ul>
        </div>
        <div className="w-full lg:w-1/2">
          <div className="overflow-hidden rounded-2xl border border-white/20 aspect-video relative">
            <img src="/assets/image2.jpg" alt="feature image" className="object-cover w-full h-full" />
          </div>
        </div>
      </div>
    </div>
  </div>
</section>
    <SectionDivider />
    {/* Our Program */}
   <section className="py-24 px-6">
      <div className="mx-auto max-w-6xl">
        {/* Header */}
        <div className="mb-16 text-center">
          <h2 className="text-5xl font-bold tracking-tight text-foreground lg:text-6xl">
            Our Programs
          </h2>
          <p className="mt-4 text-lg text-muted-foreground max-w-2xl mx-auto">
            Discover the initiatives we run to create lasting impact in the
            lives of differently-abled children and their families.
          </p>
        </div>
        {/* Cards Grid */}
        <div className="grid grid-cols-1 gap-4 md:grid-cols-3 ">
          {cards.map((card) => {
            const isHovered = hoveredId === card.id;
            return (
              <motion.div
                key={card.id}
                onMouseEnter={() => setHoveredId(card.id)}
                onMouseLeave={() => setHoveredId(null)}
                className="relative h-[420px] cursor-pointer overflow-hidden rounded-3xl bg-muted "
                whileHover={{ scale: 1.02 }}
                transition={{ duration: 0.3 }}
              >
                {/* Image - always visible */}
                <img
                  src={card.image}
                  alt={card.title}
                  className="absolute inset-0 h-full w-full object-cover transition-transform duration-700"
                  style={{ transform: isHovered ? "scale(1.08)" : "scale(1)" }}
                />
                {/* Default overlay - number visible */}
                <div
                  className="absolute inset-0 transition-all duration-500"
                  style={{
                    background: isHovered
                      ? "linear-gradient(to top, rgba(0,0,0,0.92) 0%, rgba(0,0,0,0.5) 50%, rgba(0,0,0,0.2) 100%)"
                      : "linear-gradient(to top, rgba(0,0,0,0.5) 0%, rgba(0,0,0,0.1) 60%, transparent 100%)",
                  }}
                />
                {/* Number - shown when not hovered */}
                <AnimatePresence>
                  {!isHovered && (
                    <motion.div
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      exit={{ opacity: 0 }}
                      transition={{ duration: 0.25 }}
                      className="absolute inset-0 flex items-center justify-center"
                    >
                    </motion.div>
                  )}
                </AnimatePresence>
                {/* Hover content - title, description, button */}
                <AnimatePresence>
                  {isHovered && (
                    <motion.div
                      initial={{ opacity: 0, y: 30 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: 30 }}
                      transition={{ duration: 0.35 }}
                      className="absolute inset-0 flex flex-col justify-between p-6"
                    >
                      {/* Top - card number */}
                      <span className="text-sm font-semibold text-white/60 uppercase tracking-widest">
                         {card.title}
                      </span>
                      {/* Bottom - description + button */}
                      <div className="flex flex-col gap-4">
                        <p className="text-white/90 text-sm leading-relaxed">
                          {card.description}
                        </p>
                        <Button
                          size="sm"
                          className="w-full rounded-full bg-white text-black hover:bg-white/90 font-semibold"
                        >
                          Learn More
                          <ArrowRight className="ml-2 size-4" />
                        </Button>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
                {/* Bottom title - always visible when not hovered */}
                <AnimatePresence>
                  {!isHovered && (
                    <motion.div
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      exit={{ opacity: 0 }}
                      transition={{ duration: 0.25 }}
                      className="absolute bottom-0 left-0 right-0 p-5"
                    >
                      <p className="text-white font-semibold text-lg">
                        {card.title}
                      </p>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            );
          })}
        </div>
      </div>

    </section>
        <SectionDivider flip />
    {/* Lingap */}
    <section className="py-24 px-6 bg-green-900">
      <div className="mx-auto max-w-5xl">
        <div className="text-center mb-16">
          <h2 className="text-5xl font-bold tracking-tight text-white lg:text-6xl">
            LINGAP
          </h2>
          <p className="mt-4 text-lg text-whitee/80">
            Protective Care
          </p>
        </div>
        {/* Cards */}
        <div className="grid grid-cols-1 gap-4 md:grid-cols-3">
          {featuresCards.map((feature) => {
            const Icon = feature.icon;
            return (
              <div
                key={feature.id}
                className="flex flex-col items-center text-center gap-4 rounded-3xl bg-muted p-10"
              > 
                <Icon className="size-10 text-primary stroke-[1.2]" />
                <h3 className="text-xl font-bold text-foreground">
                  {feature.title}
                </h3>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  {feature.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>

    <SectionDivider/>

</>
  );
}