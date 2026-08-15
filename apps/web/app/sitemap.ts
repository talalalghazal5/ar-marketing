import { m } from 'motion/react';
import { MetadataRoute } from 'next'
import React from 'react'

const BASE_URL = "https://ar-growth.com";
const API_URL = "https://ar-marketing.onrender.com"

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {

    const response = await fetch(`${API_URL}/api/items`)
    const data = await response.json();
    const items = data.data ?? data;

  return [
    {
        url: BASE_URL,
        lastModified: new Date(),
    },
    {
        url: `${BASE_URL}/portfolio`,
        lastModified: new Date(),
    },
    {
        url: `${BASE_URL}/terms`,
        lastModified: new Date(),
    },
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    ...items.map((item: any) => ({
        url: `${BASE_URL}/portfolio/${item.id}`,
        lastModified: item.updated_at ? new Date(item.updated_at) : new Date(),
    }))
    
  ]
}
