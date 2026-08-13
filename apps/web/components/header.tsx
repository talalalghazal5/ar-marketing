"use client"
import { Button, buttonVariants } from "@workspace/ui/components/button"
import { HugeiconsIcon } from "@hugeicons/react"
import { ArrowUpLeft, Menu01Icon } from "@hugeicons/core-free-icons"
import Link from "next/link"
import React, { useState } from "react"
import { cn } from "@workspace/ui/lib/utils"
import { useLenis } from "@/components/providers/lenis-provider"
import {
  Sheet,
  SheetContent,
  SheetFooter,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@workspace/ui/components/sheet"

const navLinks = [
  { label: "خدماتنا", href: "/#services" },
  { label: "أعمالنا", href: "/portfolio" },
  { label: "من نحن؟", href: "/#who-are-we" },
]

export default function Header() {
  const { scrollTo } = useLenis()
  const [open, setOpen] = useState(false)
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
        onClick={(e) => {
          e.preventDefault()
          scrollTo(0)
        }}
        className="cursor-pointer font-thmanyah-heading text-2xl font-bold text-foreground"
      >
        <span className="text-primary">AR</span> Marketing
      </a>
      <nav className="flex items-center gap-10 not-md:hidden md:block">
        {navLinks.map(({ label, href }) => (
          <a
            key={href}
            href={href}
            onClick={(e) => handleNavClick(e, href)}
            className={cn(
              "cursor-pointer font-thmanyah-subheading-sans text-foreground!",
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
      <Sheet modal open={open} onOpenChange={(open) => setOpen(open)}>
        <SheetTrigger
          className={"md:hidden"}
          render={
            <Button variant={"ghost"} size={"icon-sm"}>
              <HugeiconsIcon icon={Menu01Icon} />
            </Button>
          }
        />
        <SheetContent side="top" className={"z-99"} dir="rtl">
          <SheetHeader>
            <SheetTitle>
              <a
                href="#"
                onClick={(e) => {
                  e.preventDefault()
                  setOpen(false)
                  scrollTo(0)
                }}
                className="cursor-pointer font-thmanyah-heading text-2xl font-bold text-foreground"
              >
                <span className="text-primary">AR</span> Marketing
              </a>
            </SheetTitle>
          </SheetHeader>
          <SheetFooter>
            <div className="flex flex-col gap-4">
              {navLinks.map(({ label, href }) => (
                <a
                  key={href}
                  href={href}
                  onClick={(e) => {
                    handleNavClick(e, href)
                    setOpen(false)
                  }}
                  className={cn(
                    "cursor-pointer font-thmanyah-subheading-sans text-foreground!",
                    buttonVariants({ variant: "link" })
                  )}
                >
                  {label}
                </a>
              ))}
            </div>
          </SheetFooter>
        </SheetContent>
      </Sheet>
    </header>
  )
}
