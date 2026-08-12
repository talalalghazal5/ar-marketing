import { NextRequest, NextResponse } from "next/server"

const baseUrl = process.env.LARAVEL_BASE_URL

//* /api/items ---> Fetch all items
async function GET() {
  try {
    const response = await fetch(`${baseUrl}/api/items`)
    if (!response.ok) {
      return NextResponse.json({
        message: "Error fetching items",
        status: response.status,
      })
    }
    const data = await response.json()
    return NextResponse.json(data)
  } catch (error) {
    return NextResponse.json(error)
  }
}

//* POST /api/items ---> Create an item
async function POST(request: NextRequest) {
  try {
    const body = await request.json()
    const formData = new FormData()
    
    Object.keys(body).forEach(key => {
      formData.append(key, String(body[key]))
    })

    const response = await fetch(`${baseUrl}/api/items`, {
      method: "POST",
      body: formData,
      headers: {
        "Accept": "application/json",
      },
    })

    if (!response.ok) {
      return NextResponse.json({
        status: response.status,
        message: response.statusText,
      })
    }
    const data = await response.json()
    return NextResponse.json(data)
  } catch (error) {
    return NextResponse.json(error)
  }
}

export { GET, POST }