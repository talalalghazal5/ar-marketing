import Link from "next/link";
import { cn } from "@workspace/ui/lib/utils";
import { buttonVariants } from "@workspace/ui/components/button";
import type {
  DevelopmentPortfolioItem,
  PhotographyPortfolioItem,
  GraphicDesignPortfolioItem,
  VFXPortfolioItem,
  MarketingPortfolioItem
} from "@/data/types";

type ProjectCTAProps = {
  item: DevelopmentPortfolioItem | PhotographyPortfolioItem | GraphicDesignPortfolioItem | VFXPortfolioItem | MarketingPortfolioItem;
};

export default function ProjectCTA({ item }: ProjectCTAProps) {
  let ctaText = "طلب مشروع مشابه";
  let showLivePreview = false;
  let livePreviewUrl = "";

  if (item.itemCategory === "Development") {
    const devItem = item as DevelopmentPortfolioItem;
    ctaText = "طلب مشروع مشابه";
    showLivePreview = !!devItem.url;
    livePreviewUrl = devItem.url || "";
  } else if (item.itemCategory === "Photography") {
    ctaText = "طلب جلسة تصوير مشابهة";
  } else if (item.itemCategory === "Design") {
    ctaText = "طلب تصميم مشابه";
  } else if (item.itemCategory === "Vfx") {
    const vfxItem = item as VFXPortfolioItem;
    ctaText = "طلب عمل مؤثرات مشابهة";
    showLivePreview = !!vfxItem.result;
    livePreviewUrl = vfxItem.result || "";
  } else if (item.itemCategory === "Marketing") {
    ctaText = "طلب حملة تسويقية مشابهة";
  }

  return (
    <div className="mt-8 p-8 md:p-12 rounded-2xl backdrop-blur-xs text-center max-w-3xl mx-auto w-full">
      <h3 className="text-xl md:text-3xl text-foreground mb-3 font-thmanyah-heading!">هل تبحث عن عمل مماثل؟</h3>
      <p className="text-muted-foreground text-sm md:text-base max-w-lg mx-auto mb-8 leading-relaxed font-thmanyah-subheading-sans">
        نحن هنا لمساعدتك في تحقيق أهدافك وتحويل رؤيتك إلى واقع ملموس بدقة واحترافية متناهية.
      </p>
      <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
        <Link
          href="/#contact"
          className={cn(
            buttonVariants({ size: "lg", variant: "default" }),
            "px-8 py-4 text-sm rounded-lg w-full sm:w-auto font-thmanyah-subheading-sans min-w-45"
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
              "px-8 py-4 text-sm font-semibold rounded-lg w-full sm:w-auto min-w-45 border-border/40 hover:bg-muted"
            )}
          >
            مشاهدة العرض الحي
          </Link>
        )}
      </div>
    </div>
  );
}