"use client"
import { HugeiconsIcon } from '@hugeicons/react'
import { Button } from '@workspace/ui/components/button'
import { useRouter } from 'next/navigation'
import React from 'react'

export default function OrderProjectButton() {
    const router = useRouter()
  return (
    <Button variant={"secondary"} size={"lg"} onClick={() => router.replace('/#contact',)} >Order a similar project</Button>
  )
}
