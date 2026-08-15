"use client"

import { Field } from "@workspace/ui/components/field"
import { Checkbox } from "@workspace/ui/components/checkbox"
import { Input } from "@workspace/ui/components/input"
import React, { useEffect, useState } from "react"
import { Label } from "@workspace/ui/components/label"
import { Skeleton } from "@workspace/ui/components/skeleton"
import { PortfolioItem } from "@/data/types"
import {
  getItems,
  searchByTitle,
  searchByType,
} from "@/app/actions/portfolio-actions"
import { useDebounceValue } from "usehooks-ts"
import PortfolioItemCard from "./portfolio-item-card"
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@workspace/ui/components/card"

export default function PortfolioClient() {
  const [items, setFilteredItems] = React.useState<PortfolioItem[]>([])
  const [searchQuery, setSearchQuery] = useState("")
  const [debouncedQuery] = useDebounceValue(searchQuery, 400)
  const [loading, setLoading] = useState<boolean>(false)

  const [filters, setFilters] = React.useState({
    Development: false,
    Photography: false,
    Design: false,
    Vfx: false,
    Marketing: false,
  })

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true)
      const activeFilters = Object.keys(filters).filter(
        (key) => filters[key as keyof typeof filters]
      )

      let fetchedItems: PortfolioItem[] = []

      // 1. If there's a search query, fetch by title
      if (debouncedQuery.trim() !== "") {
        const data = await searchByTitle(debouncedQuery)
        fetchedItems = data || []

        // Apply category filters locally to the search results
        if (activeFilters.length > 0) {
          fetchedItems = fetchedItems.filter((item) =>
            activeFilters.includes(item.itemCategory)
          )
        }
      }
      // 2. If there are filters but no search query, hit the backend category API!
      else if (activeFilters.length > 0) {
        const promises = activeFilters.map((filter) =>
          searchByType(filter.toLowerCase())
        )
        const results = await Promise.all(promises)

        // Combine all results into one array
        const combined = results.flat().filter(Boolean) as PortfolioItem[]
        // Remove duplicate items (if any backend overlap exists)
        fetchedItems = Array.from(
          new Map(combined.map((item) => [item.id, item])).values()
        )
      }
      // 3. Otherwise, fetch default latest items
      else {
        const data = await getItems()
        fetchedItems = data || []
      }

      // 4. Sort the list alphabetically by title (name)
      fetchedItems.sort((a, b) => a.title.localeCompare(b.title))

      setFilteredItems(fetchedItems)
      setLoading(false)
    }
    fetchData()
  }, [debouncedQuery, filters])

  if (loading) {
    return (
      <div className="grid w-full! gap-6 not-md:flex not-md:flex-col not-md:items-center not-md:overflow-x-auto md:grid-cols-[250px_minmax(0,1fr)]">
        <div className="sticky top-30 z-10 flex max-h-100 flex-col rounded-2xl border border-border/60 bg-card/70 p-6 shadow-xl shadow-black/10 backdrop-blur-xl *:font-thmanyah-subheading-sans">
          <div className="mb-6">
            <p className="mb-3 text-sm font-semibold tracking-[0.2em] text-muted-foreground uppercase">
              بحث
            </p>
            <Input
              placeholder="ابحث عن مشروع..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
          </div>

          <p className="mb-5 text-sm font-semibold tracking-[0.2em] text-muted-foreground uppercase">
            الفئات
          </p>
          <div className="flex gap-4 sm:flex-row md:flex-col">
            <div>
              <Field orientation={"horizontal"}>
                <Checkbox
                  value="Development"
                  onCheckedChange={(value) => {
                    setFilters({ ...filters, Development: value })
                  }}
                  id="development-filter-checkbox"
                  name="filter-checkbox"
                />
                <Label htmlFor="development-filter-checkbox">
                  البرمجة والتطوير
                </Label>
              </Field>
            </div>
            <div className="flex items-center gap-4">
              <Field orientation={"horizontal"}>
                <Checkbox
                  value="Photography"
                  onCheckedChange={(value) => {
                    setFilters({ ...filters, Photography: value })
                  }}
                  id="photography-filter-checkbox"
                  name="filter-checkbox"
                />
                <Label htmlFor="photography-filter-checkbox">التصوير</Label>
              </Field>
            </div>
            <div className="flex items-center gap-4">
              <Field orientation={"horizontal"}>
                <Checkbox
                  value="Design"
                  onCheckedChange={(value) => {
                    setFilters({ ...filters, Design: value })
                  }}
                  id="design-filter-checkbox"
                  name="filter-checkbox"
                />
                <Label htmlFor="design-filter-checkbox">
                  التصميم الغرافيكي
                </Label>
              </Field>
            </div>
            <div className="flex items-center gap-4">
              <Field orientation={"horizontal"}>
                <Checkbox
                  value="Vfx"
                  id="vfx-filter-checkbox"
                  name="filter-checkbox"
                  onCheckedChange={(value) => {
                    setFilters({ ...filters, Vfx: value })
                  }}
                />
                <Label htmlFor="vfx-filter-checkbox">التأثيرات البصرية</Label>
              </Field>
            </div>
            <div className="flex items-center gap-4">
              <Field orientation={"horizontal"}>
                <Checkbox
                  value="Marketing"
                  id="marketing-filter-checkbox"
                  name="filter-checkbox"
                  onCheckedChange={(value) => {
                    setFilters({ ...filters, Marketing: value })
                  }}
                />
                <Label htmlFor="marketing-filter-checkbox">التسويق</Label>
              </Field>
            </div>
          </div>
        </div>
        <div className="grid grid-cols-1 gap-6 lg:grid-cols-2">
          {Array.from({ length: 5 }).map((_, index) => (
            <Card
              key={index}
              className="group flex h-full flex-col overflow-hidden border border-border/60 bg-card/80 p-0 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-primary/40 hover:shadow-[0_20px_60px_-20px_rgba(0,0,0,0.55)]"
            >
              <Skeleton className="h-100 w-full rounded-xl"></Skeleton>
              <CardHeader>
                <CardTitle>
                  <Skeleton className="h-10 w-full rounded-xl"></Skeleton>
                </CardTitle>
              </CardHeader>
              <CardContent>
                <Skeleton className="h-20 w-full rounded-xl"></Skeleton>
              </CardContent>
              <CardFooter>
                <Skeleton className="h-10 w-full rounded-full"></Skeleton>
              </CardFooter>
            </Card>
          ))}
        </div>
      </div>
    )
  }
  return (
    <div className="grid w-full! gap-6 not-md:flex not-md:flex-col not-md:items-center md:grid-cols-[260px_minmax(0,1fr)]">
      <div className="sticky top-30 z-10 flex max-h-100 flex-col rounded-2xl border border-border/60 bg-card/70 p-6 shadow-xl shadow-black/10 backdrop-blur-xl *:font-thmanyah-subheading-sans">
        <div className="mb-6">
          <p className="mb-3 text-sm font-semibold tracking-[0.2em] text-muted-foreground uppercase">
            بحث
          </p>
          <Input
            placeholder="ابحث عن مشروع..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
          />
        </div>

        <p className="mb-5 text-sm font-semibold tracking-[0.2em] text-muted-foreground uppercase">
          الفئات
        </p>
        <div className="flex gap-4 sm:flex-row md:flex-col">
          <div>
            <Field orientation={"horizontal"}>
              <Checkbox
                value="Development"
                onCheckedChange={(value) => {
                  setFilters({ ...filters, Development: value })
                }}
                id="development-filter-checkbox"
                name="filter-checkbox"
              />
              <Label htmlFor="development-filter-checkbox">
                البرمجة والتطوير
              </Label>
            </Field>
          </div>
          <div className="flex items-center gap-4">
            <Field orientation={"horizontal"}>
              <Checkbox
                value="Photography"
                onCheckedChange={(value) => {
                  setFilters({ ...filters, Photography: value })
                }}
                id="photography-filter-checkbox"
                name="filter-checkbox"
              />
              <Label htmlFor="photography-filter-checkbox">التصوير</Label>
            </Field>
          </div>
          <div className="flex items-center gap-4">
            <Field orientation={"horizontal"}>
              <Checkbox
                value="Design"
                onCheckedChange={(value) => {
                  setFilters({ ...filters, Design: value })
                }}
                id="design-filter-checkbox"
                name="filter-checkbox"
              />
              <Label htmlFor="design-filter-checkbox">التصميم الغرافيكي</Label>
            </Field>
          </div>
          <div className="flex items-center gap-4">
            <Field orientation={"horizontal"}>
              <Checkbox
                value="Vfx"
                id="vfx-filter-checkbox"
                name="filter-checkbox"
                onCheckedChange={(value) => {
                  setFilters({ ...filters, Vfx: value })
                }}
              />
              <Label htmlFor="vfx-filter-checkbox">التأثيرات البصرية</Label>
            </Field>
          </div>
          <div className="flex items-center gap-4">
            <Field orientation={"horizontal"}>
              <Checkbox
                value="Marketing"
                id="marketing-filter-checkbox"
                name="filter-checkbox"
                onCheckedChange={(value) => {
                  setFilters({ ...filters, Marketing: value })
                }}
              />
              <Label htmlFor="marketing-filter-checkbox">التسويق</Label>
            </Field>
          </div>
        </div>
      </div>
      {items.length > 0 ? (
        <div className="grid grid-cols-1 gap-6 lg:grid-cols-2 self-stretch">
          {items.map((item) => (
            <PortfolioItemCard key={item.id} item={item} />
          ))}
        </div>
      ) : (
        <div className="flex min-h-60 items-center justify-center rounded-2xl border border-dashed border-border/60 bg-card/40 p-8 text-center font-thmanyah-subheading-sans text-muted-foreground align-self-stretch">
          لا توجد أعمال لعرضها
        </div>
      )}
    </div>
  )
}
