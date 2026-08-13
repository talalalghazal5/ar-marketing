"use client"
import { MotionValue } from "motion/react"
import React from "react"
import Milestone from "./milestone"
import { processData } from "@/data/process-data"

type TimelineProps = {
  activeStep: number
  scrollYProgress: MotionValue<number>
}

export default function Timeline({
  activeStep,
}: TimelineProps) {
  return (
    <div className="h-xl! sticky top-40 flex flex-col justify-evenly gap-5 self-start">
      {processData.map((process, index) => (
          <div key={index} className="flex flex-col items-center gap-5">
              <Milestone active={process.id === activeStep}>
                  <p className="text-lg font-semibold font-thmanyah-subheading-sans ">{index + 1}</p>
              </Milestone>
              {index !== processData.length - 1 && (
                  <div className="h-10 w-px bg-muted-foreground"></div>
              )}
          </div>
      ))}
    </div>
  )
}
