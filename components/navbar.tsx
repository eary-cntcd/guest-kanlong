"use client";

import { useState } from "react";
import Link from "next/link";
import { Menu, X, ChevronDown } from "lucide-react";
import { Button } from "@/components/ui/button";
import { ModeToggle } from "@/components/mode-toggle";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu";
import { cn } from "@/lib/utils";

const aboutItems = [
  {
    label: "About Kanlong",
    href: "/about_kanlong",
    description: "Learn about the Kanlong Foundation's mission and story.",
  },
  {
    label: "Programs",
    href: "/programs",
    description: "Explore the programs and initiatives we run.",
  },
  {
    label: "Our Team",
    href: "/our_team",
    description: "Meet the people behind the foundation.",
  },
];

const navLinks = [
  { label: "Home", href: "/" },
  // { label: "Gallery", href: "" },
  { label: "Contact", href: "/contact" },
];

function ListItem({ href, label, description }: { href: string; label: string; description: string }) {
  return (
    <li>
      <NavigationMenuLink
        render={<Link href={href} />}
        className={cn(
          "block select-none rounded-md px-3 py-2 leading-none no-underline outline-none transition-colors",
          "hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground"
        )}
      >
        <div className="text-sm font-medium leading-none mb-1">{label}</div>
        <p className="text-xs leading-snug text-muted-foreground line-clamp-2">
          {description}
        </p>
      </NavigationMenuLink>
    </li>
  );
}

export default function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [mobileAboutOpen, setMobileAboutOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 w-full bg-background/80 backdrop-blur-md">
      <div className="mx-auto max-w-7xl px-6">
        <div className="flex h-16 items-center justify-between">

          {/* ── Logo (left) ── */}
          <Link href="/" className="flex items-center gap-2 flex-shrink-0">
            <div className="flex h-8 w-8 items-center justify-center rounded-full bg-emerald-600">
              <span className="text-xs font-black text-white">K</span>
            </div>
            <span className="font-bold text-foreground text-sm">
              Kanlong Foundation
            </span>
          </Link>

          {/* ── Desktop Nav (center) ── */}
          <div className="hidden md:flex absolute left-1/2 -translate-x-1/2">
                      <NavigationMenu>
                        <NavigationMenuList>

                          {/* Home */}
                          <NavigationMenuItem>
                            <NavigationMenuLink
                              render={<Link href="/" />}
                              className={navigationMenuTriggerStyle()}
                            >
                              Home
                            </NavigationMenuLink>
                          </NavigationMenuItem>

                          {/* About dropdown */}
                          <NavigationMenuItem>
                            <NavigationMenuTrigger>About Us</NavigationMenuTrigger>
                            <NavigationMenuContent>
                              <ul className="grid p-2 w-64">
                                {aboutItems.map((item) => (
                                  <ListItem key={item.label} {...item} />
                                ))}
                              </ul>
                            </NavigationMenuContent>
                          </NavigationMenuItem>

                          {/* Gallery */}
                          {/* <NavigationMenuItem>
                            <NavigationMenuLink
                              render={<Link href="" />}
                              className={navigationMenuTriggerStyle()}
                            >
                              Gallery
                            </NavigationMenuLink>
                          </NavigationMenuItem> */}

                          {/* Contact */}
                          <NavigationMenuItem>
                            <NavigationMenuLink
                              render={<Link href="/contact" />}
                              className={navigationMenuTriggerStyle()}
                            >
                              Contact & Support
                            </NavigationMenuLink>
                          </NavigationMenuItem>

                        </NavigationMenuList>
                      </NavigationMenu>
                    </div>

          {/* ── Right: ModeToggle + CTA ── */}
          <div className="hidden md:flex items-center gap-3">
            <ModeToggle />
            <Button
              render={<Link href="" target="_blank" rel="noopener noreferrer" />}
              className="rounded-full bg-green-800 hover:bg-emerald-600 text-white text-sm px-5"
            >
              Get Involved
            </Button>
          </div>

          {/* ── Mobile: hamburger ── */}
          <div className="flex md:hidden items-center gap-2">
            <ModeToggle />
            <button
              onClick={() => setMobileOpen(!mobileOpen)}
              className="p-2 rounded-md text-foreground hover:bg-muted transition-colors"
            >
              {mobileOpen ? <X className="size-5" /> : <Menu className="size-5" />}
            </button>
          </div>

        </div>

        {/* ── Mobile Menu ── */}
        {mobileOpen && (
          <div className="md:hidden border-t border-border py-4 flex flex-col gap-1">

            <Link
              href="/"
              onClick={() => setMobileOpen(false)}
              className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors px-2 py-2 rounded-md hover:bg-muted"
            >
              Home
            </Link>

            {/* About accordion for mobile */}
            <div>
              <button
                onClick={() => setMobileAboutOpen(!mobileAboutOpen)}
                className="flex items-center justify-between w-full text-sm font-medium text-muted-foreground hover:text-foreground transition-colors px-2 py-2 rounded-md hover:bg-muted"
              >
                About
                <ChevronDown
                  className={`size-4 transition-transform duration-200 ${mobileAboutOpen ? "rotate-180" : ""}`}
                />
              </button>
              {mobileAboutOpen && (
                <div className="flex flex-col gap-1 pl-3 mt-1">
                  {aboutItems.map((item) => (
                    <Link
                      key={item.label}
                      href={item.href}
                      onClick={() => setMobileOpen(false)}
                      className="text-sm text-muted-foreground hover:text-foreground transition-colors py-2 px-2 rounded-md hover:bg-muted"
                    >
                      {item.label}
                    </Link>
                  ))}
                </div>
              )}
            </div>

            <Link
              href="/gallery"
              onClick={() => setMobileOpen(false)}
              className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors px-2 py-2 rounded-md hover:bg-muted"
            >
              Gallery
            </Link>

            <Link
              href="/contact"
              onClick={() => setMobileOpen(false)}
              className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors px-2 py-2 rounded-md hover:bg-muted"
            >
              Contact
            </Link>
            <Button
              render={<Link href="/volunteer" target="_blank" rel="noopener noreferrer" />}
              className="rounded-full bg-emerald-600 hover:bg-emerald-700 text-white mt-3"
            >
              Get Involved
            </Button>
          </div>
        )}
      </div>
    </header>
  );
}