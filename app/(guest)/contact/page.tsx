"use client";
 
import { useState } from "react";
import { Mail, CircleFadingPlus,Phone, Loader2, CheckCircle, AlertCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Checkbox } from "@/components/ui/checkbox";
import { Separator } from "@/components/ui/separator";

export default function contactPage() {
    const [loading, setLoading] = useState(false);
    const [status, setStatus] = useState<"idle" | "success" | "error">("idle");
    const [agreed, setAgreed] = useState(false);
    const officeHours = [
  { day: "Monday – Friday", hours: "8:00 AM – 4:00 PM" },
  { day: "Saturday", hours: "9:00 AM – 4:00 PM" },
  { day: "Sunday", hours: "Closed" },
];
    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        if (!agreed) return;
        setLoading(true);
        setStatus("idle");
        // Simulate submission
        await new Promise((res) => setTimeout(res, 1500));
        setLoading(false);
        setStatus("success");
    };
    const contactCards = [
  {
    icon: Mail,
    title: "Email",
    description: "Send us an email and we'll get back to you within 24 hours.",
    link: "kanlongfoundation@gmail.com",
    linkLabel: "kanlongfoundation@gmail.com",
  },
//   {
//     icon: MapPin,
//     title: "Office",
//     description: "EKB Heights, Iba, Silang, Cavite.",
//     link: "https://maps.app.goo.gl/KjV6CYFrBgZZTAAF9",
//     linkLabel: "Get directions",
//   },
  {
    icon: Phone,
    title: "Phone",
    description: "We're available Mon-Fri, 8am-4pm.",
    link: "Phone: 0917-633-7039",
    linkLabel: "+63 917-633-7039",
  },
  {
    icon: CircleFadingPlus  ,
    title: "Social Media Account",
    description: "We allow messages on our socials.",
    link: "",
    links: [
    { label: "Facebook", 
      href: "" },
    { label: "Instagram", 
      href: "" },
  ],
  },
];
    return (
    <section className="py-24 px-6">
      <div className="mx-auto max-w-6xl">
        <div className="grid gap-8 lg:grid-cols-2 lg:items-stretch">
          {/* Left — Header + Contact info cards */}
          <div className="flex flex-col gap-4">
            {/* Header is inside left column so it aligns with the form */}
            <div className="mb-4">
              <h1 className="text-4xl font-bold tracking-tight text-foreground sm:text-5xl">
                Contact & Support
              </h1>
              <p className="mt-4 text-lg text-muted-foreground max-w-xl">
                Have a question or want to get involved? We'd love to hear from
                you. Reach out through any of the channels below.
              </p>
            </div>
            {/* Contact info cards */}
            {contactCards.map((card) => {
              const Icon = card.icon;
              return (
                <div
                  key={card.title}
                  className="flex items-start gap-4 rounded-2xl bg-muted p-5"
                >
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-background">
                    <Icon className="h-5 w-5 text-foreground" />
                  </div>
                  <div className="flex flex-col gap-1">
                    <p className="font-semibold text-foreground">{card.title}</p>
                    <p className="text-sm text-muted-foreground">{card.description}</p>
                    {/* Single link */}
                    {card.link && (
                        <a href={card.link} className="text-sm font-medium text-green-800 hover:underline dark:text-green-700">
                        {card.linkLabel}
                        </a>
                    )}
                    {/* Multiple links */}
                    {card.links && card.links.map((l) => (
                        <a key={l.href} href={l.href} target="_blank" rel="noopener noreferrer"
                        className="text-sm font-medium text-green-800 hover:underline dark:text-green-700">
                        {l.label}
                        </a>
                    ))}
                    </div>
                </div>
              );
            })}
          </div>

          {/* Right — Contact form */}
          <Card className="border-0 shadow-none bg-muted h-full">
            <CardContent className="p-6">
              <h2 className="text-xl font-bold text-foreground mb-1">
                Get in touch with us!
              </h2>
              <p className="text-sm text-muted-foreground mb-6">
                Please fill out the form below and our team will get back to you
                as soon as possible.
              </p>
              <form onSubmit={handleSubmit} className="flex flex-col gap-5">
                <div className="grid grid-cols-2 gap-4">
                  <div className="flex flex-col gap-2">
                    <Label htmlFor="firstName">First Name</Label>
                    <Input id="firstName" placeholder="Juan" required />
                  </div>
                  <div className="flex flex-col gap-2">
                    <Label htmlFor="lastName">Last Name</Label>
                    <Input id="lastName" placeholder="Dela Cruz" required />
                  </div>
                </div>
                <div className="flex flex-col gap-2">
                  <Label htmlFor="email">Email</Label>
                  <Input id="email" type="email" placeholder="juan@example.com" required />
                </div>
                <div className="flex flex-col gap-2">
                  <Label htmlFor="company">Organization / Company</Label>
                  <Input id="company" placeholder="Optional" />
                </div>
                <div className="flex flex-col gap-2">
                  <Label htmlFor="message">Message</Label>
                  <Textarea
                    id="message"
                    placeholder="How can we help you?"
                    rows={4}
                    required
                  />
                </div>
 
                {/* Terms checkbox */}
                <div className="flex items-start gap-3">
                  <Checkbox
                    id="terms"
                    checked={agreed}
                    onCheckedChange={(v) => setAgreed(!!v)}
                  />
                  <Label htmlFor="terms" className="text-sm text-muted-foreground leading-relaxed cursor-pointer">
                    I agree to the{" "}
                    <a href="" className="text-foreground underline hover:text-green-700">
                      Terms and Conditions
                    </a>{" "}
                    and{" "}
                    <a href="" className="text-foreground underline hover:text-green-700">
                      Privacy Policy
                    </a>
                    .
                  </Label>
                </div>
 
                {status === "success" && (
                  <div className="flex items-center gap-2 rounded-lg bg-emerald-50 p-3 text-emerald-700 dark:bg-emerald-950 dark:text-emerald-400">
                    <CheckCircle className="h-4 w-4 shrink-0" />
                    <p className="text-sm font-medium">Message sent! We'll be in touch soon.</p>
                  </div>
                )}
                {status === "error" && (
                  <div className="flex items-center gap-2 rounded-lg bg-red-50 p-3 text-red-700 dark:bg-red-950 dark:text-red-400">
                    <AlertCircle className="h-4 w-4 shrink-0" />
                    <p className="text-sm font-medium">Something went wrong. Please try again.</p>
                  </div>
                )}
 
                <Button
                  type="submit"
                  disabled={loading || !agreed}
                  className="rounded-full bg-green-800 hover:bg-emerald-600 text-white w-full"
                >
                  {loading ? (
                    <>
                      <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                      Sending...
                    </>
                  ) : (
                    "Send Message"
                  )}
                </Button>
              </form>
            </CardContent>
          </Card>
 
        </div>
 
        <Separator className="my-12" />
 
        {/* Office Hours + Location combined card */}
        <div className="rounded-2xl bg-muted p-8 flex flex-col gap-8 md:flex-row md:gap-16">
 
          <div className="flex-1">
            <h3 className="text-xl font-bold text-foreground mb-1">Office Hours</h3>
            <p className="text-sm text-muted-foreground mb-6">
              We're available to assist you during the following hours.
            </p>
            <div className="flex flex-col gap-3">
              {officeHours.map((item) => (
                <div key={item.day} className="flex items-center justify-between text-sm">
                  <span className="text-muted-foreground">{item.day}</span>
                  <span className="font-medium text-foreground">{item.hours}</span>
                </div>
              ))}
            </div>
          </div>
 
          <Separator orientation="vertical" className="hidden md:block" />
 
          <div className="flex-1">
            <h3 className="text-xl font-bold text-foreground mb-1">Our Location</h3>
            <p className="text-sm text-muted-foreground mb-4">
              Come visit us at our main office.
            </p>
            <div className="flex flex-col gap-1 text-sm text-muted-foreground">
              <p className="font-medium text-foreground">
                Kanlong Foundation For Differently-Abled Children INC.
              </p>
              <p>EKB Heights, Iba, Silang, Cavite</p>
              <a
                href="https://maps.app.goo.gl/EBjrfaw9tzEVb4DY6"
                target="_blank"
                rel="noopener noreferrer"
                className="mt-2 text-emerald-600 hover:underline dark:text-emerald-400 font-medium"
              >
                View on Google Maps →
              </a>
            </div>
          </div>
 
        </div>
 
      </div>
    </section>
);
}
