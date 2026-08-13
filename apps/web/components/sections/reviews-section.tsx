"use client"
import ReviewCard from "@/components/review-card"
import SectionTemplate from "@/components/section-template"
import SectionHeading from "@/components/section-heading"
import { motion } from "motion/react"

const reviews = [
  {
    name: "أحمد خالد",
    username: "@ahmedk",
    quote:
      "فريق مثالي مليء بالخبرة وعملية التعاون من بداية الطريق إلى التسليم بشكل سليم، وتقديم النتائج الجودة العالية وتحسين المنتج والخدمة لتحقيق أهدافنا.",
    layout: "featured",
  },
  {
    name: "سارة علي",
    username: "@saraali",
    quote: "أعجبني الاهتمام بالتفاصيل وجودة التصاميم.",
    layout: "medium",
  },
  {
    name: "محمد ياسين",
    username: "@mohammad",
    quote: "التزموا بالموعد النهائي وكانت النتيجة أفضل من المتوقع.",
    layout: "medium",
  },
  {
    name: "نور الحسن",
    username: "@nourh",
    quote: "تجربة ممتازة والتواصل مع الفريق كان سريعًا وواضحًا.",
    layout: "wide",
  },
  {
    name: "عمر الشامي",
    username: "@omarsh",
    quote: "ساعدونا في تطوير هوية احترافية تعكس علامتنا التجارية.",
    layout: "small",
  },
]

export default function ReviewsSection() {
  return (
    <SectionTemplate id="reviews" className="">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{  margin: "-80px" }}
        transition={{ duration: 0.6, ease: "easeOut" }}
      >
        <SectionHeading
          title="الآراء والتقييمات"
          subtitle="شاهد ماذا يقول الناس عنا"
          className="gap-3 text-start space-y-5"
        />
      </motion.div>
      <motion.div
        className="grid items-center gap-3 self-center sm:grid-cols-1 md:grid-cols-2 lg:max-w-[80%] lg:grid-cols-12"
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{  margin: "-60px" }}
        transition={{ duration: 0.7, ease: "easeOut", delay: 0.15 }}
      >
        {reviews.map((review, index) => (
          <ReviewCard
            key={index}
            avatar={`https://avatar.vercel.sh/${review.name}`}
            layout={
              review.layout as "featured" | "small" | "medium" | "wide" | "tall"
            }
            name={review.name}
            username={review.username}
            quote={review.quote}
          />
        ))}
      </motion.div>
    </SectionTemplate>
  )
}
