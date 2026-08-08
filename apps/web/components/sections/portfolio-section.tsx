"use client"
import React, { useEffect, useState } from "react"
import SectionTemplate from "@/components/section-template"
import SectionHeading from "@/components/section-heading"
import { motion } from "motion/react"
import { getItems } from "@/app/actions/portfolio-actions"
import { PortfolioItem } from "@/data/types"
import PortfolioItemCard from "@/app/portfolio/components/portfolio-item-card"

export default function PortfolioSection() {
  const [items, setItems] = useState<PortfolioItem[]>([])

  useEffect(() => {
    const initData = async () => {
      const data = await getItems()
      if (data) {
        // Find featured items and limit to 4
        const featured = data.filter((item) => item.featured).slice(0, 4)
        setItems(featured)
      }
    }
    initData()
  }, [])

  return (
    <SectionTemplate id="portfolio">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{  margin: "-80px" }}
        transition={{ duration: 0.6, ease: "easeOut" }}
      >
        <SectionHeading
          title="أعمالنا"
          subtitle="ألقِ نظرة على بعضٍ من أعمالنا المميزة"
          className="gap-3"
          align="start"
        />
      </motion.div>
      <motion.div
        className="mt-12 grid grid-cols-1 gap-6 lg:grid-cols-2"
        initial={{ opacity: 0, y: 16 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{  margin: "-60px" }}
        transition={{ duration: 0.6, ease: "easeOut", delay: 0.15 }}
      >
        {items.length > 0 ? (
          items.map((item) => (
            <PortfolioItemCard key={item.id} item={item} />
          ))
        ) : (
          <div className="col-span-1 lg:col-span-2 flex min-h-60 items-center justify-center rounded-2xl border border-dashed border-border/60 bg-card/40 p-8 text-center text-muted-foreground">
            لا توجد أعمال لعرضها أو جاري جلب البيانات...
          </div>
        )}
      </motion.div>
    </SectionTemplate>
  )
}
