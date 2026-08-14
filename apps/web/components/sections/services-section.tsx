"use client"
import {
  MarketingIcon,
  CodeXmlIcon,
  InstagramIcon,
  Camera01Icon,
  Video02Icon,
  TradeMarkIcon,
} from "@hugeicons/core-free-icons"
import ServiceShowcaseCard from "@/components/service-showcase-card"
import SectionTemplate from "@/components/section-template"
import SectionHeading from "../section-heading"
import { motion } from "motion/react"

const servicesInfo = [
  {
    icon: CodeXmlIcon,
    title: "البرمجة والتطوير",
    description:
      "تصميم وتطوير المواقع الإلكترونية، المتاجر الرقمية، لوحات التحكم، والأنظمة المخصصة باستخدام أحدث التقنيات وبأفضل معايير الأداء.",
  },
  {
    icon: MarketingIcon,
    title: "التسويق الرقمي",
    description:
      "إعداد الاستراتيجيات التسويقية، إدارة الحملات الإعلانية، تحسين الظهور في محركات البحث (SEO)، وتحليل الأداء لتحقيق نمو مستدام.",
  },
  {
    icon: TradeMarkIcon,
    title: "الهوية والعلامة التجارية",
    description:
      "بناء هوية بصرية متكاملة تشمل تصميم الشعارات، الألوان، الخطوط، ودليل الهوية بما يعكس شخصية علامتك التجارية.",
  },
  {
    icon: InstagramIcon,
    title: "إدارة وسائل التواصل الاجتماعي",
    description:
      "إدارة الحسابات، إعداد خطط المحتوى، تصميم المنشورات، كتابة النصوص التسويقية، والتفاعل مع الجمهور لتعزيز حضور العلامة التجارية.",
  },
  {
    icon: Camera01Icon,
    title: "تصوير المنتجات والإعلانات",
    description:
      "إنتاج صور احترافية للمنتجات، جلسات تصوير تجارية، وتصوير الحملات الإعلانية لإبراز منتجاتك بأفضل صورة.",
  },
  {
    icon: Video02Icon,
    title: "المونتاج والإنتاج المرئي",
    description:
      "مونتاج الفيديوهات، صناعة الإعلانات، الموشن جرافيك، وإخراج المحتوى المرئي بجودة احترافية تناسب مختلف المنصات.",
  },
]

export default function ServicesSection() {
  return (
    <SectionTemplate id="services" className="">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{  margin: "-80px" }}
        transition={{ duration: 0.6, ease: "easeOut" }}
      >
        <SectionHeading
          title="حلول متكاملة لنمو أعمالك"
          subtitle="نقدم إليك أفضل الحلول التسويقية لكي تتميز في مشروعك"
          align="start"
          className="mt-45 not-md:text-center"
        />
      </motion.div>
      <div className="grid w-full grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-3">
        {servicesInfo.map((service, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{  margin: "-60px" }}
            transition={{ duration: 0.5, ease: "easeOut", delay: index * 0.1 }}
          >
            <ServiceShowcaseCard
              icon={service.icon}
              title={service.title}
              description={service.description}
            />
          </motion.div>
        ))}
      </div>
    </SectionTemplate>
  )
}
