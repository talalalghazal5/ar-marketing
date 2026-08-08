"use server"

import { PortfolioItem } from "@/data/types"

const baseUrl = process.env.LARAVEL_BASE_URL

const normalizeItem = (item: any): PortfolioItem => {
  // Mapping from Arabic database category to English Next.js Category
  const categoryMap: Record<string, string> = {
    "برمجة وتطوير": "Development",
    "تصميم": "Design",
    "تسويق": "Marketing",
    "تصوير": "Photography",
    "مؤثرات بصرية": "Vfx"
  }

  // Mapping from Arabic category to API relationship name
  const relMap: Record<string, string> = {
    "برمجة وتطوير": "development",
    "تصميم": "design",
    "تسويق": "marketing",
    "تصوير": "photography",
    "مؤثرات بصرية": "vfx"
  }

  const category = categoryMap[item.itemCategory] || "Development"
  const relKey = relMap[item.itemCategory] || "development"
  
  // Extract specific fields based on the item category relationship
  const typeRel = item[relKey] || {}

  // Parse JSON fields safely if they arrive as strings
  const parseJsonSafe = (data: any) => {
    if (!data) return []
    if (typeof data === 'string') {
      try { return JSON.parse(data) } catch (e) { return [] }
    }
    return Array.isArray(data) ? data : []
  }

  return {
    ...item,
    itemCategory: category as any,
    status:
      item.status == true || item.status == 1 ? "Completed" : "In Progress",
    timeTook: item.timeTook ? `${item.timeTook} Days` : "Unknown",
    image:
      item.image
        ? item.image
        : "https://images.unsplash.com/photo-1517336714731-489689fd1ca8?q=80&w=2026&auto=format&fit=crop",
    
    // Development specific
    technologies: parseJsonSafe(typeRel.technologies),
    features: parseJsonSafe(typeRel.features),
    category: typeRel.category || "Unknown",
    url: typeRel.url || "#",

    // Design specific
    brandOverview: typeRel.brandOverview || "",
    brandGoals: parseJsonSafe(typeRel.brand_goals),

    // Marketing specific
    platforms: parseJsonSafe(typeRel.platforms),
    results: parseJsonSafe(typeRel.results),

    // Photography / VFX / Design specific galleries
    gallery: parseJsonSafe(typeRel.galleryPhotography || typeRel.galleryVfx || typeRel.galleryDesign),
    result: typeRel.result || "",
    overview: typeRel.overview || "",
  }
}

export async function getItems(): Promise<PortfolioItem[] | null> {
  try {
    const response = await fetch(`${baseUrl}/api/items`)
    if (!response.ok) {
      return null
    }
    const data = await response.json()
    // Laravel's paginate() returns the items in the 'data' field
    const items = data.data || data.items || data
    const normalizedItems = items.map(normalizeItem)
    console.log(normalizedItems);
    return Array.isArray(items) ? normalizedItems : []
  } catch (error) {
    console.log(error)
    return null
  }
}

// Get a single item by ID
export async function getItem(id: string): Promise<PortfolioItem | null> {
  try {
    const response = await fetch(`${baseUrl}/api/items/${id}`)
    if (!response.ok) {
      return null
    }
    const data = await response.json()
    // Extract item from response (assuming standard API response format)
    const itemData = data.item || data
    return itemData ? normalizeItem(itemData) : null
  } catch (error) {
    console.log('Error in getItem:', error)
    return null
  }
}

// Create a new item
export async function createItem(
  item: Omit<PortfolioItem, "id">
): Promise<PortfolioItem | null> {
  try {
    const response = await fetch(`${baseUrl}/api/items`, {
      method: "POST",
      headers: {
        "Accept" : "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify(item),
    })
    if (!response.ok) {
      return null
    }
    const data = await response.json()
    // Assuming the response structure is { item: ... }
    return data
  } catch (error) {
    console.error(error)
    return null
  }
}

// Update an existing item (partial update)
export async function updateItem(
  id: string,
  updates: Partial<PortfolioItem>
): Promise<PortfolioItem | null> {
  try {
    const response = await fetch(`${baseUrl}/api/items/${id}`, {
      method: "PUT", // Using PUT for updates
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(updates),
    })
    if (!response.ok) {
      return null
    }
    const data = await response.json()
    // Assuming the response structure is { item: ... }
    return data.item
  } catch (error) {
    console.log(error)
    return null
  }
}

// Delete an item by ID
export async function deleteItem(id: string): Promise<boolean | null> {
  try {
    const response = await fetch(`${baseUrl}/api/items/${id}`, {
      method: "DELETE",
    })
    if (!response.ok) {
      return null
    }
    // Assuming the deletion was successful
    return true
  } catch (error) {
    console.log(error)
    return null
  }
}

// Search items by title
export async function searchByTitle(
  title: string
): Promise<PortfolioItem[] | null> {
  try {
    const response = await fetch(`${baseUrl}/api/searchByTitle/${encodeURIComponent(title)}`)
    if (!response.ok) return null
    const result = await response.json()
    const items = result.data?.items || result.data || (Array.isArray(result) ? result : [])
    return Array.isArray(items) ? items.map(normalizeItem) : []
  } catch (error) {
    console.error(error)
    return null
  }
}

// Search items by type/category
export async function searchByType(
  type: string
): Promise<PortfolioItem[] | null> {
  try {
    const arabicCategoryMap: Record<string, string> = {
      development: "برمجة وتطوير",
      design: "تصميم",
      marketing: "تسويق",
      photography: "تصوير",
      vfx: "مؤثرات بصرية",
    }
    const mappedType = arabicCategoryMap[type.toLowerCase()] || type
    
    const response = await fetch(`${baseUrl}/api/searchByType/${encodeURIComponent(mappedType)}`)
    if (!response.ok) return null
    const result = await response.json()
    const items = result.data?.items || result.data || (Array.isArray(result) ? result : [])
    return Array.isArray(items) ? items.map(normalizeItem) : []
  } catch (error) {
    console.error(error)
    return null
  }
}

// Search items by slug
export async function searchBySlug(
  slug: string
): Promise<PortfolioItem | null> {
  try {
    const response = await fetch(`${baseUrl}/api/searchBySlug/${encodeURIComponent(slug)}`)
    if (!response.ok) return null
    const result = await response.json()
    const item = result.data?.item || result.data || result
    return item ? normalizeItem(item) : null
  } catch (error) {
    console.error(error)
    return null
  }
}