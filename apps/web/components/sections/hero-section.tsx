"use client"
import { Rocket01Icon, ArrowDown02Icon } from "@hugeicons/core-free-icons"
import { HugeiconsIcon } from "@hugeicons/react"
import { Button } from "@workspace/ui/components/button"
import Image from "next/image"
import SectionTemplate from "@/components/section-template"
import { motion } from "motion/react"
import { useLenis } from "../providers/lenis-provider"
import HeroHeading from "../hero-heading"

export default function HeroSection() {
  const { scrollTo } = useLenis()

  return (
    <SectionTemplate className="min-h-svh gap-4 sm:items-center md:flex-row md:items-center md:justify-between md:gap-6">
      <div className="flex flex-col gap-5 not-md:text-center">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: "easeOut" }}
        >
          <HeroHeading
            title="شركة تسويق رقمي متكامل لنمو أعمالك"
            subtitle="نساعدك على بناء هوية بصرية قوية تُعبّر عن علامتك التجارية وتميّزها في السوق."
            align="start"
            className="gap-5"
          />
        </motion.div>
        <motion.div
          className="flex items-center gap-3 not-md:justify-center"
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut", delay: 0.25 }}
        >
          <motion.div whileHover={{ scale: 1.05 }}>
            <Button
              className="w-fit font-thmanyah-subheading-sans"
              size="lg"
              onClick={() => scrollTo("#contact")}
            >
              <HugeiconsIcon
                icon={Rocket01Icon}
                className="size-5"
                strokeWidth={2}
              />
              اطلب استشارة
            </Button>
          </motion.div>
          <motion.div whileHover={{ scale: 1.05 }}>
            <Button
              variant="secondary"
              className="w-fit border border-primary/60 bg-accent font-thmanyah-subheading-sans hover:bg-accent/80"
              size="lg"
              onClick={() => scrollTo("#services")}
            >
              <HugeiconsIcon
                icon={ArrowDown02Icon}
                className="size-5"
                strokeWidth={2}
              />
              تعرف على خدماتنا
            </Button>
          </motion.div>
        </motion.div>
      </div>
      <motion.div
        initial={{ opacity: 0, scale: 0.96 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.8, ease: "easeOut", delay: 0.15 }}
        whileHover={{
          border: "1px solid var(--color-primary)",
          rotate: "-2deg",
          transition: { type: "tween", duration: 0.3, ease: "easeInOut" },
        }}
        className="ease h-100 w-[50%] rounded-2xl border border-primary/60 bg-accent/30 p-4 shadow-2xl shadow-black/50 transition-shadow duration-400 not-md:hidden hover:shadow-2xl! hover:shadow-primary/60!"
      >
        <div className="relative h-full w-full">
          <Image
            src="/images/Marketing.jpg"
            fill
            alt="خدمات التسويق الرقمي في AR Marketing"
            className="rounded-lg object-cover"
          />
        </div>
      </motion.div>
    </SectionTemplate>
  )
}
