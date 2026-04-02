import Link from "next/link";
import {
  IconBrandInstagram,
  IconBrandFacebook,
  IconBrandX,
  IconBrandYoutube,
  IconMail,
} from "@tabler/icons-react"

const footerLinks = [
  {
    heading: "About Us",
    links: [
      { label: "About Kanlong", href: "/about" },
      { label: "Programs", href: "/programs" },
      { label: "Contact", href: "/contact" },
    ],
  },
  {
    heading: "Organization",
    links: [
      { label: "Our Team", href: "/team" },
      { label: "Contact & Support", href: "/contact" },
    ],
  },
  {
    heading: "Get Involved",
    links: [
      { label: "Donate", href: "/#donate-volunteer" },
      { label: "Volunteer", href: "/#donate-volunteer" },
    ],
  },
];

const socialLinks = [
  { icon: IconBrandInstagram, href: "#", label: "Instagram" },
  { icon: IconBrandFacebook, href: "#", label: "Facebook" },
  { icon: IconBrandX, href: "#", label: "Twitter" },
  { icon: IconBrandYoutube, href: "#", label: "YouTube" },
  { icon: IconMail, href: "#", label: "Mail" },
]

export default function Footer() {
  return (
    <footer className="bg-background">
      <div className="mx-auto max-w-7xl px-6 py-16">
        <div className="flex flex-col gap-12 lg:flex-row lg:justify-between">

          {/* Left — Logo + tagline + socials */}
          <div className="flex flex-col gap-6 lg:max-w-xs">
            {/* Logo */}
            <Link href="/" className="flex items-center gap-2">
              <span className="flex h-9 w-9 items-center justify-center rounded-full bg-emerald-600 text-white font-bold text-sm">
                K
              </span>
              <span className="text-lg font-semibold text-foreground">
                Kanlong Foundation
              </span>
            </Link>

            {/* Tagline */}
            <p className="text-sm text-muted-foreground leading-relaxed">
              A non-stock, non-profit organization dedicated to responding to
              the needs of Filipino differently-abled children.
            </p>

            {/* Social icons */}
<div className="flex items-center gap-4">
  {socialLinks.map((item, index) => {
    const Icon = item.icon

    return (
      <a
        key={index}
        href={item.href}
        aria-label={item.label}
        className="text-muted-foreground hover:text-emerald-600 transition"
      >
        <Icon size={20} stroke={2} />
      </a>
    )
  })}
</div>
          </div>

          {/* Right — Nav columns */}
          <div className="grid grid-cols-2 gap-10 sm:grid-cols-4">
            {/* Home standalone */}
            <div className="flex flex-col gap-4">
              <p className="text-sm font-semibold text-foreground">
                Navigation
              </p>
              <Link
                href="/"
                className="text-sm text-muted-foreground hover:text-foreground transition-colors"
              >
                Home
              </Link>
            </div>

            {/* Dynamic columns */}
            {footerLinks.map((col) => (
              <div key={col.heading} className="flex flex-col gap-4">
                <p className="text-sm font-semibold text-foreground">
                  {col.heading}
                </p>
                <ul className="flex flex-col gap-3">
                  {col.links.map(({ label, href }) => (
                    <li key={label}>
                      <Link
                        href={href}
                        className="text-sm text-muted-foreground hover:text-foreground transition-colors"
                      >
                        {label}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        {/* Bottom bar */}
        <div className="flex flex-col-reverse items-center justify-between gap-4 sm:flex-row">
          <span className="text-sm text-muted-foreground">
            &copy; {new Date().getFullYear()} Kanlong Foundation For
            Differently-Abled Children INC. All rights reserved.
          </span>
          <div className="flex items-center gap-6">
            <Link
              href="/terms"
              className="text-sm text-muted-foreground hover:text-foreground transition-colors"
            >
              Terms and Conditions
            </Link>
            <Link
              href="/privacy"
              className="text-sm text-muted-foreground hover:text-foreground transition-colors"
            >
              Privacy Policy
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}