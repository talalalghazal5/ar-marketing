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
  MarketingPortfolioItem
} from "@/data/types"

async function ProjectContent({ params }: { params: { id: string } }) {
  const { id } = await params
  const item = await getItem(id)

  if (!item) {
    return (
      <SectionTemplate className="items-center justify-center">
        <h1 className="text-3xl">No items found</h1>
      </SectionTemplate>
    )
  }

  const timeTook =
    "timeTook" in item && item.timeTook !== undefined
      ? item.timeTook
      : "Unknown"

  // Handle Development Category
  if (item.itemCategory === "Development") {
    const devItem = item as DevelopmentPortfolioItem
    return (
      <>
        <SectionTemplate className="pt-0">
          <ProjectHeader item={item} />
        </SectionTemplate>

        <SectionTemplate className="min-h-0 py-16">
          <div className="max-w-4xl mx-auto px-6 space-y-16">
            <div>
              <h2 className="mb-4 text-3xl font-bold tracking-tight text-foreground">
                Project Overview
              </h2>
              <p className="text-lg leading-relaxed text-muted-foreground">
                {item.description}
              </p>
            </div>

            {devItem.features && devItem.features.length > 0 && (
              <div>
                <h3 className="mb-4 text-2xl font-semibold text-foreground">
                  Key Features
                </h3>
                <ul className="grid gap-4 md:grid-cols-2">
                  {devItem.features.map((feature, idx) => (
                    <li key={idx} className="flex items-start gap-3">
                      <div className="mt-1 flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-primary/10 text-primary"></div>
                      <span className="text-base text-muted-foreground">{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>
            )}

            {devItem.technologies && devItem.technologies.length > 0 && (
              <div>
                <h3 className="mb-4 text-2xl font-semibold text-foreground">
                  Technology Stack
                </h3>
                <div className="flex flex-wrap gap-2">
                  {devItem.technologies.map((tech, idx) => (
                    <span key={idx} className="rounded-full border border-border/30 px-3 py-1 text-sm font-medium">
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
          <div className="max-w-4xl mx-auto px-6 space-y-16">
            <div>
              <h2 className="mb-4 text-3xl font-bold tracking-tight text-foreground">
                Project Details
              </h2>
              <p className="text-lg leading-relaxed text-muted-foreground">
                {item.description}
              </p>
            </div>

            <div>
              <h3 className="mb-4 text-2xl font-semibold text-foreground">
                Project Gallery
              </h3>
              {photoItem.gallery && photoItem.gallery.length > 0 ? (
                <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
                  {photoItem.gallery.map((imgUrl, idx) => (
                    <div key={idx} className="relative aspect-4/3 overflow-hidden rounded-xl border border-border/50 bg-muted/50">
                      <Image
                        src={imgUrl}
                        alt={`Gallery Image ${idx + 1}`}
                        fill
                        className="object-cover transition-transform duration-500 hover:scale-105"
                      />
                    </div>
                  ))}
                </div>
              ) : (
                <div className="text-center py-12">
                  <p className="text-muted-foreground">
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
          <div className="max-w-4xl mx-auto px-6 space-y-16">
            {designItem.brandOverview && (
              <div>
                <h2 className="mb-4 text-3xl font-bold tracking-tight text-foreground">
                  Brand Overview
                </h2>
                <p className="text-lg leading-relaxed text-muted-foreground">
                  {designItem.brandOverview}
                </p>
              </div>
            )}

            {designItem.brandGoals && designItem.brandGoals.length > 0 && (
              <div>
                <h3 className="mb-4 text-2xl font-semibold text-foreground">
                  Brand Goals
                </h3>
                <ul className="space-y-4">
                  {designItem.brandGoals.map((goal, idx) => (
                    <li key={idx} className="flex items-start gap-3">
                      <div className="mt-1 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-primary/10 text-primary"></div>
                      <span className="text-base text-muted-foreground">{goal}</span>
                    </li>
                  ))}
                </ul>
              </div>
            )}

            {designItem.technologies && designItem.technologies.length > 0 && (
              <div>
                <h3 className="mb-4 text-2xl font-semibold text-foreground">
                  Tools Used
                </h3>
                <div className="flex flex-wrap gap-2">
                  {designItem.technologies.map((tool, idx) => (
                    <span key={idx} className="rounded-full border border-border/30 px-3 py-1 text-sm font-medium">
                      {tool}
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

  // Handle VFX Category
  if (item.itemCategory === "Vfx") {
    const vfxItem = item as VFXPortfolioItem
    return (
      <>
        <SectionTemplate className="pt-0">
          <ProjectHeader item={item} />
        </SectionTemplate>

        <SectionTemplate className="min-h-0 py-16">
          <div className="max-w-4xl mx-auto px-6 space-y-16">
            {vfxItem.overview && (
              <div>
                <h2 className="mb-4 text-3xl font-bold tracking-tight text-foreground">
                  Project Overview
                </h2>
                <p className="text-lg leading-relaxed text-muted-foreground">
                  {vfxItem.overview}
                </p>
              </div>
            )}

            {vfxItem.result && (
              <div>
                <h3 className="mb-4 text-2xl font-semibold text-foreground">
                  Final Outcome
                </h3>
                <Link
                  href={vfxItem.result}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={cn(
                    buttonVariants({ size: "lg", variant: "default" }),
                    "px-8 py-6 text-base font-semibold rounded-xl shadow-lg shadow-primary/20 hover:shadow-primary/30 transition-all"
                  )}
                >
                  <HugeiconsIcon icon={PlayIcon} className="size-5 me-2" />
                  مشاهدة النتيجة النهائية
                </Link>
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
          <div className="max-w-4xl mx-auto px-6 space-y-16">
            <div>
              <h2 className="mb-4 text-3xl font-bold tracking-tight text-foreground">
                Campaign Overview
              </h2>
              <p className="text-lg leading-relaxed text-muted-foreground">
                {item.description}
              </p>
            </div>

            <div>
              <h3 className="mb-4 text-2xl font-semibold text-foreground">
                Campaign Results
              </h3>
              <div className="space-y-4">
                {marketingItem.results && marketingItem.results.length > 0 ? (
                  marketingItem.results.map((result, idx) => (
                    <div key={idx} className="flex items-start gap-3">
                      <div className="mt-1 flex h-5 w-5 shrink-0 items-center justify-center rounded-full border border-emerald-500/20 bg-emerald-500/10 text-emerald-400"></div>
                      <span className="text-base text-muted-foreground">{result}</span>
                    </div>
                  ))
                ) : null}
              </div>
            </div>

            <div>
              <h3 className="mb-4 text-2xl font-semibold text-foreground">
                Targeted Platforms
              </h3>
              <div className="flex flex-wrap gap-2">
                {marketingItem.platforms && marketingItem.platforms.length > 0 ? (
                  marketingItem.platforms.map((platform, idx) => (
                    <span key={idx} className="rounded-full border border-border/30 px-3 py-1 text-sm font-medium">
                      {platform}
                    </span>
                  ))
                ) : null}
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
        <h1 className="text-4xl font-bold">{item.title}</h1>
        <p className="max-w-2xl text-muted-foreground">{item.description}</p>
      </div>
    </SectionTemplate>
  )
}

export default async function Page({ params }: { params: { id: string } }) {
  return (
    <div className="relative min-h-screen bg-background overflow-hidden">
      {/* Background Glows */}
      <div className="fixed -top-100 -left-150 z-0 h-200 w-250 rounded-full bg-linear-to-br from-accent/20 to-primary/80 blur-[150px]" />
      <div className="fixed -right-100 -bottom-160 z-0 h-230 w-200 rounded-full bg-linear-to-br from-primary/70 to-accent/20 blur-[100px]" />
      
      <div className="relative z-10">
        <ProjectContent params={params} />
      </div>
    </div>
  )
}