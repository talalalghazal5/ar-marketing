import { getItem } from "@/app/actions/portfolio-actions"
import SectionTemplate from "@/components/section-template"
import ProjectHeader from "@/components/ProjectHeader"
import ProjectMetadata from "@/components/ProjectMetadata"
import ProjectCTA from "@/components/ProjectCTA"
import SectionDivider from "@/components/SectionDivider"
import Image from "next/image"
import Link from "next/link"
import { buttonVariants } from "@workspace/ui/components/button"
import { PlayIcon } from "@hugeicons/core-free-icons"
import { HugeiconsIcon } from "@hugeicons/react"
import { cn } from "@workspace/ui/lib/utils"
import type {
  DevelopmentPortfolioItem,
  PhotographyPortfolioItem,
  GraphicDesignPortfolioItem,
  VFXPortfolioItem,
  MarketingPortfolioItem,
} from "@/data/types"

async function ProjectContent({ params }: { params: { id: string } }) {
  const { id } = await params
  const item = await getItem(id)

  if (!item) {
    return (
      <SectionTemplate className="items-center justify-center">
        <h1 className="font-thmanyah-heading text-3xl">
          لم يتم العثور على العنصر
        </h1>
      </SectionTemplate>
    )
  }

  const timeTook =
    "timeTook" in item && item.timeTook !== undefined
      ? item.timeTook
      : "غير متاح"

  // Handle Development Category
  if (item.itemCategory === "Development") {
    const devItem = item as DevelopmentPortfolioItem
    return (
      <>
        <SectionTemplate className="pt-0">
          <ProjectHeader item={item} />
        </SectionTemplate>

        <SectionTemplate className="min-h-0 py-16">
          <div className="mx-auto max-w-4xl space-y-16 px-6">
            <div>
              <h2 className="mb-4 font-thmanyah-heading text-3xl text-foreground">
                لمحة عامة عن المشروع
              </h2>
              <p className="font-thmanyah-subheading-sans text-lg leading-relaxed text-muted-foreground">
                {item.description}
              </p>
            </div>

            {devItem.features && devItem.features.length > 0 && (
              <div>
                <h3 className="mb-4 font-thmanyah-heading text-2xl text-foreground">
                  Key Features
                </h3>
                <ul className="grid gap-4 md:grid-cols-2">
                  {devItem.features.map((feature, idx) => (
                    <li key={idx} className="flex items-start gap-3">
                      <div className="mt-1 flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-primary/10 text-primary"></div>
                      <span className="font-thmanyah-subheading-sans text-base text-muted-foreground">
                        {feature}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>
            )}

            {devItem.technologies && devItem.technologies.length > 0 && (
              <div>
                <h3 className="mb-4 font-thmanyah-heading text-2xl text-foreground">
                  Technology Stack
                </h3>
                <div className="flex flex-wrap gap-2">
                  {devItem.technologies.map((tech, idx) => (
                    <span
                      key={idx}
                      className="rounded-full border border-border/30 px-3 py-1 font-thmanyah-subheading-sans text-sm font-medium"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            )}
          </div>
        </SectionTemplate>

        <SectionDivider />
        <ProjectMetadata item={item} timeTook={timeTook} />

        <SectionDivider />
        <ProjectCTA item={item} />
      </>
    )
  }

  // Handle Photography Category
  if (item.itemCategory === "Photography") {
    const photoItem = item as PhotographyPortfolioItem
    return (
      <>
        <SectionTemplate className="pt-0">
          <ProjectHeader item={item} />
        </SectionTemplate>

        <SectionTemplate className="min-h-0 py-16">
          <div className="mx-auto max-w-4xl space-y-16 px-6">
            <div>
              <h2 className="mb-4 font-thmanyah-heading text-3xl text-foreground">
                Project Details
              </h2>
              <p className="font-thmanyah-subheading-sans text-lg leading-relaxed text-muted-foreground">
                {item.description}
              </p>
            </div>

            <div>
              <h3 className="mb-4 font-thmanyah-heading text-2xl text-foreground">
                Project Gallery
              </h3>
              {photoItem.gallery && photoItem.gallery.length > 0 ? (
                <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
                  {photoItem.gallery.map((imgUrl, idx) => (
                    <div
                      key={idx}
                      className="relative aspect-4/3 overflow-hidden rounded-xl border border-border/50 bg-muted/50"
                    >
                      <Image
                        src={imgUrl}
                        alt={`Gallery Image ${idx + 1}`}
                        fill
                        className="object-cover transition-transform duration-500 hover:scale-105"
                      />
                      <div className="pointer-events-none absolute inset-0 z-10 bg-linear-to-t from-black/70 via-black/20 to-transparent"></div>
                    </div>
                  ))}
                </div>
              ) : (
                <div className="py-12 text-center">
                  <p className="font-thmanyah-subheading-sans text-muted-foreground">
                    No gallery images available for this project.
                  </p>
                </div>
              )}
            </div>
          </div>
        </SectionTemplate>

        <SectionDivider />
        <ProjectMetadata item={item} timeTook={timeTook} />

        <SectionDivider />
        <ProjectCTA item={item} />
      </>
    )
  }

  // Handle Graphic Design Category
  if (item.itemCategory === "Design") {
    const designItem = item as GraphicDesignPortfolioItem
    return (
      <>
        <SectionTemplate className="pt-0">
          <ProjectHeader item={item} />
        </SectionTemplate>

        <SectionTemplate className="min-h-0 py-16">
          <div className="mx-auto max-w-4xl space-y-16 px-6">
            {designItem.brandOverview && (
              <div>
                <h2 className="mb-4 font-thmanyah-heading text-3xl text-foreground">
                  لمحة عامة عن العلامة التجارية
                </h2>
                <p className="font-thmanyah-subheading-sans text-lg leading-relaxed text-muted-foreground">
                  {designItem.brandOverview}
                </p>
              </div>
            )}

            {designItem.brandGoals && designItem.brandGoals.length > 0 && (
              <div>
                <h3 className="mb-4 font-thmanyah-heading text-2xl text-foreground">
                  أهداف العلامة التجارية
                </h3>
                <ul className="space-y-4">
                  {designItem.brandGoals.map((goal, idx) => (
                    <li key={idx} className="flex items-start gap-3">
                      <div className="mt-1 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-primary/10 text-primary"></div>
                      <span className="font-thmanyah-subheading-sans text-base text-muted-foreground">
                        {goal}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>
            )}

            {designItem.technologies && designItem.technologies.length > 0 && (
              <div>
                <h3 className="mb-4 font-thmanyah-heading text-2xl text-foreground">
                  Tools Used
                </h3>
                <div className="flex flex-wrap gap-2">
                  {designItem.technologies.map((tool, idx) => (
                    <span
                      key={idx}
                      className="rounded-full border border-border/30 px-3 py-1 font-thmanyah-subheading-sans text-sm font-medium"
                    >
                      {tool}
                    </span>
                  ))}
                </div>
              </div>
            )}
          </div>
        </SectionTemplate>
        <SectionDivider />
        <SectionTemplate className="itmes-center flex flex-col px-10">
          <h3 className="mb-4 font-thmanyah-heading text-2xl text-foreground not-md:mb-10">
            الهوية البصرية للعلامة التجارية
          </h3>
          <div className="w-full px-5 not-md:text-center">
            {designItem.gallery && designItem.gallery.length > 0 ? (
              <div>
                <div className="grid w-full! gap-4 sm:grid-cols-2 lg:grid-cols-3">
                  {designItem.gallery.map((imgUrl, idx) => (
                    <div
                      key={idx}
                      className="relative aspect-square w-full overflow-hidden rounded-xl"
                    >
                      <Image
                        src={imgUrl}
                        alt={`Project gallery image ${idx + 1}`}
                        fill
                        className="object-cover"

                        loading="lazy"
                      />
                      <div className="pointer-events-none absolute inset-0 bg-linear-to-t from-black/70 via-black/20 to-transparent"></div>
                    </div>
                  ))}
                </div>
              </div>
            ) : null}
          </div>
        </SectionTemplate>
        <SectionDivider />
        <ProjectMetadata item={item} timeTook={timeTook} />

        <SectionDivider />
        <ProjectCTA item={item} />
      </>
    )
  }

  // Handle VFX Category
  if (item.itemCategory === "Vfx") {
    const vfxItem = item as VFXPortfolioItem
    return (
      <>
        <SectionTemplate className="pt-0">
          <ProjectHeader item={item} />
        </SectionTemplate>

        <SectionTemplate className="min-h-0 py-16">
          <div className="mx-auto max-w-4xl space-y-16 px-6">
            {vfxItem.overview && (
              <div>
                <h2 className="mb-4 font-thmanyah-heading text-3xl text-foreground">
                  لمحة عامة عن المشروع
                </h2>
                <p className="font-thmanyah-subheading-sans text-lg leading-relaxed text-muted-foreground">
                  {vfxItem.overview}
                </p>
              </div>
            )}

            {vfxItem.result && (
              <div>
                <h3 className="mb-4 font-thmanyah-heading text-2xl text-foreground">
                  النتيجة النهائية
                </h3>
                {/* <Link
                  href={vfxItem.result}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={cn(
                    buttonVariants({ size: "lg", variant: "default" }),
                    "rounded-xl px-8 py-6 text-base font-semibold shadow-lg shadow-primary/20 transition-all hover:shadow-primary/30 font-thmanyah-subheading-sans"
                  )}
                >
                  <HugeiconsIcon icon={PlayIcon} className="me-2 size-5" />
                  مشاهدة النتيجة النهائية
                </Link> */}
                <iframe
                  src={vfxItem.result}
                  allowFullScreen
                  className="mt-10 h-200 w-full rounded-2xl bg-transparent"
                  data-lenis-prevent
                  loading="lazy"
                ></iframe>
              </div>
            )}
          </div>
        </SectionTemplate>

        <SectionDivider />
        <ProjectMetadata item={item} timeTook={timeTook} />

        <SectionDivider />
        <ProjectCTA item={item} />
      </>
    )
  }

  // Handle Marketing Category
  if (item.itemCategory === "Marketing") {
    const marketingItem = item as MarketingPortfolioItem
    return (
      <>
        <SectionTemplate className="pt-0">
          <ProjectHeader item={item} />
        </SectionTemplate>

        <SectionTemplate className="min-h-0 py-16">
          <div className="mx-auto max-w-4xl space-y-16 px-6">
            <div>
              <h2 className="mb-4 font-thmanyah-heading text-3xl text-foreground">
                نظرة عامة عن الحملة التسويقية
              </h2>
              <p className="font-thmanyah-subheading-sans text-lg leading-relaxed text-muted-foreground">
                {item.description}
              </p>
            </div>

            <div>
              <h3 className="mb-4 font-thmanyah-heading text-2xl text-foreground">
                نتائج الحملة التسويقية
              </h3>
              <div className="space-y-4">
                {marketingItem.results && marketingItem.results.length > 0
                  ? marketingItem.results.map((result, idx) => (
                      <div key={idx} className="flex items-start gap-3">
                        <div className="mt-1 flex h-5 w-5 shrink-0 items-center justify-center rounded-full border border-emerald-500/20 bg-emerald-500/10 text-emerald-400"></div>
                        <span className="font-thmanyah-subheading-sans text-base text-muted-foreground">
                          {result}
                        </span>
                      </div>
                    ))
                  : null}
              </div>
            </div>

            <div>
              <h3 className="mb-4 font-thmanyah-heading text-2xl text-foreground">
                Targeted Platforms
              </h3>
              <div className="flex flex-wrap gap-2">
                {marketingItem.platforms && marketingItem.platforms.length > 0
                  ? marketingItem.platforms.map((platform, idx) => (
                      <span
                        key={idx}
                        className="rounded-full border border-border/30 px-3 py-1 font-thmanyah-subheading-sans text-sm font-medium"
                      >
                        {platform}
                      </span>
                    ))
                  : null}
              </div>
            </div>
          </div>
        </SectionTemplate>

        <SectionDivider />
        <ProjectMetadata item={item} timeTook={timeTook} />

        <SectionDivider />
        <ProjectCTA item={item} />
      </>
    )
  }

  // Fallback for unknown category
  return (
    <SectionTemplate className="pt-20">
      <div className="flex flex-col items-center gap-4 text-center">
        <h1 className="font-thmanyah-heading text-4xl">{item.title}</h1>
        <p className="max-w-2xl font-thmanyah-subheading-sans text-muted-foreground">
          {item.description}
        </p>
      </div>
    </SectionTemplate>
  )
}

export default function Page({ params }: { params: { id: string } }) {
  return (
    <div className="relative min-h-screen overflow-hidden bg-background">
      {/* Background Glows */}
      <div className="fixed -top-100 -left-150 z-0 h-200 w-250 rounded-full bg-linear-to-br from-accent/20 to-primary/80 blur-[150px]" />
      <div className="fixed -right-100 -bottom-160 z-0 h-230 w-200 rounded-full bg-linear-to-br from-primary/70 to-accent/20 blur-[100px]" />

      <div className="relative z-10">
        <ProjectContent params={params} />
      </div>
    </div>
  )
}
