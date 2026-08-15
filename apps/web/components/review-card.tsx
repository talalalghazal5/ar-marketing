import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@workspace/ui/components/card"
import { cn } from "@workspace/ui/lib/utils"
import Image from "next/image"
import React from "react"

type ReviewCardProps = {
  name: string
  username: string
  avatar: string
  quote: string
  layout: "small" | "medium" | "wide" | "tall" | "featured"
}

const layouts = {
  small: "lg:col-span-4",
  medium: "lg:col-span-6",
  wide: "lg:col-span-8",
  tall: "lg:row-span-2 lg:col-span-4",
  featured: "lg:col-span-6 lg:row-span-2",
}

export default function ReviewCard({
  name,
  username,
  avatar,
  quote,
  layout,
}: ReviewCardProps) {
  return (
    <Card
      className={cn(
        layouts[layout],
        "h-full bg-linear-to-t from-accent/80 to-card to-80%"
      )}
    >
      <CardHeader>
        <div className="flex items-center gap-3">
          <CardTitle>
            <Image
              src={avatar}
              alt={`صورة ${name}`}
              width={45}
              height={45}
              className="rounded-full"
            />
          </CardTitle>
          <div className="flex flex-col">
            <CardTitle className="font-thmanyah-subheading-sans">
              {name}
            </CardTitle>
            <CardDescription className="font-mono">{username}</CardDescription>
          </div>
        </div>
      </CardHeader>
      <CardContent>
        <p className="font-thmanyah-subheading-sans text-lg leading-loose">
          "{quote}"
        </p>
      </CardContent>
    </Card>
  )
}
