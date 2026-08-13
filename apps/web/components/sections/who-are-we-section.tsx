"use client"
import React from "react"
import SectionTemplate from "../section-template"
import {TextAnimate} from "@workspace/ui/components/text-animate"
import Image from "next/image"
import { motion } from "motion/react"
export default function WhoAreWeSection() {
  return (
    <div>
      <SectionTemplate id="who-are-we" className="relative gap-4 sm:items-center md:flex-row md:items-center md:justify-between md:gap-10">
        <div className="flex max-w-xl flex-col gap-6">
          <TextAnimate by="word" animation={"blurInUp"} startOnView className="font-thmanyah-heading text-5xl not-md:text-center">
            شريكك في بناء علامتك التجارية
          </TextAnimate>
          <motion.p
            className="font-thmanyah-subheading-sans leading-10 text-muted-foreground not-lg:text-center"
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{  margin: "-80px" }}
            transition={{ duration: 0.6, ease: "easeOut", delay: 0.2 }}
          >
            نساعد الشركات والعلامات التجارية على النمو من خلال خدمات تسويقية
            وإبداعية مرنة، سواء كنت تحتاج إلى خدمة متخصصة أو إلى حلول متكاملة
            تغطي مختلف جوانب حضورك الرقمي. نعمل معك لفهم أهدافك، وتقديم الحلول
            المناسبة، وتحويل أفكارك إلى نتائج
          </motion.p>
        </div>
        <div className="ease absolute top-20 h-full w-[80%] -rotate-15 overflow-auto rounded-2xl blur-in-2xl blur-out-xl not-md:hidden md:-left-50 lg:-left-90">
          <div className="relative h-full w-full">
            <Image
              src="/svg/bullseye.svg"
              fill
              alt="target"
              className="rounded-lg object-cover opacity-25"
            />
          </div>
        </div>
      </SectionTemplate>
    </div>
  )
}
