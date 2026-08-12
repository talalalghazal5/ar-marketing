# Portfolio Item Types Overview

This document provides an overview of the `PortfolioItem` union type and all types that inherit from the base `Item` interface in `apps/web/data/types.ts`.

---

## Base Item Interface

All portfolio item types inherit from this base interface.

| Field | Type | Description |
|-------|------|-------------|
| `id` | `number` | Unique identifier |
| `title` | `string` | Title of the portfolio item |
| `description` | `string` | Detailed description |
| `itemCategory` | `"Development" \| "Photography" \| "Design" \| "Vfx" \| "Marketing"` | High-level category |
| `featured` | `boolean` | Whether the item is featured |
| `status` | `"In Progress" \| "Completed"` | Current status |
| `timeTook` | `string` | Time taken to complete (e.g., "2 weeks") |
| `image` | `string` | Path or URL to the main image |

---

## DevelopmentPortfolioItem

Extends `Item` with development-specific fields.

| Field | Type | Description |
|-------|------|-------------|
| `technologies` | `string[]` | List of technologies used |
| `features` | `string[]` | List of features implemented |
| `category` | `"CRM" \| "Ecommerce" \| "Portfolio" \| "SAAS" \| "Documentation"` | Development subcategory |
| `url` | `string` | Live URL or repository link |

---

## PhotographyPortfolioItem

Extends `Item` with photography-specific fields.

| Field | Type | Description |
|-------|------|-------------|
| `gallery` | `string[]` | Array of image paths/URLs for the gallery |
| `category` | `"Product Session" \| "Reels" \| "Video" \| "Photoshoot" \| "Advertisment" \| "B-Roll"` | Photography subcategory |

---

## GraphicDesignPortfolioItem

Extends `Item` with graphic design-specific fields.

| Field | Type | Description |
|-------|------|-------------|
| `brandOverview` | `string` | Overview of the brand/client |
| `brandGoals` | `string[]` | List of brand goals/objectives |
| `technologies` | `string[]` | Tools/technologies used (e.g., Photoshop, Illustrator) |
| `category` | `"Branding" \| "Mockup" \| "Posters & Brocheurs" \| "Logo Design" \| "UI/UX Design"` | Design subcategory |

---

## VFXPortfolioItem

Extends `Item` with VFX-specific fields.

| Field | Type | Description |
|-------|------|-------------|
| `result` | `string` | Description of the final result/outcome |
| `overview` | `string` | Project overview/summary |
| `category` | `"CGI" \| "Motion Effects" \| "Video Edits" \| "Advertisment"` | VFX subcategory |

---

## MarketingPortfolioItem

Extends `Item` with marketing-specific fields.

| Field | Type | Description |
|-------|------|-------------|
| `platforms` | `string[]` | Platforms used (e.g., "Facebook", "Instagram", "Google Ads") |
| `results` | `string[]` | Measurable results/outcomes (e.g., "Increased engagement by 20%") |

---

## PortfolioItem Union Type

```typescript
export type PortfolioItem =
  | DevelopmentPortfolioItem
  | PhotographyPortfolioItem
  | GraphicDesignPortfolioItem
  | VFXPortfolioItem
  | MarketingPortfolioItem;
```

A `PortfolioItem` can be any one of the five specific types above, each inheriting the common `Item` fields plus their respective specialized fields.

---
*Generated from `apps/web/data/types.ts`*