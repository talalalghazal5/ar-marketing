"use client"
import React from "react"
import SectionTemplate from "../section-template"
import SectionHeading from "../section-heading"
import { NumberTicker } from "@workspace/ui/components/number-ticker"
import { Separator } from "@workspace/ui/components/separator"
import { motion } from "motion/react"

const stats = [
  { value: 120, suffix: "+", label: "مشروع مكتمل" },
  { value: 50, suffix: "+", label: "عميل سعيد" },
  { value: 6, suffix: "+", label: "خدمات متخصصة" },
  { value: 98, suffix: "+", label: "نسبة رضا العملاء", prefix: "%" },
]

export default function WhyUsSection() {
  return (
    <SectionTemplate className="w-full">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{  margin: "-80px" }}
        transition={{ duration: 0.6, ease: "easeOut" }}
      >
        <SectionHeading title="أرقام تعكس ثقة العملاء" className="not-md:text-center w-full"/>
      </motion.div>
      <div className="flex w-full flex-col items-center justify-evenly gap-7 md:flex-row md:items-center md:justify-evenly">
        {stats.map((stat, index) => (
          <React.Fragment key={index}>
            <motion.div
              className="flex flex-col items-center gap-4"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{  margin: "-60px" }}
              transition={{ duration: 0.5, ease: "easeOut", delay: index * 0.1 }}
            >
              <div className="text-6xl md:text-4xl lg:text-6xl">
                {stat.prefix && (
                  <span className="text-4xl md:text-2xl lg:text-4xl text-muted-foreground">{stat.prefix}</span>
                )}
                <NumberTicker value={stat.value} className="font-bold text-primary!" />{" "}
                <span className="text-muted-foreground">{stat.suffix}</span>
              </div>
              <p className="font-thmanyah-serif text-2xl text-muted-foreground md:text-lg lg:text-2xl">
                {stat.label}
              </p>
            </motion.div>
            {index < stats.length - 1 && (
              <>
                <Separator orientation="horizontal" className="md:hidden" />
                <Separator orientation="vertical" className="hidden h-24 md:block" />
              </>
            )}
          </React.Fragment>
        ))}
      </div>
    </SectionTemplate>
  )
}
