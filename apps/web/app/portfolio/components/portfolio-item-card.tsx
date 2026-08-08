import {
  DevelopmentPortfolioItem,
  GraphicDesignPortfolioItem,
  MarketingPortfolioItem,
  PhotographyPortfolioItem,
  PortfolioItem,
  VFXPortfolioItem,
} from "@/data/types"
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@workspace/ui/components/card"
import { Badge } from "@workspace/ui/components/badge"
import Image from "next/image"
import Link from "next/link"
import React from "react"
import {
  Album02Icon,
  Clock01Icon,
  SquareArrowUpRightIcon,
  StarIcon,
} from "@hugeicons/core-free-icons"
import { HugeiconsIcon } from "@hugeicons/react"
import { Button } from "@workspace/ui/components/button"

type PortfolioCardShellProps = {
  image: string
  title: string
  itemCategory: "Development" | "Photography" | "Design" | "Vfx" | "Marketing"
  featured?: boolean
  status: "In Progress" | "Completed"
  children?: React.ReactNode
  footer?: React.ReactNode
}

const StatusChip = ({ status }: { status: "In Progress" | "Completed" }) => {
  const variant = status === "In Progress" ? "outline" : "default"
  const style =
    status === "Completed" ? "dark:bg-emerald-500/15 dark:text-emerald-400 dark:border-emerald-500/30 bg-emerald-100 text-emerald-800 border-emerald-200" : ""
  return (
    <Badge variant={variant} className={style}>
      {status}
    </Badge>
  )
}

const CategoryChip = ({
  category,
}: {
  category: "Development" | "Photography" | "Design" | "Vfx" | "Marketing"
}) => {
  const portfolioCategoryStyles = {
    Development: "bg-blue-500/15 text-blue-400 border-blue-500/30",
    Photography: "bg-violet-500/15 text-violet-400 border-violet-500/30",
    Vfx: "bg-fuchsia-500/15 text-fuchsia-400 border-fuchsia-500/30",
    Design: "bg-orange-500/15 text-orange-400 border-orange-500/30",
    Marketing: "bg-emerald-500/15 text-emerald-400 border-emerald-500/30",
  } as const

  return <Badge className={portfolioCategoryStyles[category]}>{category}</Badge>
}

const FeaturedChip = () => (
  <Badge className="bg-amber-800/70 text-amber-300">
    <HugeiconsIcon icon={StarIcon} />
    Featured
  </Badge>
)

const PortfolioCardShell = ({
  image,
  title,
  itemCategory,
  featured,
  status,
  children,
  footer,
}: PortfolioCardShellProps) => (
  <Card className="group p-0 flex h-full flex-col overflow-hidden border border-border/60 bg-card/80 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-primary/40 hover:shadow-[0_20px_60px_-20px_rgba(0,0,0,0.55)]">
    <div className="relative aspect-4/3    overflow-hidden border-b border-border/50 bg-muted/20">
      <Image
        src={image}
        alt={title}
        fill
        sizes="(max-width: 768px) 100vw, 33vw"
        className="object-cover transition-transform duration-500 group-hover:scale-105"
      />
      <div className="absolute inset-0 bg-linear-to-t from-background/90 via-background/10 to-transparent" />
    </div>

    <CardHeader className="gap-3 px-5 pt-5">
      <div className="flex items-start justify-between gap-3">
        <CardTitle className="text-xl leading-tight font-semibold text-foreground">
          {title}
        </CardTitle>
        <div className="shrink-0">
          <StatusChip status={status} />
        </div>
      </div>
      <div className="flex flex-wrap gap-2">
        <CategoryChip category={itemCategory} />
        {featured && <FeaturedChip />}
      </div>
    </CardHeader>

    <CardContent className="flex flex-1 flex-col gap-3 px-5 pb-4">
      {children}
    </CardContent>

    {footer ? (
      <CardFooter className="mt-auto flex flex-wrap gap-2 border-t border-border/40 px-5 py-4">
        {footer}
      </CardFooter>
    ) : null}
  </Card>
)

const DevelopmentPortfolioItemCard = ({
  item,
}: {
  item: DevelopmentPortfolioItem
}) => (
  <PortfolioCardShell
    image={item.image}
    title={item.title}
    itemCategory={item.itemCategory}
    featured={item.featured}
    status={item.status}
    footer={
      <>
        <Link href={`/portfolio/${item.id}`} className="flex-1 sm:flex-none">
          <Button variant={"outline"} className="w-full justify-center">
            Show details
          </Button>
        </Link>
        {item.status === "Completed" && (
          <Button className="flex-1 justify-center sm:flex-none">
            Live preview <HugeiconsIcon icon={SquareArrowUpRightIcon} />
          </Button>
        )}
      </>
    }
  >
    <div className="flex flex-wrap gap-2">
      {item.technologies.map((tech) => (
        <Badge key={tech} variant={"outline"} className="rounded-full px-2.5 py-1">
          {tech}
        </Badge>
      ))}
    </div>
    <div className="rounded-xl border border-border/40 bg-muted/20 p-3">
      <CardDescription className="flex items-center gap-2 text-sm text-muted-foreground">
        <HugeiconsIcon icon={Clock01Icon} size={20}/> Time took: {item.timeTook}
      </CardDescription>
    </div>
    <CardDescription className="text-sm leading-6 text-foreground/90">
      {item.description}
    </CardDescription>
  </PortfolioCardShell>
)

const PhotographyPortfolioItemCard = ({
  item,
}: {
  item: PhotographyPortfolioItem
}) => (
  <PortfolioCardShell
    image={item.image}
    title={item.title}
    itemCategory={item.itemCategory}
    featured={item.featured}
    status={item.status}
    footer={
      <>
        <Link href={`/portfolio/${item.id}`} className="flex-1 sm:flex-none">
          <Button variant={"outline"} className="w-full justify-center">
            Show details
          </Button>
        </Link>
        {item.status === "Completed" && (
          <Button className="flex-1 justify-center sm:flex-none">
            View project gallery <HugeiconsIcon icon={Album02Icon} />
          </Button>
        )}
      </>
    }
  >
    <div className="rounded-xl border border-border/40 bg-muted/20 p-3">
      <CardDescription className="flex items-center gap-2 text-sm text-muted-foreground">
        <HugeiconsIcon icon={Clock01Icon} /> Time took: {item.timeTook}
      </CardDescription>
    </div>
    <CardDescription className="text-sm leading-6 text-foreground/90">
      {item.description}
    </CardDescription>
  </PortfolioCardShell>
)

const VfxPortfoltioItemCard = ({ item }: { item: VFXPortfolioItem }) => (
  <PortfolioCardShell
    image={item.image}
    title={item.title}
    itemCategory={item.itemCategory}
    featured={item.featured}
    status={item.status}
    footer={
      <Link href={`/portfolio/${item.id}`} className="flex-1 sm:flex-none">
        <Button variant={"outline"} className="w-full justify-center">
          Show details
        </Button>
      </Link>
    }
  >
    <div className="rounded-xl border border-border/40 bg-muted/20 p-3">
      <CardDescription className="flex items-center gap-2 text-sm text-muted-foreground">
        <HugeiconsIcon icon={Clock01Icon} /> Time took: {item.timeTook}
      </CardDescription>
    </div>
  </PortfolioCardShell>
)

const MarketingPortfolioItemCard = ({
  item,
}: {
  item: MarketingPortfolioItem
}) => (
  <PortfolioCardShell
    image={item.image}
    title={item.title}
    itemCategory={item.itemCategory}
    featured={item.featured}
    status={item.status}
    footer={
      <Link href={`/portfolio/${item.id}`} className="flex-1 sm:flex-none">
        <Button variant={"outline"} className="w-full justify-center">
          Show details
        </Button>
      </Link>
    }
  >
    <div className="rounded-xl border border-border/40 bg-muted/20 p-3">
      <CardDescription className="flex items-center gap-2 text-sm text-muted-foreground">
        <HugeiconsIcon icon={Clock01Icon} /> Time took: {item.timeTook}
      </CardDescription>
    </div>
    <div className="flex flex-wrap gap-2">
      {item.results.map((result) => (
        <Badge key={result} variant={"outline"}>
          {result}
        </Badge>
      ))}
    </div>
  </PortfolioCardShell>
)

const DesignPortfolioItemCard = ({
  item,
}: {
  item: GraphicDesignPortfolioItem
}) => (
  <PortfolioCardShell
    image={item.image}
    title={item.title}
    itemCategory={item.itemCategory}
    featured={item.featured}
    status={item.status}
    footer={
      <Link href={`/portfolio/${item.id}`} className="flex-1 sm:flex-none">
        <Button variant={"outline"} className="w-full justify-center">
          Show details
        </Button>
      </Link>
    }
  >

  </PortfolioCardShell>
)

export default function PortfolioItemCard({ item }: { item: PortfolioItem }) {
  switch (item.itemCategory) {
    case "Development":
      return (
        <DevelopmentPortfolioItemCard item={item as DevelopmentPortfolioItem} />
      )
    case "Photography":
      return (
        <PhotographyPortfolioItemCard item={item as PhotographyPortfolioItem} />
      )
    case "Vfx":
      return <VfxPortfoltioItemCard item={item as VFXPortfolioItem} />
    case "Marketing":
      return (
        <MarketingPortfolioItemCard item={item as MarketingPortfolioItem} />
      )
    case "Design":
      return (
        <DesignPortfolioItemCard item={item as GraphicDesignPortfolioItem} />
      )
    default:
      return null
  }
}
