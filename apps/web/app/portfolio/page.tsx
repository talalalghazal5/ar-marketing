import React from "react"
import SectionHeading from "@/components/section-heading"
import SectionTemplate from "@/components/section-template"
import PortfolioClient from "./components/portfolio-client"

export default function Page() {
  return (
    <div className="relative z-0 w-full scrollbar-none overflow-x-clip bg-background px-10">
      {/* Glow effects */}
      <div className="fixed -top-100 -left-150 z-0 h-200 w-250 rounded-full bg-linear-to-br from-accent/20 to-primary/80 blur-[150px]" />
      <div className="fixed -right-100 -bottom-160 z-0 h-230 w-200 rounded-full bg-linear-to-br from-primary/70 to-accent/20 blur-[100px]" />
      <SectionTemplate id="portfolio" className="relative pt-38">
        <SectionHeading title="أعمالنا" align="start"/>
        {/* Portfolio items would be rendered here */}
        <PortfolioClient />
      </SectionTemplate>
    </div>
  )
}