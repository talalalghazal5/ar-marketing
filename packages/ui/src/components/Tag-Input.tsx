import React, { useState } from "react"
import { Button } from "@workspace/ui/components/button"
import { HugeiconsIcon } from "@hugeicons/react"
import { Cancel01Icon, X } from "@hugeicons/core-free-icons"
import { Input } from "@workspace/ui/components/input"

interface TagInputProps {
  value: string[]
  onChange: (value: string[]) => void
  placeholder?: string
  disabled: boolean
}

export default function TagInput({
  value,
  onChange,
  placeholder = "اكتب ثم اضغط Enter",
  disabled = false,
}: TagInputProps) {
  const [inputValue, setInputValue] = useState("")

  const addTag = () => {
    const tag = inputValue.trim()
    console.log(tag)
    if (!tag) {
      return
    }
    if (value.includes(tag)) {
      return
    }
    onChange([...value, tag])
    setInputValue("")
    console.log(value)
  }

  const removeTag = (tag: string) => {
    onChange(value.filter((t) => t !== tag))
  }

  const handleKeyDown = (event: React.KeyboardEvent<HTMLInputElement>) => {
    if (event.key === "Enter") {
      event.preventDefault()
      addTag()
    }
  }
  return (
    <div className="mb-5 rounded-md border-input bg-background py-5">
      <div className="flex flex-wrap gap-3">
        {value.map((item) => (
          <div
            className="flex items-center justify-between gap-3 rounded-md border border-primary/70 bg-accent/40 px-4 py-2"
            key={item}
          >
            {item}
            <Button
              variant={"ghost"}
              size={"icon-sm"}
              onClick={() => removeTag(item)}
            >
              <HugeiconsIcon icon={Cancel01Icon} />
            </Button>
          </div>
        ))}
      </div>
      <Input
        type="text"
        value={inputValue}
        onChange={(event) => setInputValue(event.target.value)}
        onKeyDown={handleKeyDown}
        placeholder={placeholder}
        disabled={disabled}
        className="mt-2 border-0 shadow-none focus-visible:ring-0"
      />
    </div>
  )
}
