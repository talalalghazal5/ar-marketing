"use client"
import {
  Accordion,
  AccordionContent,
  AccordionTrigger,
  AccordionItem,
} from "@workspace/ui/components/accordion"
import SectionTemplate from "@/components/section-template"
import SectionHeading from "@/components/section-heading"
import { motion } from "motion/react"

const faqs = [
  {
    question: "ما هي الخدمات التي تقدمها AR Marketing؟",
    answer:
      "نقدم حلولًا تسويقية متكاملة تشمل إدارة وسائل التواصل الاجتماعي، تصميم الهوية البصرية، تصميم وتطوير المواقع الإلكترونية، المتاجر الإلكترونية، الحملات الإعلانية، إنتاج المحتوى، وتحسين محركات البحث (SEO).",
  },
  {
    question: "كيف يمكنني طلب خدمة؟",
    answer:
      "يمكنك التواصل معنا من خلال نموذج التواصل على الموقع أو عبر وسائل التواصل الاجتماعي، وسيقوم فريقنا بالتواصل معك لفهم احتياجاتك وتقديم عرض مناسب.",
  },
  {
    question: "هل تقدمون استشارة مجانية قبل بدء المشروع؟",
    answer:
      "نعم، نقدم جلسة استشارية أولية لمناقشة أهداف مشروعك واقتراح أفضل الحلول التسويقية التي تناسب نشاطك.",
  },
  {
    question: "كم تستغرق مدة تنفيذ المشروع؟",
    answer:
      "تختلف مدة التنفيذ حسب نوع المشروع وحجمه، وبعد دراسة المتطلبات سنزودك بجدول زمني واضح يتضمن جميع مراحل التنفيذ.",
  },
  {
    question: "هل يمكنكم إدارة حسابات التواصل الاجتماعي بشكل كامل؟",
    answer:
      "نعم، نوفر خدمة إدارة الحسابات بشكل احترافي، وتشمل إعداد خطة المحتوى، تصميم المنشورات، كتابة النصوص، النشر، متابعة التفاعل، وإعداد التقارير الدورية.",
  },
  {
    question: "هل تقدمون خدمات تصميم الهوية البصرية؟",
    answer:
      "بالتأكيد، نقوم بتصميم هوية بصرية متكاملة تشمل الشعار، الألوان، الخطوط، الأدلة الإرشادية، وجميع العناصر التي تعكس هوية علامتك التجارية.",
  },
  {
    question: "هل يمكنكم إنشاء متجر إلكتروني متكامل؟",
    answer:
      "نعم، نقوم بتطوير متاجر إلكترونية حديثة وسريعة الاستجابة، مع دعم إدارة المنتجات، الطلبات، وسائل الدفع، وتجربة مستخدم مميزة.",
  },
  {
    question: "هل الموقع سيكون متوافقًا مع الهواتف المحمولة؟",
    answer:
      "جميع المواقع التي نقوم بتطويرها تكون متوافقة بالكامل مع الهواتف الذكية والأجهزة اللوحية وأجهزة الكمبيوتر لضمان أفضل تجربة للمستخدم.",
  },
  {
    question: "هل تقدمون خدمات تحسين محركات البحث (SEO)؟",
    answer:
      "نعم، نطبق أفضل ممارسات تحسين محركات البحث لزيادة ظهور موقعك في نتائج البحث وتحسين الوصول إلى العملاء المحتملين.",
  },
  {
    question: "هل يمكنكم إدارة الحملات الإعلانية المدفوعة؟",
    answer:
      "نعم، نقوم بإدارة الحملات الإعلانية على منصات مثل Google وMeta مع متابعة الأداء وتحسين النتائج لتحقيق أفضل عائد على الاستثمار.",
  },
  {
    question: "هل أستطيع طلب خدمة واحدة فقط؟",
    answer:
      "بالطبع، يمكنك الاستفادة من أي خدمة بشكل مستقل، كما يمكننا أيضًا اقتراح الخدمات التي تساعدك على تحقيق أهدافك بشكل أفضل.",
  },
  {
    question: "هل يمكن إجراء تعديلات أثناء تنفيذ المشروع؟",
    answer:
      "نعم، يمكن إجراء التعديلات ضمن نطاق العمل المتفق عليه، وسيتم مناقشة أي طلبات إضافية لضمان تحقيق أفضل نتيجة.",
  },
  {
    question: "هل توفرون الدعم الفني بعد تسليم المشروع؟",
    answer:
      "نعم، نقدم فترة دعم فني بعد التسليم لمعالجة أي ملاحظات أو مشكلات، كما نوفر خطط صيانة ودعم مستمرة عند الحاجة.",
  },
  {
    question: "ما هي طرق الدفع المتاحة؟",
    answer:
      "نوفر عدة وسائل دفع آمنة، ويتم الاتفاق على آلية الدفع وجدول الدفعات قبل بدء تنفيذ المشروع.",
  },
  {
    question: "كيف أتابع تقدم المشروع؟",
    answer:
      "نشارك مع عملائنا مراحل العمل بشكل دوري من خلال تقارير واجتماعات متابعة لضمان الشفافية وإبقاء العميل على اطلاع دائم بتقدم المشروع.",
  },
]

export default function FaqSection() {
  return (
    <SectionTemplate
      id="faq"
      className="w-full items-center not-md:pt-20 not-lg:items-center lg:mt-20"
    >
      <div className="flex w-full flex-col justify-evenly gap-20 md:flex-row md:items-center md:justify-evenly md:gap-30">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{  margin: "-80px" }}
          transition={{ duration: 0.6, ease: "easeOut" }}
        >
          <SectionHeading title="الأسئلة المتكررة" className="text-nowrap not-md:text-center" />
        </motion.div>
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{  margin: "-60px" }}
          transition={{ duration: 0.6, ease: "easeOut", delay: 0.15 }}
          className="self-center lg:max-w-4xl w-full"
        >
        <Accordion className="border-none w-full">
          {faqs.slice(0, 6).map((faq, index) => (
            <AccordionItem
              className="border-muted-foreground font-thmanyah-subheading-sans"
              key={index}
            >
              <AccordionTrigger>{faq.question}</AccordionTrigger>
              <AccordionContent className="text-muted-foreground">
                {faq.answer}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
        </motion.div>
      </div>
    </SectionTemplate>
  )
}
