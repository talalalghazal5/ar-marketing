export type ProcessStep = {
  id: number
  title: string
  description: string
}

export interface Item {
  id: number
  title: string
  slug: string
  description: string
  itemCategory: "Development" | "Photography" | "Design" | "Vfx" | "Marketing"
  featured: boolean
  status: "Completed" | "In Progress"
  timeTook: string
  image: string
}

export interface DevelopmentPortfolioItem extends Item {
  technologies: string[]
  features: string[]
  category: "CRM" | "Ecommerce" | "Portfolio" | "SAAS" | "Documentation"
  url: string
}

export interface PhotographyPortfolioItem extends Item {
  gallery: string[]
  category:
    | "Product Session"
    | "Reels"
    | "Video"
    | "Photoshoot"
    | "Advertisment"
    | "B-Roll"
}

export interface GraphicDesignPortfolioItem extends Item {
  brandOverview: string
  brandGoals: string[]
  technologies: string[]
  gallery: string[] | null
  category:
    | "Branding"
    | "Mockup"
    | "Posters & Brocheurs"
    | "Logo Design"
    | "UI/UX Design"
}

export interface VFXPortfolioItem extends Item {
  result: string
  overview: string
  gallery?: string[]
  category: "CGI" | "Motion Effects" | "Video Edits" | "Advertisment"
}

export interface MarketingPortfolioItem extends Item {
  platforms: string[]
  results: string[]
}

export type PortfolioItem =
  | DevelopmentPortfolioItem
  | PhotographyPortfolioItem
  | GraphicDesignPortfolioItem
  | VFXPortfolioItem
  | MarketingPortfolioItem
