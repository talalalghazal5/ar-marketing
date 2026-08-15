import { Metadata, MetadataRoute } from "next"
import React from "react"

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: "*",
      allow: "/",
    },
    sitemap: "https://ar-growth.com/sitemap.xml",
  }
}
