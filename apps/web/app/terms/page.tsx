"use client"
import { useLenis } from "@/components/providers/lenis-provider"
import SectionHeading from "@/components/section-heading"
import SectionTemplate from "@/components/section-template"
import { InformationCircleIcon } from "@hugeicons/core-free-icons"
import { HugeiconsIcon } from "@hugeicons/react"
import { Separator } from "@workspace/ui/components/separator"
import { cn } from "@workspace/ui/lib/utils"
import Link from "next/link"
import React, { useEffect, useState } from "react"

export default function Page() {
  const { scrollTo } = useLenis()
  const [active, setActive] = useState("introduction")
  const sections = [
    {
      label: "مقدمة",
      href: "introduction",
    },
    {
      label: "قبول الشروط",
      href: "accept-terms",
    },
    {
      label: "نطاق الخدمات",
      href: "services",
    },
    {
      label: "الأسعار والدفع",
      href: "pricing",
    },
    {
      label: "سياسات التعديل",
      href: "editing-policies",
    },
    {
      label: "المواعيد والتسليم",
      href: "deadlines",
    },
    {
      label: "مسؤوليات العميل",
      href: "client-responsibilites",
    },
    {
      label: "حقوق الملكية الفكرية",
      href: "intellectual-property-rights",
    },
    {
      label: "سياسة الإلغاء والاسترجاع",
      href: "cancellation-and-redemption",
    },
    {
      label: "الإعلانات الممولة",
      href: "paid-promotions",
    },
    {
      label: "السرية وحماية البيانات",
      href: "privacy-and-data-protection",
    },
    {
      label: "إخلاء المسؤولية",
      href: "disclaimer",
    },
    {
      label: "سياسة الدفع",
      href: "payment",
    },
  ]
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        const visibleSection = entries.find((entry) => entry.isIntersecting)
        if (visibleSection) {
          setActive(visibleSection.target.id)
        }
      },
      {
        rootMargin: "-40% 0px -70% 0px",
      }
    )
    sections.forEach((section) => {
      const element = document.getElementById(section.href)
      if (element) {
        observer.observe(element)
      }
      return () => observer.disconnect()
    })
  })

  return (
    <div className="relative z-0 w-full scrollbar-none overflow-x-clip bg-background px-10 pb-70">
      {/* Glow effects */}
      <div className="fixed -top-100 -left-150 z-0 h-200 w-250 rounded-full bg-linear-to-br from-accent/20 to-primary/80 blur-[150px]" />
      <div className="fixed -right-100 -bottom-160 z-0 h-230 w-200 rounded-full bg-linear-to-br from-primary/70 to-accent/20 blur-[100px]" />

      <div className="grid w-full pt-35 md:grid-cols-[250px_minmax(0,1fr)]">
        <div className="not-md:hidden">
          <aside data-lenis-prevent className="sticky top-30 flex h-120 scrollbar-none overflow-scroll w-fit flex-col gap-5 rounded-2xl border border-primary/80 bg-accent/50 p-10 font-thmanyah-subheading-sans">
            <h3 className="text-lg">في هذه الصفحة</h3>
            <div className="flex flex-col gap-5">
              {sections.map((section, idx) => (
                <Link
                  key={idx}
                  href={`#${section.href}`}
                  className={cn(
                    "text-sm",
                    active === section.href
                      ? "text-foreground"
                      : "text-muted-foreground"
                  )}
                  onClick={() => {
                    scrollTo(`#${section.href}`)
                  }}
                >
                  {section.label}
                </Link>
              ))}
            </div>
          </aside>
        </div>
        <SectionTemplate className="justify-start gap-20">
          <SectionHeading title="الشروط والأحكام" className="w-full text-start!" />

          <section className="flex flex-col gap-4" id="introduction">
            <h2 className="mb-11 font-thmanyah-heading text-4xl">مقدمة</h2>
            <p className="font-thmanyah-subheading-sans">
              مرحباً بكم في شركة AR COMPREHENSIVE MARKETING لخدمات التسويق
              المتكامل، يرجى قراءة هذه الشروط والأحكام بعناية قبل طلب أو استخدام
              أي من خدماتنا.
            </p>
            <div className="mt-8 flex w-fit items-center gap-4 rounded-lg border border-blue-600 bg-blue-500/20 px-8 py-5 text-blue-300">
              <HugeiconsIcon icon={InformationCircleIcon} />
              <p className="font-thmanyah-subheading-sans text-sm">
                باستخدامك خدمات الشركة فإنك توافق على هذه البنود بالكامل.
              </p>
            </div>
            <p className="mt-5 font-thmanyah-subheading-sans">
              من خلال طلب أي خدمة من الشركة، يقر العميل بأنه قد قرأ الشروط
              والأحكام وفهمها ووافق عليها.
            </p>
            <p className="mt-5 font-thmanyah-subheading-sans">
              وتحتفظ الشركة بالحق في تحديث أو تعديل هذه الشروط في أي وقت مع
              إشعار العميل.
            </p>
            <p className="mt-5 font-thmanyah-subheading-sans">
              تشمل خدمات الشركة، على سبيل المثال لا الحصر:
            </p>
            <ul className="mx-5 space-y-3 font-thmanyah-subheading-sans">
              <li className="list-disc">تصميم السوشل ميديا.</li>
              <li className="list-disc">الهوية البصرية.</li>
              <li className="list-disc">تصميم المطبوعات.</li>
              <li className="list-disc">المونتاج والفيديو.</li>
            </ul>
          </section>
          <Separator />
          <section className="flex flex-col gap-15" id="accept-terms">
            <h2 className="font-thmanyah-heading text-4xl">قبول الشروط</h2>
            <p className="font-thmanyah-subheading-sans">
              من خلال طلب أي خدمة من الشركة، يقر العميل بأنه قد قرأ الشروط
              والأحكام وفهمها ووافق عليها.
            </p>
          </section>
          <Separator />
          <section className="flex flex-col gap-15" id="services">
            <h2 className="font-thmanyah-heading text-4xl">نطاق الخدمات</h2>
            <div className="flex flex-col gap-8">
              <p className="font-thmanyah-subheading-sans">
                تشمل خدمات الشركة:
              </p>
              <ul className="mx-5 space-y-3 font-thmanyah-subheading-sans">
                <li className="list-disc">إدارة حسابات التواصل الاجتماعي.</li>
                <li className="list-disc">إعداد الخطط التسويقية.</li>
                <li className="list-disc">حملات الإعلانات الممولة.</li>
                <li className="list-disc">تحليل الجمهور والسوق.</li>
                <li className="list-disc">كتابة المحتوى.</li>
                <li className="list-disc">الاستشارات التسويقية.</li>
                <li className="list-disc">
                  برمجة وتطوير المواقع والتطبيقات والمتاجر الإلكترونية.
                </li>
              </ul>
            </div>
            <p className="mt-6 font-thmanyah-subheading-sans">
              من خلال طلب أي خدمة من الشركة، يقر العميل بأنه قد قرأ الشروط
              والأحكام وفهمها ووافق عليها.
            </p>
            <p className="font-thmanyah-subheading-sans">
              يتم تحديد الأسعار حسب الباقة أو الاتفاق المسبق مع العميل.
            </p>
          </section>
          <Separator />
          <section className="flex flex-col gap-15" id="pricing">
            <h2 className="font-thmanyah-heading text-4xl">الأسعار والدفع</h2>
            <p className="font-thmanyah-subheading-sans">
              يتم دفع 60% مسبقاً من ثمن الخدمة المطلوبة، ويسدد ثمن المتبقي من
              الخدمة عند التسليم.
            </p>

            <div className="flex flex-col gap-8">
              <p className="font-thmanyah-subheading-sans">
                طرق الدفع المقبولة:
              </p>
              <ul className="mx-5 space-y-3 font-thmanyah-subheading-sans">
                <li className="list-disc">PayPal</li>
                <li className="list-disc">Payoneer</li>
                <li className="list-disc">Skrill</li>
                <li className="list-disc">Cryptocurrency</li>
                <li className="list-disc">تحويلات بنكية</li>
                <li className="list-disc">Redotpay</li>
                <li className="list-disc">Airtm</li>
                <li className="list-disc">Myfin</li>
                <li className="list-disc">KAST</li>
                <li className="list-disc">Wise</li>
                <li className="list-disc">Ria Money</li>
                <li className="list-disc">Volet</li>
                <li className="list-disc">
                  أو عن طريق وسائل الدفع المحلية المتاحة للعميل.
                </li>
              </ul>
            </div>
            <p className="font-thmanyah-subheading-sans">
              الدفعات الشهرية، في حال الاشتراك، تدفع مسبقاً قبل بدء العمل.
            </p>
            <p className="font-thmanyah-subheading-sans">
              وأي خدمات إضافية تحتسب برسوم مستقلة.
            </p>
            <p className="font-thmanyah-subheading-sans">
              في حالة التأخير بالدفع أكثر من 48 ساعة يحق للشركة إيقاف العمل
              مؤقتاً.
            </p>
          </section>
          <Separator />
          <section className="flex flex-col gap-10" id="editing-policies">
            <h2 className="font-thmanyah-heading text-4xl">سياسات التعديلات</h2>
            <p className="font-thmanyah-subheading-sans">
              يحق للعميل الحصول على عدد التعديلات المتفق عليه فقط وذلك وفق العقد
              العام.
            </p>
            <p className="font-thmanyah-subheading-sans">
              أي تعديل إضافي يحتسب برسوم إضافية وتختلف حسب نوع الخدمة، ويتم دفع
              الرسوم الإضافية قبل بدء العمل على تلك التعديلات.
            </p>
            <p className="font-thmanyah-subheading-sans">
              لا تشمل التعديلات تغييرات جوهرية وإلا تعد إعادة تصميم كاملة.
            </p>
          </section>
          <Separator />
          <section className="flex flex-col gap-10 w-full" id="deadlines">
            <h2 className="font-thmanyah-heading text-4xl">
              المواعيد والتسليم
            </h2>
            <p className="font-thmanyah-subheading-sans">
              يبدأ العمل من تاريخ استلام كامل البيانات المطلوبة من العميل.
            </p>
            <p className="font-thmanyah-subheading-sans">
              يتم تسليم الأعمال عبر:
            </p>
            <ul className="mx-5 space-y-3 font-thmanyah-subheading-sans">
              <li className="list-disc">البريد الإلكتروني</li>
              <li className="list-disc">Google Drive</li>
            </ul>
            <p className="font-thmanyah-subheading-sans">
              مدة التسليم تختلف حسب نوع الخدمة.
            </p>
            <p className="font-thmanyah-subheading-sans">
              قد تتأخر المدة في حال تأخير العميل في إرسال المعلومات أو
              الموافقات.
            </p>
          </section>
          <Separator />
          <section className="flex flex-col gap-10 w-full" id="client-responsibilites">
            <h2 className="font-thmanyah-heading text-4xl">مسؤوليات العميل</h2>
            <p className="font-thmanyah-subheading-sans">يلتزم العميل بـ:</p>
            <ul className="mx-5 space-y-3 font-thmanyah-subheading-sans">
              <li className="list-disc">
                تقديم جميع المعلومات الصحيحة والمطلوبة لتنفيذ العمل.
              </li>
              <li className="list-disc">
                إرسال اللوغو، الصور، النصوص، والمواد اللازمة، في حال وجودها.
              </li>
              <li className="list-disc">الرد على رسائل الشركة خلال 48 ساعة.</li>
              <li className="list-disc">
                عدم طلب نتائج غير ممكنة أو تخالف سياسات المنصات الإعلانية.
              </li>
            </ul>
          </section>
          <Separator />
          <section
            className="flex flex-col gap-10"
            id="intellectual-property-rights"
          >
            <h2 className="font-thmanyah-heading text-4xl">
              حقوق الملكية الفكرية
            </h2>
            <p className="font-thmanyah-subheading-sans">
              بعد الدفع الكامل، يحصل العميل على حق استخدام المواد المسلمة
              لأغراضه التجارية.
            </p>
            <p className="font-thmanyah-subheading-sans">
              تحتفظ الشركة بحق نشر العمل في معرض أعمالها (Portfolio) إلا إذا طلب
              العميل خطياً عدم نشره.
            </p>
            <p className="font-thmanyah-subheading-sans">
              لا يحق للعميل بيع أو إعادة توزيع المواد كمحتوى جاهز بدون إذن
              الشركة.
            </p>
          </section>
          <Separator />
          <section
            className="flex flex-col gap-10 w-full"
            id="cancellation-and-redemption"
          >
            <h2 className="font-thmanyah-heading text-4xl">
              سياسة الإلغاء والاسترجاع
            </h2>
            <p className="font-thmanyah-subheading-sans">
              لا يوجد استرجاع بعد البدء بالخدمة.
            </p>
            <p className="font-thmanyah-subheading-sans">
              إذا لم يبدأ العمل بعد يمكن استرجاع 70% من المبلغ المدفوع.
            </p>
            <p className="font-thmanyah-subheading-sans">
              إلغاء الاشتراك الشهري يجب أن يتم قبل 7 أيام من التجديد.
            </p>
            <p className="font-thmanyah-subheading-sans">
              لا تسترد المدفوعات الخاصة بالإعلانات الممولة.
            </p>
          </section>
          <Separator />
          <section className="flex flex-col gap-10 w-full" id="paid-promotions">
            <h2 className="font-thmanyah-heading text-4xl">
              الإعلانات الممولة
            </h2>
            <p className="font-thmanyah-subheading-sans">
              لا تضمن الشركة أي نتائج محددة، مثل:
            </p>
            <ul className="mx-5 space-y-3 font-thmanyah-subheading-sans">
              <li className="list-disc">المبيعات.</li>
              <li className="list-disc">الزيارات.</li>
              <li className="list-disc">التفاعل.</li>
            </ul>
            <p className="font-thmanyah-subheading-sans">
              النتائج تعتمد على المنتج نفسه، الجمهور، السوق، المنافسة، وسياسات
              المنصة.
            </p>
            <p className="font-thmanyah-subheading-sans">
              قد يتم رفض الإعلانات من قبل المنصة لأسباب لا تتحكم بها الشركة.
            </p>
            <p className="font-thmanyah-subheading-sans">
              في حال إغلاق الحساب الإعلاني، الشركة غير مسؤولة لأنها جهة إدارة
              فقط.
            </p>
          </section>
          <Separator />
          <section
            className="flex flex-col gap-10 w-full"
            id="privacy-and-data-protection"
          >
            <h2 className="font-thmanyah-heading text-4xl">
              السرية وحماية البيانات
            </h2>
            <p className="font-thmanyah-subheading-sans">
              تلتزم الشركة بالحفاظ على سرية:
            </p>
            <ul className="mx-5 space-y-3 font-thmanyah-subheading-sans">
              <li className="list-disc">بيانات العميل.</li>
              <li className="list-disc">حساباته.</li>
              <li className="list-disc">معلومات مشروعه.</li>
              <li className="list-disc">ملفات العمل.</li>
            </ul>
            <p className="font-thmanyah-subheading-sans">
              ولا يتم مشاركتها مع أي جهة خارجية.
            </p>
          </section>
          <Separator />
          <section className="flex flex-col gap-10 w-full" id="disclaimer">
            <h2 className="font-thmanyah-heading text-4xl">إخلاء المسؤولية</h2>
            <p className="font-thmanyah-subheading-sans">
              الشركة غير مسؤولة عن:
            </p>
            <ul className="mx-5 space-y-3 font-thmanyah-subheading-sans">
              <li className="list-disc">
                ضعف نتائج الحملات الإعلانية بسبب المنتج أو الأسعار أو المنافسة.
              </li>
              <li className="list-disc">
                توقف المنصات (Google / Meta / TikTok / LinkedIn).
              </li>
              <li className="list-disc">اختراق حسابات العميل.</li>
              <li className="list-disc">
                قرارات المنصات بحظر أو إغلاق الحساب الإعلاني.
              </li>
              <li className="list-disc">
                أي ظرف قاهر خارج إرادة الشركة، مثل انقطاع الإنترنت أو توقف منصة
                أو قوانين دولة.
              </li>
            </ul>
          </section>
          <Separator />
          <section className="flex flex-col gap-20" id="payment">
            <h2 className="font-thmanyah-heading text-4xl">سياسة الدفع</h2>
            <div className="flex flex-col gap-15">
              <div className="flex flex-col gap-7">
                <h3 className="font-thmanyah-serif text-2xl">
                  الدفعات المالية
                </h3>
                <p className="font-thmanyah-subheading-sans">
                  يلتزم العميل بدفع 60% من قيمة المشروع عند توقيع العقد، وتُعد
                  هذه الدفعة غير قابلة للاسترداد في حال بدء العمل على المشروع،
                  كونها تغطي تكاليف التشغيل والوقت المخصص لتنفيذ المشروع.
                </p>
                <p className="font-thmanyah-subheading-sans">
                  يتم دفع النسبة المتبقية 40% عند الانتهاء من العمل ويتم تسليم
                  النسخة النهائية، والملفات المفتوحة أو النسخ عالية الجودة بعد
                  استلام المبلغ النهائي.
                </p>
                <p className="font-thmanyah-subheading-sans">
                  لا تعتبر عملية التسليم مكتملة إلا بعد دفع المستحقات كاملة.
                </p>
              </div>
              <div className="flex flex-col gap-7">
                <h3 className="font-thmanyah-serif text-2xl">
                  طرق الدفع المقبولة
                </h3>
                <p className="font-thmanyah-subheading-sans">
                  تقبل الشركة جميع طرق الدفع المذكورة بالبند رقم (4)، بالإضافة
                  إلى التحويلات المحلية المتاحة في جميع الدول العربية.
                </p>
                <p className="font-thmanyah-subheading-sans">
                  يلتزم العميل بتحمل أي رسوم تحويل أو عمولة مرتبطة بعملية الدفع.
                </p>
              </div>
            </div>
          </section>
        </SectionTemplate>
      </div>
    </div>
  )
}
