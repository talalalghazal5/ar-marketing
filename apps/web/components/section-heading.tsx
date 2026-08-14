import { cn } from "@workspace/ui/lib/utils"

interface SectionHeadingProps {
  title: string
  subtitle?: string
  align?: "center" | "start"
  className?: string
}

export default function SectionHeading({
  title,
  subtitle,
  align = "center",
  className,
}: SectionHeadingProps) {
  return (
    <div
      className={cn(
        "flex flex-col gap-4",
        className
      )}
    >
      <h1 className="font-thmanyah-heading text-5xl w-full">{title}</h1>
      {subtitle && (
        <p className="w-full font-thmanyah-serif text-lg leading-loose text-muted-foreground">
          {subtitle}
        </p>
      )}
    </div>
  )
}
