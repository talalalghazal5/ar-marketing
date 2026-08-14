"use client"
import ContactForm from "@/components/contact-form"
import SectionTemplate from "@/components/section-template"
import SectionHeading from "@/components/section-heading"
import { motion } from "motion/react"

export default function ContactSection() {
  return (
    <SectionTemplate
      id="contact"
      className="mt-50 pb-30 not-md:pt-15 not-lg:items-center"
    >
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{  margin: "-80px" }}
        transition={{ duration: 0.6, ease: "easeOut" }}
      >
        <SectionHeading
          title="حان الوقت لتصنع حضورك الرقمي !"
          subtitle="ابدأ اليوم، ودعنا نبني معًا علامة تجارية تستحق أن تُرى"
          className="gap-8 not-md:text-center"
        />
      </motion.div>
      <motion.div
        className="w-full max-w-2xl self-center rounded-lg border border-primary bg-card p-10"
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{  margin: "-60px" }}
        transition={{ duration: 0.6, ease: "easeOut", delay: 0.2 }}
      >
        <ContactForm />
      </motion.div>
    </SectionTemplate>
  )
}
