"use client"
import { Button, buttonVariants } from "@workspace/ui/components/button"
import { HugeiconsIcon } from "@hugeicons/react"
import { ArrowUpLeft } from "@hugeicons/core-free-icons"
import Link from "next/link"
import React from "react"
import { cn } from "@workspace/ui/lib/utils"
import { useLenis } from "@/components/providers/lenis-provider"

const navLinks = [
  { label: "خدماتنا", href: "#services" },
  { label: "أعمالنا", href: "/portfolio" },
  { label: "من نحن؟", href: "#who-are-we" },
]

export default function Header() {
  const { scrollTo } = useLenis()

  function handleNavClick(
    e: React.MouseEvent<HTMLAnchorElement>,
    href: string
  ) {
    if (href.startsWith("#")) {
      e.preventDefault()
      scrollTo(href)
    }
  }

  return (
    <header className="fixed z-99 flex w-full items-center justify-between border-b border-accent bg-background/60 p-5 backdrop-blur-3xl">
      <a
        href="#"
        onClick={(e) => { e.preventDefault(); scrollTo(0) }}
        className="font-thmanyah-heading text-2xl font-bold text-foreground cursor-pointer"
      >
        <span className="text-primary">AR</span> Marketing
      </a>
      <nav className="flex items-center gap-10">
        {navLinks.map(({ label, href }) => (
          <a
            key={href}
            href={href}
            onClick={(e) => handleNavClick(e, href)}
            className={cn(
              "font-thmanyah-subheading-sans text-foreground! cursor-pointer",
              buttonVariants({ variant: "link" })
            )}
          >
            {label}
          </a>
        ))}
        <Link
          href={"/"}
          className={cn(
            "font-thmanyah-subheading-sans text-foreground!",
            buttonVariants({ variant: "link" })
          )}
          onClick={(e) => {
            e.preventDefault()
            scrollTo("/")
          }}
        >
          متجرنا
          <HugeiconsIcon strokeWidth={2} icon={ArrowUpLeft}></HugeiconsIcon>
        </Link>
      </nav>
    </header>
  )
}
