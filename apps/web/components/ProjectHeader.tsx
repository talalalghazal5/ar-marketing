import { Badge } from "@workspace/ui/components/badge";
import { cn } from "@workspace/ui/lib/utils";
import { HugeiconsIcon } from "@hugeicons/react";
import { PlayIcon, Star } from "@hugeicons/core-free-icons";
import Link from "next/link";
import Image from "next/image";
import { buttonVariants } from "@workspace/ui/components/button";
import type {
  DevelopmentPortfolioItem,
  PhotographyPortfolioItem,
  GraphicDesignPortfolioItem,
  VFXPortfolioItem,
  MarketingPortfolioItem
} from "@/data/types";

type ProjectHeaderProps = {
  item: DevelopmentPortfolioItem | PhotographyPortfolioItem | GraphicDesignPortfolioItem | VFXPortfolioItem | MarketingPortfolioItem;
};

export default function ProjectHeader({ item }: ProjectHeaderProps) {
  // Determine CTA text and URL based on category
  let ctaText = "طلب مشروع مشابه";
  let ctaUrl = "/#contact";
  let showLivePreview = false;
  let livePreviewUrl = "";
  let categoryDisplayName = "مشروع";

  if (item.itemCategory === "Development") {
    const devItem = item as DevelopmentPortfolioItem;
    ctaText = "طلب مشروع مشابه";
    ctaUrl = "/#contact";
    showLivePreview = !!devItem.url;
    livePreviewUrl = devItem.url || "";
    categoryDisplayName = "برمجة وتطوير";
  } else if (item.itemCategory === "Photography") {
    ctaText = "طلب جلسة تصوير مشابهة";
    categoryDisplayName = "تصوير";
  } else if (item.itemCategory === "Design") {
    ctaText = "طلب تصميم مشابه";
    categoryDisplayName = "تصميم";
  } else if (item.itemCategory === "Vfx") {
    ctaText = "طلب عمل مؤثرات مشابهة";
    categoryDisplayName = "مؤثرات بصرية";
  } else if (item.itemCategory === "Marketing") {
    ctaText = "طلب حملة تسويقية مشابهة";
    categoryDisplayName = "تسويق";
  }

  return (
    <div className="relative w-full flex flex-col items-center">
      {/* Hero Image Section */}
      <div className="relative w-full aspect-[21/9] sm:aspect-[2.5/1] overflow-hidden rounded-3xl border border-border/40 shadow-2xl mt-8">
        <Image
          src={item.image}
          alt={item.title}
          fill
          priority
          className="object-cover"
        />
        {/* Subtle gradient overlay to make it look premium */}
        <div className="absolute inset-0 bg-linear-to-t from-background via-background/20 to-transparent" />
      </div>

      {/* Content Section (Pulled up slightly over the image) */}
      <div className="relative z-10 -mt-20 sm:-mt-32 w-full max-w-4xl flex flex-col gap-6 text-center items-center bg-card/60 backdrop-blur-2xl border border-border/50 rounded-3xl p-8 sm:p-12 shadow-xl">
        {/* Featured Badge & Category */}
        <div className="flex flex-wrap items-center justify-center gap-3">
          {item.featured && (
            <Badge
              variant="outline"
              className="border-amber-500/30 bg-amber-500/10 px-3 py-1.5 text-sm font-semibold text-amber-500 flex items-center gap-1.5"
            >
              <HugeiconsIcon
                strokeWidth={2.5}
                className="text-amber-500 size-4"
                icon={Star}
              />
              مميز
            </Badge>
          )}
          <Badge
            variant="secondary"
            className="bg-primary/10 hover:bg-primary/15 text-primary border border-primary/20 px-3 py-1.5 text-sm font-medium"
          >
            {categoryDisplayName}
          </Badge>
        </div>

        {/* Title */}
        <h1 className="font-sans text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-foreground leading-tight max-w-4xl">
          {item.title}
        </h1>

        {/* Description */}
        <p className="text-base sm:text-lg text-muted-foreground max-w-2xl leading-relaxed">
          {item.description}
        </p>

        {/* Action Buttons */}
        <div className="flex flex-wrap items-center justify-center gap-4 mt-4">
          <Link
            href={ctaUrl}
            className={cn(
              buttonVariants({ size: "lg", variant: "default" }),
              "px-8 py-6 text-base font-semibold rounded-xl shadow-lg shadow-primary/20 hover:shadow-primary/30 transition-all"
            )}
          >
            {ctaText}
          </Link>
          {showLivePreview && (
            <Link
              href={livePreviewUrl}
              target="_blank"
              rel="noopener noreferrer"
              className={cn(
                buttonVariants({ size: "lg", variant: "outline" }),
                "px-8 py-6 text-base font-semibold rounded-xl border-border/60 hover:bg-muted/50 backdrop-blur-sm"
              )}
            >
              <HugeiconsIcon
                icon={PlayIcon}
                className="size-5 me-2"
              />
              مشاهدة العرض الحي
            </Link>
          )}
        </div>
      </div>
    </div>
  );
}