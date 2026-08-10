import { NextRequest, NextResponse } from "next/server"

const baseUrl = process.env.LARAVEL_BASE_URL

export async function GET(
  request: NextRequest,
  { params }: { params: Promise<{ method: string; query: string }> }
) {
  try {
    const { method, query } = await params
    
    // Ensure the method is one of the allowed search methods to prevent arbitrary endpoint access
    if (!["searchByType", "searchByTitle", "searchBySlug"].includes(method)) {
      return NextResponse.json(
        { message: "Invalid search method" },
        { status: 400 }
      )
    }

    const response = await fetch(`${baseUrl}/api/${method}/${query}`, {
      headers: {
        Accept: "application/json",
      },
    })
    
    if (!response.ok) {
      return NextResponse.json({
        status: response.status,
        message: response.statusText,
      })
    }
    
    const data = await response.json()
    return NextResponse.json({
      status: 200,
      data,
    })
  } catch (error) {
    return NextResponse.json(
      { message: "Error performing search", error },
      { status: 500 }
    )
  }
}
