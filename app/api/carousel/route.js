import { NextResponse } from 'next/server'
import { fetchDriveFiles } from '../_lib/driveService'

export const revalidate = 3600

const DEFAULT_PAGE_SIZE = 50

export async function GET(request) {
  const { searchParams } = new URL(request.url)
  const page = Math.max(1, parseInt(searchParams.get('page') || '1', 10))
  const limit = Math.min(50, Math.max(1, parseInt(searchParams.get('limit') || String(DEFAULT_PAGE_SIZE), 10)))

  const result = await fetchDriveFiles('carousel')

  if (result.error) {
    return NextResponse.json(
      { error: result.error, details: result.details },
      { status: result.status }
    )
  }

  const allImages = result.files.filter((f) => f.mimeType?.startsWith('image/'))

  const start = (page - 1) * limit
  const images = allImages.slice(start, start + limit)
  const hasMore = start + limit < allImages.length
  const total = allImages.length

  return NextResponse.json({ images, hasMore, total, page })
}
