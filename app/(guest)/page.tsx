"use client"

import { motion, AnimatePresence } from "framer-motion";
import { CheckCircle, ChevronLeft, ChevronRight, Check, Loader2, ChevronDown } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Textarea } from "@/components/ui/textarea";
import { Item, ItemGroup, ItemMedia, ItemContent, ItemTitle, ItemDescription, ItemActions } from "@/components/ui/item";
// import Autoplay from "embla-carousel-autoplay"
import { useEffect, useState } from "react"
import {CarouselApi } from "@/components/ui/carousel"
import { Button } from "@/components/ui/button"
import Link from "next/link"

type FormData = {
  firstName: string; lastName: string; email: string; phone: string;
  program: string; message: string;
};

const programs = [
  {
    id: 1,
    title: "LINGAP",
    image: "/assets/mission.jpg",
    subtitle: "Support growth, learning, and wellbeing",
    description: "Volunteers in LINGAP support therapy sessions, tutorials, recreation, and wellness activities. Professionals can deliver counseling, speech and occupational therapy, tutoring, and life coaching.",
    bullets: ["Support therapy and learning sessions", "Work directly with children", "Contribute to holistic care"],
  },
  {
    id: 2,
    title: "KAAGAPAY",
    image: "/assets/mission.jpg",
    subtitle: "Stand with communities to build inclusive systems",
    description: "Volunteers help with family strengthening, gift-giving, outreach, advocacy, and community initiatives that support disability inclusion.",
    bullets: ["Community outreach", "Family support programs", "Child advocacy"],
  },
  {
    id: 3,
    title: "BIGKIS",
    image: "/assets/mission.jpg",
    subtitle: "Strengthen inclusive learning through collaboration",
    description: "BIGKIS volunteers support trainings, workshops, and partnerships with schools and institutions to build inclusive practices.",
    bullets: ["Support teachers and facilitators", "Help organize learning events", "Promote inclusive education"],
  },
  {
    id: 4,
    title: "TUKLAS",
    image: "/assets/mission.jpg",
    subtitle: "Help us find, understand, and support every child",
    description: "Volunteers assist in Child Find activities, assessments, and family support to ensure children are identified early and guided to services.",
    bullets: ["Support children and families", "Assist in developmental assessments", "Be part of early intervention"],
  },
];
const events = [
  { id: 1, title: "Parent Orientation", date: "jan 30", location: "Kanlong Center", category: "Special Activities", color: "#6A1B9A", tagBg: "#F3E5F5", tagColor: "#6A1B9A" },
  { id: 2, title: "FIRST TRIMESTER ASSESSMENT WEEK", date: "Apr 20",  location: "Kanlong Center", category: "Assessment Week", color: "#E65100", tagBg: "#FFF3E0", tagColor: "#E65100" },
  { id: 3, title: "Parent-Teacher Conference", date: "Apr 27",  location: "Kanlong Center", category: "Parent Teacher Conference", color: "#2E7D32", tagBg: "#E8F5E9", tagColor: "#2E7D32" },
  { id: 4, title: "FIRST TRIMESTER BREAK", date: "May 4",  location: "Kanlong Center", category: "Trimestral Break", color: "#1565C0", tagBg: "#E3F2FD", tagColor: "#1565C0" },
  { id: 5, title: "SECOND TRIMESTER ASSESSMENT ", date: "Aug 17",  location: "Kanlong Center", category: "Assessment Week", color: "#E65100", tagBg: "#FFF3E0", tagColor: "#E65100" },
  { id: 6, title: "Parent-Teacher Conference", date: "Aug 24",  location: "Kanlong Center", category: "Parent Teacher Conference", color: "#2E7D32", tagBg: "#E8F5E9", tagColor: "#2E7D32" },
  { id: 7, title: "SECOND TRIMESTER BREAK", date: "Sept 1",  location: "Kanlong Center", category: "Trimestral Break", color: "#1565C0", tagBg: "#E3F2FD", tagColor: "#1565C0" },
  { id: 8, title: "THIRD TRIMESTER ASSESSMENT ", date: "Dec 1",  location: "Kanlong Center", category: "Assessment Week", color: "#E65100", tagBg: "#FFF3E0", tagColor: "#E65100" },
  { id: 9, title: "Parent-Teacher Conference", date: "Dec 7",  location: "Kanlong Center", category: "Parent Teacher Conference", color: "#2E7D32", tagBg: "#E8F5E9", tagColor: "#2E7D32" },
  { id: 10, title: "Year-End Celebration", date: "Dec 14", location: "Kanlong Center", category: "Special Activities", color: "#6A1B9A", tagBg: "#F3E5F5", tagColor: "#6A1B9A" },
];
const faqs = [
  { id: "faq-1", 
    question: "How do I sign up as an Alitaptap volunteer?", 
    answer: "You can sign up by filling out our volunteer application form on this page. Our team will get in touch within 7 working days." },
  { id: "faq-2", 
    question: "What is the criteria to be a volunteer?", 
    answer: "Volunteers must be of legal age and share Kanlong's vision, mission, and core values. All applicants go through a screening process." },
  { id: "faq-3", 
    question: "Will training be provided?", 
    answer: "Yes. All volunteers receive training before joining any program, conducted online and/or face-to-face." },
  { id: "faq-4", 
    question: "How much time commitment is expected?", 
    answer: "We encourage volunteers to commit at least 10 weeks. We are flexible and will work with your schedule." },
];
const STEPS = [
  { id: 1, title: "Personal Info" },
  { id: 2, title: "Program" },
  { id: 3, title: "Review" },
];
const defaultForm: FormData = { firstName: "", lastName: "", email: "", phone: "", program: "", message: "" }

function FaqItem({ question, answer }: { question: string; answer: string }) {
  const [open, setOpen] = useState(false);
  return (
    <div className="py-4">
      <button
        onClick={() => setOpen(!open)}
        className="flex w-full items-center justify-between text-left font-medium text-white text-base cursor-pointer"
      >
        {question}
        <ChevronDown className={`size-4 shrink-0 transition-transform duration-200 ${open ? "rotate-180" : ""}`} />
      </button>
      {open && (
        <p className="mt-3 text-white/70 leading-relaxed">{answer}</p>
      )}
    </div>
  );
}
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


export default function HomePage() {
const [volunteerTab, setVolunteerTab] = useState(0);
const [hoveredId, setHoveredId] = useState<number | null>(null);
const [step, setStep] = useState(1);
const [direction, setDirection] = useState(1);
const [form, setForm] = useState<FormData>(defaultForm);
const [submitted, setSubmitted] = useState(false);
const [loading, setLoading] = useState(false);
const update = (field: keyof FormData, value: string) => setForm(prev => ({ ...prev, [field]: value }));
const go = (dir: number) => { setDirection(dir); setStep(s => s + dir); };
const handleSubmit = async () => {
  setLoading(true);
  await new Promise(r => setTimeout(r, 1500));
  setLoading(false);
  setSubmitted(true);
};
const formVariants = {
  enter: (dir: number) => ({ x: dir > 0 ? 40 : -40, opacity: 0 }),
  center: { x: 0, opacity: 1 },
  exit: (dir: number) => ({ x: dir > 0 ? -40 : 40, opacity: 0 }),
};
  const [api, setApi] = useState<CarouselApi>()
  const [selectedIndex, setSelectedIndex] = useState(0)
  const [activeTab, setActiveTab] = useState<"donate" | "volunteer">("donate")
  const [openFaqIndex, setOpenFaqIndex] = useState<number | null>(0)
  const [contactSent, setContactSent] = useState(false)
  useEffect(() => {
    if (!api) return
    const handleSelect = () => setSelectedIndex(api.selectedScrollSnap())
    handleSelect()
    api.on("select", handleSelect)
    api.on("reInit", handleSelect)

    return () => {
      api.off("select", handleSelect)
      api.off("reInit", handleSelect)
    }
  }, [api])

  return (
    <div className="scroll-smooth flex flex-col">
        {/* Hero Section */}
    <section className="relative z-0">
      <video
        autoPlay
        loop
        muted
        playsInline
        className="absolute inset-0 h-full w-full object-cover "
      >
        <source src="./assets/header-video.mp4" type="video/mp4" />
      </video>
  {/* Optional dark overlay so text stays readable */}
  <div className="absolute inset-0 -z-10 bg-black/60" />
    <div className="relative flex min-h-screen items-center justify-center px-6">
      <div className="relative max-w-2xl text-center rounded-2xl bg-black/40 backdrop-blur-sm p-1">
        <h1 className="mt-6 font-semibold text-4xl tracking-tighter text-white sm:text-3xl md:text-6xl md:leading-[1.2] lg:text-7xl">
          "Kanlong"
        </h1>
        <p className="mt-6 text-white/80 md:text-lg">
          Is a Filipino term for shade, mantle, shelter, refuge or sanctuary. We consider every child to be unique and we seek ways to let
          them shine according to their developing physical, psycho-social and intellectual capacities.
        </p>
      </div>
    </div>
  <div className="absolute bottom-0 left-0 right-0 z-10">
    <SectionDivider flip />
  </div>
    </section>

{/* short about kanlong */}
<section className="relative w-full overflow-hidden bg-green-900 px-8 py-16">
  <div className="absolute left-8 top-1/2 -translate-y-1/2 size-28 rounded-full border-2 border-white/10" />
  <div className="absolute left-16 top-1/2 -translate-y-1/2 size-44 rounded-full border-2 border-white/10" />
  <div className="absolute right-8 top-1/2 -translate-y-1/2 size-28 rounded-full border-2 border-white/10" />
  <div className="absolute right-16 top-1/2 -translate-y-1/2 size-44 rounded-full border-2 border-white/10" />
  <div className="relative z-10 mx-auto max-w-3xl text-center">
    <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl md:text-5xl leading-[1.2]">
      Kanlong Foundation <br />
      <span className="text-white">for Differently-Abled Children Inc.</span>
    </h2>
    <p className="mt-4 text-base text-white/80 max-w-xl mx-auto leading-relaxed">
      We are a non-government organization registered with the Securities and Exchange Commission 
      (SEC) on 6 October 2017. We care for differently-abled children, more often referred to 
      as "children with special needs" or "children with disabilities."
    </p>
    <div className="mt-6">
      <Button
        className="rounded-full bg-yellow-400 hover:bg-yellow-300 text-black font-semibold px-8 cursor-pointer"
        size="lg"
        render={<Link href="/about_kanlong" />}
      >
        Learn More About Kanlong
      </Button>
    </div>
  </div>
</section>
<SectionDivider />

{/* help us help them */}
      <section >
        <div className="mx-auto max-w-6xl py-10">
          <div className="mb-12 text-center">
            <h1 className="text-4xl font-bold tracking-tight text-foreground sm:text-5xl">
              HELP US HELP THEM
            </h1>
            <p className="mx-auto mt-4 max-w-2xl text-lg text-muted-foreground">
              Early identification and intervention can have a significant impact on a child&apos;s
              ability to learn new skills, as well as reduce the need for costly interventions over
              time. - cdc.gov
            </p>
          </div>
          <div className="grid grid-cols-1 gap-4 md:grid-cols-3">
            <div className="flex flex-col justify-between gap-4 rounded-2xl border-2 border-green-600 bg-card p-4">
              <div className="relative aspect-square w-full overflow-hidden rounded-xl bg-muted">
                <img
                  src="/assets/image1.jpg"
                  alt="image1"
                  className="h-full w-full object-cover"
                />
              </div>
              <div className="p-2">
                <h3 className="mb-3 text-center text-2xl font-bold leading-tight text-foreground">
                  Identify
                </h3>
              </div>
            </div>
            <div className="flex flex-col justify-between gap-4 rounded-2xl border-2 border-green-600 bg-card p-4">
              <div className="relative aspect-square w-full overflow-hidden rounded-xl bg-muted">
                <img
                  src="/assets/image2.jpg"
                  alt="image2"
                  className="h-full w-full object-cover"
                />
              </div>
              <div className="p-2">
                <h3 className="mb-3 text-center text-2xl font-bold leading-tight text-foreground">
                  Locate
                </h3>
              </div>
            </div>
            <div className="flex flex-col justify-between gap-4 rounded-2xl border-2 border-green-600 bg-card p-4">
              <div className="relative aspect-square w-full overflow-hidden rounded-xl bg-muted">
                <img
                  src="/assets/mission.jpg"
                  alt="image3"
                  className="h-full w-full object-cover"
                />
              </div>
              <div className="p-2">
                <h3 className="mb-3 text-center text-2xl font-bold leading-tight text-foreground">
                  Evaluate
                </h3>
              </div>
            </div>
          </div>
        </div>
        <SectionDivider flip />
      </section>
{/* tab bar for volunteer and donation */}
      <section id="donate-volunteer" className="w-full bg-green-900 py-24 px-6">
          <div className="absolute left-8 top-7/2 -translate-y-1/2 size-28 rounded-full border-2 border-white/10" />
          <div className="absolute left-16 top-7/2 -translate-y-1/2 size-44 rounded-full border-2 border-white/10" />
          <div className="absolute right-8 top-7/2 -translate-y-1/2 size-28 rounded-full border-2 border-white/10" />
          <div className="absolute right-16 top-7/2 -translate-y-1/2 size-44 rounded-full border-2 border-white/10" />
        <div className="mx-auto max-w-7xl px-6 py-10 lg:py-12">
          <div className="mx-auto max-w-3xl text-center">
            <h2 className="text-4xl font-bold tracking-tight sm:text-5xl tracking-tight text-white">
              Choose how you want to help
            </h2>
            <p className="mx-auto mt-4 max-w-2xl text-lg text-white/80">
              Whether through donations or volunteering, your support helps differently-abled
              children access care, inclusion, and brighter opportunities.
            </p>
          </div>

          <div className="mt-8 mb-10 flex justify-center">
            
            <div className="inline-flex items-center rounded-3xl border border-gray-200 bg-gray-100 p-1 ">
            <button
              type="button"
              onClick={() => setActiveTab("donate")}
              className={`rounded-2xl px-8 py-2 text-sm font-medium transition cursor-pointer  ${
                activeTab === "donate"
                  ? "bg-green-800 text-white shadow-sm"
                  : "text-gray-500 hover:text-gray-700"
              }`}
            >
              Donate
            </button>
            <button
              type="button"
              onClick={() => setActiveTab("volunteer")}
              className={`rounded-2xl px-8 py-2 text-sm font-medium transition cursor-pointer ${
                activeTab === "volunteer"
                  ? "bg-green-800 text-white shadow-sm"
                  : "text-gray-500 hover:text-gray-700"
              }`}
            >
              Volunteer
            </button>
            </div>
          </div>


          {activeTab === "donate" ? (
            <div>
              <h3 className="text-3xl font-semibold tracking-tight text-white text-center">Donation Preview</h3>
              <p className="mt-3 max-w-2xl text-white/80 mx-auto text-center">
                Feature-style layout inspired by Feature 193. Media areas are intentionally empty
                placeholders for now.
              </p>
              <div className="mt-8 grid gap-6 md:grid-cols-3">
                <article className="rounded-2xl border border-gray-200 bg-white p-6 md:col-span-2">
                  <h3 className="text-xl font-semibold text-gray-900">Impact Overview</h3>
                  <p className="mt-2 text-sm text-muted-foreground">
                    Space for donation narrative, key stats, or trust copy.
                  </p>
                  <div className="mt-4 h-[380px] rounded-2xl border border-dashed border-emerald-300 bg-emerald-50/50" />
                </article>
                <article className="rounded-2xl border border-gray-200 bg-white p-6">
                  <h3 className="text-lg font-semibold text-gray-900">Quick Card</h3>
                  <div className="mt-4 h-[380px] rounded-2xl border border-dashed border-emerald-300 bg-emerald-50/50" />
                </article>
                <article className="rounded-2xl border border-gray-200 bg-white p-6">
                  <h3 className="text-lg font-semibold text-gray-900">Program A</h3>
                  <div className="mt-4 h-64 rounded-2xl border border-dashed border-emerald-300 bg-emerald-50/50" />
                </article>
                <article className="rounded-2xl border border-gray-200 bg-white p-6 md:col-span-2">
                  <h3 className="text-xl font-semibold text-gray-900">Program B</h3>
                  <div className="mt-4 h-[380px] rounded-2xl border border-dashed border-emerald-300 bg-emerald-50/50" />
                </article>
              </div>
            </div>
          ) : (
              <div>
                {/* Inner volunteer tab bar */}
                <div className="flex rounded-2xl bg-green-800 p-1 mb-12">
                  {["Programs", "Calendar", "FAQs", "Apply"].map((tab, i) => (
                    <button
                      key={tab}
                      onClick={() => setVolunteerTab(i)}
                      className={`flex-1 rounded-xl py-3 text-sm font-semibold transition-all duration-200 cursor-pointer ${
                        volunteerTab === i
                          ? "bg-white text-emerald-700"
                          : "text-white/70 hover:text-white"
                      }`}
                    >
                      {tab}
                    </button>
                  ))}
                </div>
                <AnimatePresence mode="wait">
                  <motion.div
                    key={volunteerTab}
                    initial={{ opacity: 0}}
                    animate={{ opacity: 1}}
                    exit={{ opacity: 0, y: -10 }}
                    transition={{ duration: 0.25 }}
                  >
                    {volunteerTab === 0 && (
                      <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-4">
                  {programs.map((program) => {
                    const isHovered = hoveredId === program.id;
                    return (
                        <motion.div
                        key={program.id}
                        onMouseEnter={() => setHoveredId(program.id)}
                        onMouseLeave={() => setHoveredId(null)}
                        className="relative h-[400px] cursor-pointer overflow-hidden rounded-3xl"  
                        whileHover={{ scale: 1.02 }}
                        transition={{ duration: 0.3 }}
                        >
                        {/* Image — always visible */}
                        <img
                            src={program.image}
                            alt={program.title}
                            className="absolute inset-0 w-full h-full object-cover transition-transform duration-700"
                            style={{ transform: isHovered ? "scale(1.08)" : "scale(1)" }}
                        />
                        {/* Dark overlay */}
                        <div
                            className="absolute inset-0 transition-all duration-500"
                            style={{
                            background: isHovered
                                ? "linear-gradient(to top, rgba(0,0,0,0.92) 0%, rgba(0,0,0,0.5) 50%, rgba(0,0,0,0.2) 100%)"
                                : "linear-gradient(to top, rgba(0,0,0,0.5) 0%, rgba(0,0,0,0.1) 60%, transparent 100%)",
                            }}
                        />
                        {/* Hover — content */}
                        <AnimatePresence>
                          {isHovered && (
                            <motion.div
                              initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: 20 }}
                              transition={{ duration: 0.3 }}
                              className="absolute inset-0 flex flex-col justify-end p-6 bg-black/20"
                            >
                              <div className="flex flex-col gap-3">
                                <div>
                                  <h3 className="text-xl font-bold text-white">{program.title}</h3>
                                  <p className="text-xs text-white/70">{program.subtitle}</p>
                                </div>
                                <p className="text-white/85 text-xs leading-relaxed">{program.description}</p>
                                <div className="flex flex-col gap-1">
                                  <p className="text-xs font-bold text-white/60 uppercase tracking-wider">Ideal for volunteers who want to:</p>
                                  {program.bullets.map((b, i) => (
                                    <div key={i} className="flex items-center gap-2 text-xs text-white/90">
                                      <CheckCircle className="size-3 shrink-0 text-emerald-400" />
                                      {b}
                                    </div>
                                  ))}
                                </div>
                              </div>
                            </motion.div>
                          )}
                        </AnimatePresence>
                        {/* Bottom title always visible */}
                        <AnimatePresence>
                          {!isHovered && (
                            <motion.div
                              initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
                              className="absolute bottom-0 left-0 right-0 p-5"
                            >
                              <p className="text-white font-bold text-lg">{program.title}</p>
                              <p className="text-white/60 text-xs mt-1">{program.subtitle}</p>
                            </motion.div>
                          )}
                        </AnimatePresence>
                      </motion.div>
                    );
                  })}
                </div>
                     )}
                    {volunteerTab === 1 && (
                    <div className="max-w-3xl mx-auto">
                    <div className="mb-6">
                    <h2 className="text-2xl font-bold text-white">Upcoming Events</h2>
                    <p className="text-white/70 mt-1">Join us at any of these upcoming volunteer activities.</p>
                    </div>
                    <ScrollArea className="h-[400px] pr-4">
                    <ItemGroup>
                        {events.map((event) => (
                        <Item key={event.id} variant="outline">
                            <ItemMedia>
                            <div className="flex items-center gap-3">
                                <div className="flex flex-col items-center min-w-[36px]">
                                <span className="text-xl font-bold leading-none text-white">{event.date.split(" ")[1]}</span>
                                <span className="text-xs text-white/70 uppercase tracking-wide">{event.date.split(" ")[0]}</span>
                                </div>
                                <div className="w-1 h-10 rounded-full" style={{ backgroundColor: event.color }} />
                            </div>
                            </ItemMedia>
                              <ItemContent>
                                <ItemTitle className="text-white">{event.title}</ItemTitle>
                                <ItemDescription className="text-white/70">{event.location}</ItemDescription>
                              </ItemContent>
                            <ItemActions>
                            <span
                                className="text-xs font-medium px-3 py-1 rounded-full"
                                style={{ backgroundColor: event.tagBg, color: event.tagColor }}
                            >
                                {event.category}
                            </span>
                            </ItemActions>
                        </Item>
                        ))}
                    </ItemGroup>
                    </ScrollArea>
                </div>

                    )}
                    {volunteerTab === 2 && (
                                    <div className="mx-auto max-w-4xl">
              <div className="text-center mb-12">
                <h2 className="text-4xl font-bold tracking-tight text-white sm:text-5xl">
                  Frequently Asked Questions
                </h2>
                  <p className="mt-4 text-m text-white/70 max-w-2xl mx-auto">
                    If you can't find what you're looking for,{" "}
                    <Link
                      href="/contact"
                      className="text-emerald-600 hover:underline dark:text-emerald-300 font-medium"
                    >
                      get in touch
                    </Link>
                    .
                  </p>
              </div>
                  {/* Accordion */}
                  <div className="w-full mb-16 divide-y divide-border">
                    {faqs.map((faq) => (
                      <FaqItem key={faq.id} question={faq.question} answer={faq.answer} />
                    ))}
                  </div>
                </div>
                    )}
                    {volunteerTab === 3 && (
                <div className="max-w-lg mx-auto">
                  {submitted ? (
                    <div className="flex flex-col items-center gap-4 py-16 text-center">
                      <div className="flex size-16 items-center justify-center rounded-full bg-emerald-100 dark:bg-emerald-900">
                        <Check className="size-8 text-emerald-600" />
                      </div>
                      <h2 className="text-2xl font-bold text-foreground">Application Submitted!</h2>
                      <p className="text-muted-foreground max-w-sm">Thank you for your interest. We'll be in touch within 7 working days.</p>
                      <button
                        onClick={() => { setStep(1); setForm(defaultForm); setSubmitted(false); }}
                        className="rounded-full bg-emerald-600 hover:bg-emerald-700 text-white font-semibold px-8 py-3 mt-2 transition-colors"
                      >
                        Submit Another
                      </button>
                    </div>
                  ) : (
                    <div className="rounded-2xl border border-border bg-card p-8">
                      <h2 className="text-xl font-bold text-foreground mb-1">Apply to Volunteer</h2>
                      <p className="text-sm text-muted-foreground mb-6">Fill out the form and our team will get back to you.</p>

                      {/* Step indicators */}
                      <div className="flex items-center justify-between mb-8">
                        {STEPS.map((s, i) => {
                          const isCompleted = step > s.id;
                          const isCurrent = step === s.id;
                          return (
                            <div key={s.id} className="flex items-center flex-1">
                              <div className="flex flex-col items-center gap-1">
                                <div className={`flex size-9 items-center justify-center rounded-full text-sm font-bold transition-all duration-300 ${isCompleted ? "bg-emerald-600 text-white" : isCurrent ? "bg-foreground text-background" : "bg-muted text-muted-foreground"}`}>
                                  {isCompleted ? <Check className="size-4" /> : s.id}
                                </div>
                                <span className={`text-xs font-medium ${isCurrent ? "text-foreground" : "text-muted-foreground"}`}>{s.title}</span>
                              </div>
                              {i < STEPS.length - 1 && (
                                <div className={`flex-1 h-px mx-2 mb-4 transition-all duration-300 ${step > s.id ? "bg-emerald-600" : "bg-border"}`} />
                              )}
                            </div>
                          );
                        })}
                      </div>
                      {/* Step content */}
                      <div className="overflow-hidden">
                        <AnimatePresence mode="wait" custom={direction}>
                          <motion.div
                            key={step}
                            custom={direction}
                            variants={formVariants}
                            initial="enter"
                            animate="center"
                            exit="exit"
                            transition={{ duration: 0.3, ease: "easeInOut" }}
                          >
                            {step === 1 && (
                              <div className="flex flex-col gap-4">
                                <div className="grid grid-cols-2 gap-4">
                                  <div className="flex flex-col gap-2">
                                    <Label>First Name</Label>
                                    <Input value={form.firstName} onChange={e => update("firstName", e.target.value)} placeholder="Juan" />
                                  </div>
                                  <div className="flex flex-col gap-2">
                                    <Label>Last Name</Label>
                                    <Input value={form.lastName} onChange={e => update("lastName", e.target.value)} placeholder="Dela Cruz" />
                                  </div>
                                </div>
                                <div className="flex flex-col gap-2">
                                  <Label>Email</Label>
                                  <Input type="email" value={form.email} onChange={e => update("email", e.target.value)} placeholder="juan@example.com" />
                                </div>
                                <div className="flex flex-col gap-2">
                                  <Label>Phone Number</Label>
                                  <Input value={form.phone} onChange={e => update("phone", e.target.value)} placeholder="+63 912 345 6789" />
                                </div>
                              </div>
                            )}

                            {step === 2 && (
                              <div className="flex flex-col gap-4">
                                <div className="flex flex-col gap-2">
                                  <Label>Which program interests you?</Label>
                                  <div className="grid grid-cols-2 gap-3">
                                    {["LINGAP", "KAAGAPAY", "BIGKIS", "TUKLAS"].map((p) => (
                                      <button
                                        key={p}
                                        onClick={() => update("program", p)}
                                        className={`rounded-xl border-2 p-3 text-sm font-semibold transition-all ${form.program === p ? "border-emerald-600 bg-emerald-50 text-emerald-700 dark:bg-emerald-950 dark:text-emerald-400" : "border-border text-muted-foreground hover:border-foreground"}`}
                                      >
                                        {p}
                                      </button>
                                    ))}
                                  </div>
                                </div>
                                <div className="flex flex-col gap-2">
                                  <Label>Message (Optional)</Label>
                                  <Textarea value={form.message} onChange={e => update("message", e.target.value)} placeholder="Tell us why you want to volunteer..." rows={3} />
                                </div>
                              </div>
                            )}

                            {step === 3 && (
                              <div className="flex flex-col gap-4">
                                <p className="text-sm text-muted-foreground">Please review your details before submitting.</p>
                                <div className="rounded-xl bg-muted p-5 flex flex-col gap-3 text-sm">
                                  {[
                                    ["Name", `${form.firstName} ${form.lastName}`],
                                    ["Email", form.email],
                                    ["Phone", form.phone || "—"],
                                    ["Program", form.program || "—"],
                                  ].map(([label, value]) => (
                                    <div key={label} className="flex justify-between">
                                      <span className="text-muted-foreground">{label}</span>
                                      <span className="font-medium text-foreground">{value}</span>
                                    </div>
                                  ))}
                                  {form.message && (
                                    <div className="flex flex-col gap-1 pt-2 border-t border-border">
                                      <span className="text-muted-foreground">Message</span>
                                      <span className="text-foreground">{form.message}</span>
                                    </div>
                                  )}
                                </div>
                              </div>
                            )}
                          </motion.div>
                        </AnimatePresence>
                      </div>
                      {/* Navigation */}
                      <div className="flex justify-between mt-8">
                        <Button variant="outline" onClick={() => go(-1)} disabled={step === 1} className="rounded-full">
                          <ChevronLeft className="size-4 mr-1" /> Back
                        </Button>
                        {step < STEPS.length ? (
                          <Button onClick={() => go(1)} className="rounded-full bg-emerald-600 hover:bg-emerald-700 text-white">
                            Next <ChevronRight className="size-4 ml-1" />
                          </Button>
                        ) : (
                          <Button onClick={handleSubmit} disabled={loading} className="rounded-full bg-emerald-600 hover:bg-emerald-700 text-white">
                            {loading ? <><Loader2 className="size-4 mr-2 animate-spin" /> Submitting...</> : <><Check className="size-4 mr-1" /> Submit</>}
                          </Button>
                        )}
                      </div>
                    </div>
                  )}
                </div>
                    )}
                  </motion.div>
                </AnimatePresence>
              </div>
            )}
        </div>
      </section>
      <SectionDivider/>
    </div>
  )
}