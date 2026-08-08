import { cn } from "@workspace/ui/lib/utils";
import type {
  DevelopmentPortfolioItem,
  PhotographyPortfolioItem,
  GraphicDesignPortfolioItem,
  VFXPortfolioItem,
  MarketingPortfolioItem
} from "@/data/types";

type ProjectMetadataProps = {
  item: DevelopmentPortfolioItem | PhotographyPortfolioItem | GraphicDesignPortfolioItem | VFXPortfolioItem | MarketingPortfolioItem;
  timeTook: string;
};

export default function ProjectMetadata({ item, timeTook }: ProjectMetadataProps) {
  let categoryText = "غير محدد";
  let statusText = "قيد التنفيذ";

  if (item.itemCategory === "Development") {
    const devItem = item as DevelopmentPortfolioItem;
    categoryText = devItem.category || "برمجة";
    statusText = devItem.status === "Completed" ? "مكتمل" : "قيد التطوير";
  } else if (item.itemCategory === "Photography") {
    const photoItem = item as PhotographyPortfolioItem;
    categoryText = photoItem.category || "تصوير";
    statusText = photoItem.status === "Completed" ? "مكتمل" : "قيد التنفيذ";
  } else if (item.itemCategory === "Design") {
    const designItem = item as GraphicDesignPortfolioItem;
    categoryText = designItem.category || "تصميم";
    statusText = designItem.status === "Completed" ? "مكتمل" : "قيد التصميم";
  } else if (item.itemCategory === "Vfx") {
    const vfxItem = item as VFXPortfolioItem;
    categoryText = vfxItem.category || "مؤثرات بصرية";
    statusText = vfxItem.status === "Completed" ? "مكتمل" : "قيد الإنتاج";
  } else if (item.itemCategory === "Marketing") {
    const marketingItem = item as MarketingPortfolioItem;
    categoryText = "تسويق رقمي";
    statusText = marketingItem.status === "Completed" ? "مكتمل" : "قيد التنفيذ";
  }

  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-4 w-full max-w-4xl mx-auto py-8">
      {/* Category Card */}
      <div className="flex flex-col items-center sm:items-start p-6 rounded-2xl bg-card/40 border border-border/50 backdrop-blur-xl shadow-xs transition-colors hover:bg-card/60">
        <span className="flex items-center gap-2 text-sm font-medium tracking-wider text-muted-foreground mb-2">
          <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-primary/70"><path d="m16.5 9.4-9-5.19M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z"/><polyline points="3.27 6.96 12 12.01 20.73 6.96"/><line x1="12" y1="22.08" x2="12" y2="12"/></svg>
          القسم الفرعي
        </span>
        <span className="text-xl font-bold text-foreground">{categoryText}</span>
      </div>

      {/* Status Card */}
      <div className="flex flex-col items-center sm:items-start p-6 rounded-2xl bg-card/40 border border-border/50 backdrop-blur-xl shadow-xs transition-colors hover:bg-card/60">
        <span className="flex items-center gap-2 text-sm font-medium tracking-wider text-muted-foreground mb-2">
          <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-primary/70"><path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"/><path d="m9 11 3 3L22 4"/></svg>
          الحالة
        </span>
        <span className="inline-flex items-center gap-2 text-xl font-bold text-foreground">
          <span className={cn(
            "size-2.5 rounded-full shadow-sm",
            statusText.includes("مكتمل") ? "bg-emerald-500 shadow-emerald-500/50" : "bg-amber-500 shadow-amber-500/50 animate-pulse"
          )} />
          {statusText}
        </span>
      </div>

      {/* Time Took Card */}
      <div className="flex flex-col items-center sm:items-start p-6 rounded-2xl bg-card/40 border border-border/50 backdrop-blur-xl shadow-xs transition-colors hover:bg-card/60">
        <span className="flex items-center gap-2 text-sm font-medium tracking-wider text-muted-foreground mb-2">
          <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-primary/70"><circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/></svg>
          مدة العمل
        </span>
        <span className="text-xl font-bold text-foreground">{timeTook}</span>
      </div>
    </div>
  );
}