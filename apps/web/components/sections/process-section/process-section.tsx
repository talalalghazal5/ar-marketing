"use client"
import SectionHeading from "@/components/section-heading"
import SectionTemplate from "@/components/section-template"
import { useScroll } from "motion/react"
import React, { useRef, useState } from "react"
import Timeline from "./timeline"
import { processData } from "@/data/process-data"
import ProcessCard from "./process-card"

export default function ProcessSection() {
  const [activeStep, setActiveStep] = useState<number>(0)
  const sectionRef = useRef<HTMLDivElement>(null)
  const { scrollYProgress } = useScroll({
    target: sectionRef,
  })

  return (
    <div  ref={sectionRef}>
      <SectionTemplate>
        <SectionHeading title="رحلة مشروعك معنا" align="start"/>
        <div className="grid md:gap-6 md:grid-cols-[150px_1fr]">
          {/* Timeline */}
          <div className="not-md:hidden">
            <Timeline
              activeStep={activeStep}
              scrollYProgress={scrollYProgress}
            />
          </div>
          {/* Card list */}
          <div className="flex flex-col gap-10">
            {processData.map((process) => (
              <div key={process.id} className="h-100">
                <ProcessCard

                process={process}
                onActive={setActiveStep}
              />
              </div>
            ))}
          </div>
        </div>
      </SectionTemplate>
    </div>
  )
}
