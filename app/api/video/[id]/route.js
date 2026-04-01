import { NextResponse } from 'next/server'

const API_KEY = process.env.GOOGLE_API_KEY || 'AIzaSyBrUBmMGYQTvSd0yxvuQzbCy5FSUIabFns'

export const dynamic = 'force-dynamic'

export async function GET(request, { params }) {
  const { id } = await params

  if (!id || !/^[\w-]+$/.test(id)) {
    return NextResponse.json({ error: 'Invalid file id' }, { status: 400 })
  }

  const rangeHeader = request.headers.get('range')
  const driveUrl = `https://www.googleapis.com/drive/v3/files/${id}?alt=media&key=${API_KEY}`

  const driveRes = await fetch(driveUrl, {
    headers: rangeHeader ? { Range: rangeHeader } : {},
  })

  if (!driveRes.ok && driveRes.status !== 206) {
    return NextResponse.json(
      { error: 'Failed to fetch video' },
      { status: driveRes.status }
    )
  }

  const headers = new Headers()
  const contentType = driveRes.headers.get('content-type') || 'video/webm'
  headers.set('Content-Type', contentType)
  headers.set('Accept-Ranges', 'bytes')
  headers.set('Cache-Control', 'public, max-age=86400, s-maxage=86400, immutable')

  if (driveRes.headers.get('content-length')) {
    headers.set('Content-Length', driveRes.headers.get('content-length'))
  }
  if (driveRes.headers.get('content-range')) {
    headers.set('Content-Range', driveRes.headers.get('content-range'))
  }

  return new NextResponse(driveRes.body, {
    status: driveRes.status,
    headers,
  })
}
