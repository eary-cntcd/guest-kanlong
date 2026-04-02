"use client";

import type { LucideIcon } from "lucide-react";
import Link from "next/link";
import React, { type ComponentProps } from "react";
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
import { aboutMenuItems } from "@/config/Navbar";

export const NavMenu = (props: ComponentProps<typeof NavigationMenu>) => (
  <NavigationMenu {...props}>
    <NavigationMenuList className="gap-1 space-x-0 text-sm">
      <NavigationMenuItem>
        <NavigationMenuLink
          className={cn(navigationMenuTriggerStyle(), "bg-transparent hover:bg-white/20")}
          render={<Link href="/" />}
        >
          Home
        </NavigationMenuLink>
      </NavigationMenuItem>

      <NavigationMenuItem>
        <NavigationMenuTrigger className="bg-transparent hover:bg-white/20 data-[state=open]:bg-white/20 data-[state=open]:text-white">
          About Us
        </NavigationMenuTrigger>
        <NavigationMenuContent>
          <ul className="grid w-500px gap-3 p-1 md:w-600px md:grid-cols-2 lg:w-700px">
            {aboutMenuItems.map((item) => (
              <ListItem href={item.href} icon={item.icon} key={item.title} title={item.title}>
                {item.description}
              </ListItem>
            ))}
          </ul>
        </NavigationMenuContent>
      </NavigationMenuItem>
      {/* Our Team — standalone */}
      <NavigationMenuItem>
        <NavigationMenuLink
          className={cn(navigationMenuTriggerStyle(), " bg-transparent hover:bg-white/20")}
          render={<Link href="/our_team" />}
        >
          Our Team
        </NavigationMenuLink>
      </NavigationMenuItem>
      {/* Contact & Support — standalone */}
      <NavigationMenuItem>
        <NavigationMenuLink
          className={cn(navigationMenuTriggerStyle(), "bg-transparent hover:bg-white/20")}
          render={<Link href="/contact" />}
        >
          Contact & Support
        </NavigationMenuLink>
      </NavigationMenuItem>

    </NavigationMenuList>
  </NavigationMenu>
);
const ListItem = ({
  className,
  title,
  icon: Icon, 
  href,
  children,
  ...props
}: {
  className?: string;
  title: string;
  icon: LucideIcon;
  href: string;
  children?: React.ReactNode;
}) => {
  return (
    <li>
      <NavigationMenuLink
        className={cn(
          "block select-none space-y-2 rounded-md p-3 leading-none no-underline outline-hidden transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground",
          className
        )}
        render={<Link href={href} />} 
        {...props}
      >
        {Icon && <Icon className="mb-4 size-6 text-primary" />} 
        <div className="font-semibold text-sm leading-none">{title}</div>
        <p className="line-clamp-2 text-muted-foreground text-sm leading-snug">
          {children}
        </p>
      </NavigationMenuLink>
    </li>
  );
};
