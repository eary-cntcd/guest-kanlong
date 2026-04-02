import { Fragment } from "react/jsx-runtime";
import { Blocks, Eye, Gift, HandHeart, Handshake,  Sparkles, Sprout } from "lucide-react";
import { CarouselAbout } from "@/components/carousel-about";

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

export default function aboutPage() {
  const coreValues = [
    {
      id: "value-1",
      name: "Kinship",
      icon: Handshake,
      description: "We value the sense of belongingness where no child is left behind.",
    },
    {
      id: "value-2",
      name: "Nuturing",
      icon: Sprout,
      description: "We care, we protect, we encourage, we enhance​.",
    },
    {
      id: "value-3",
      name: "Awareness & Acceptance",
      icon: Eye,
      description: "We recognize the fact that not all children are the same. We accept differences and mindful of their needs.",
    },
    {
      id: "value-4",
      name: "Linking",
      icon: Blocks,
      description: "We connect and bridge the gap between the differently-abled children and the support that they need.",
    },
    {
      id: "value-5",
      name: "Open-heartedness & ​Open-mindedness",
      icon: HandHeart,
      description: "We value the sense of belongingness where no child is left behind.​",
    },
    {
      id: "value-6",
      name: "Generosity",
      icon: Gift,
      description: "We give all that we can, we work hard for those that we can’t; we share what we have.",
    },
    {
      id: "value-7",
      name: "Non-corforming",
      icon: Sparkles,
      description: "We refuse to force the children to conform to social norms; we create the environment suitable for them.",
    },
];

    return (
        <>
<CarouselAbout />
{/* Mission & Vision */}
  <div className="absolute bottom-0 left-0 right-0 z-10">
    <SectionDivider flip />
  </div>    <section className="py-6 px-6 bg-green-900">
        <div className="absolute left-8 top-3/2 -translate-y-1/2 size-28 rounded-full border-2 border-white/10" />
  <div className="absolute left-16 top-3/2 -translate-y-1/2 size-44 rounded-full border-2 border-white/10" />
  <div className="absolute right-8 top-3/2 -translate-y-1/2 size-28 rounded-full border-2 border-white/10" />
  <div className="absolute right-16 top-3/2 -translate-y-1/2 size-44 rounded-full border-2 border-white/10" />
      <div className="mx-auto max-w-5xl flex flex-col gap-24">
        <div className="flex flex-col gap-12 lg:flex-row lg:items-center lg:gap-16">
          <div className="w-full lg:w-1/2 flex items-center justify-center">
            <div className="relative w-72 h-64 sm:w-80 sm:h-72">
              <div className="absolute inset-0 rounded-sm border-2 border-white/80 rotate-[-5deg]" />
              <img
                src="/assets/image1.jpg"
                alt="Vision"
                className="absolute inset-0 w-full h-full object-cover rounded-sm rotate-[4deg] shadow-lg"
              />
            </div>
          </div>
          <div className="w-full lg:w-1/2 flex flex-col gap-4">
            <div className="flex items-center gap-2 pb-2 border-b border-border">
              <h2 className="text-xl font-black uppercase tracking-widest text-white">
                Vision
              </h2>
            </div>
            <p className="font-bold text-white leading-relaxed">
              "Co-create s.p.a.c.e.s and transcend a spectrum of limitations"
            </p>
            <p className="text-white leading-relaxed text-justify">
              We envision co-creating a safe, vibrant, inclusive and enabling
              environment for children with disabilities, one that respects
              their fundamental human rights, creates opportunities for them to
              transcend a spectrum of limitations, discover and develop their
              unlimited potentials, and enable them to feel empowered, to enjoy
              life and self-fulfillment as productive, and contributing members
              of society.
            </p>
          </div>
        </div>
        <div className="flex flex-col gap-12 lg:flex-row-reverse lg:items-center lg:gap-16">
          <div className="w-full lg:w-1/2 flex items-center justify-center">
            <div className="relative w-72 h-64 sm:w-80 sm:h-72">
              <div className="absolute inset-0 rounded-sm border-2 border-white/80 rotate-[5deg] " />
              <img
                src="/assets/image2.jpg"
                alt="Mission"
                className="absolute inset-0 w-full h-full object-cover rounded-sm rotate-[-4deg] shadow-lg"
              />
            </div>
          </div>
          <div className="w-full lg:w-1/2 flex flex-col gap-4">
            <div className="flex items-center gap-2 pb-2 border-b border-border">
              <h2 className="text-xl font-black uppercase tracking-widest text-white">
                Mission
              </h2>
            </div>
            <p className="font-bold text-white leading-relaxed">
              "Championing inclusion: Valued children, thriving communities,
              lifelong empowerment"
            </p>
            <p className="text-white leading-relaxed text-justify">
              Our mission is to provide center and whole-of-community-based
              approaches, programs, and related support services to ensure that
              children with disabilities are valued and accepted by their
              families and society at large; that they may have access to
              inclusive, equitable and quality education, social protection and
              health and related services to promote their lifelong learning,
              active and meaningful participation in mainstream Philippine
              society.
            </p>
          </div>
        </div>
      </div>
    </section>
    <SectionDivider/>
{/* Core Values */}
        <section className="mx-auto max-w-6xl px-6 py-24">
    <div className="container flex flex-col items-center text-center">
        <h2 className="my-6 text-2xl font-bold text-pretty lg:text-4xl">
        Core Values
        </h2>
        <p className="mb-8 max-w-3xl text-muted-foreground lg:text-xl">
        These principles guide everything we do and shape how we work together to deliver exceptional results.
        </p>
    </div>
    <div className="container mt-16 grid gap-x-8 gap-y-16 md:grid-cols-2 lg:grid-cols-3">
        {coreValues.map((value, index) => (
        <div 
            key={value.id} 
            className={`flex flex-col items-center ${index === 6 ? 'md:col-span-2 lg:col-span-3' : ''}`}
        >
            <div className="mb-4 flex size-20 items-center justify-center rounded-full bg-primary/10 md:mb-5 lg:size-15">
            {(() => {
              const Icon = value.icon;
              return <Icon className="size-8 text-primary" />;
            })()}
            </div>
            <p className="text-center font-medium text-lg">{value.name}</p>
            <p className="text-center text-muted-foreground mt-2 max-w-xs">{value.description}</p>
        </div>
        ))}
    </div>
        </section>
</>
);
}
