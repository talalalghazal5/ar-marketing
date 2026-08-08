import PortfolioItemCard from "./portfolio-item-card";
import { getItems } from "@/app/actions/portfolio-actions";
import { PortfolioItem } from "@/data/types";
import SectionTemplate from "@/components/section-template";
import SectionHeading from "@/components/section-heading";

export default async function PortfolioSectionServer() {
  const items = await getItems() ?? [];

  // Group items by category
  const grouped: Record<string, PortfolioItem[]> = {};
  items.forEach((item) => {
    const cat = item.itemCategory;
    if (!grouped[cat]) {
      grouped[cat] = [];
    }
    grouped[cat].push(item);
  });

  // Arabic labels for categories
  const categoryLabels: Record<string, string> = {
    Development: "البرمجة والتطوير",
    Photography: "التصوير",
    Design: "التصميم الغرافيكي",
    Vfx: "التأثيرات البصرية",
    Marketing: "التسويق",
  };

  return (
    <SectionTemplate id="portfolio">
      <div className="mb-8">
        <SectionHeading
          title="أعمالنا"
          subtitle="ألقِ نظرة على بعضٍ من أعمالنا المميزة"
          className="gap-3"
          align="start"
        />
      </div>

      <div className="grid gap-6 lg:grid-cols-2">
        {Object.keys(grouped).map((category) => (
          <section key={category} className="col-span-1 lg:col-span-2">
            <h2 className="mb-4 text-2xl font-bold text-foreground">
              {categoryLabels[category] || category}
            </h2>
            <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
              {grouped[category]?.map((item) => (
                <PortfolioItemCard key={item.id} item={item} />
              ))}
            </div>
          </section>
        ))}
      </div>
    </SectionTemplate>
  );
}
