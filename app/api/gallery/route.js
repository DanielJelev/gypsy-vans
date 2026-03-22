import { NextResponse } from 'next/server'

const FOLDER_ID = process.env.GOOGLE_DRIVE_FOLDER_ID || '1pSRW896tisU5yVkyr1caCZr4clSv9iJU'
const API_KEY = process.env.GOOGLE_API_KEY

export async function GET() {
  if (!API_KEY) {
    return NextResponse.json(
      { error: 'GOOGLE_API_KEY is not configured' },
      { status: 500 }
    )
  }

  const fields = 'files(id,name,mimeType,thumbnailLink,imageMediaMetadata)'
  const q = encodeURIComponent(`'${FOLDER_ID}' in parents and trashed = false`)
  const url = `https://www.googleapis.com/drive/v3/files?q=${q}&key=${API_KEY}&fields=${fields}&pageSize=200&orderBy=name`

  const res = await fetch(url, { next: { revalidate: 3600 } })

  if (!res.ok) {
    const text = await res.text()
    return NextResponse.json(
      { error: 'Google Drive API error', details: text },
      { status: res.status }
    )
  }

  const data = await res.json()
  const images = (data.files || [])
    .filter((f) => f.mimeType?.startsWith('image/'))
    .map((f) => ({
      id: f.id,
      name: f.name,
      mimeType: f.mimeType,
      thumbnail: `https://lh3.googleusercontent.com/d/${f.id}=w800`,
      full: `https://lh3.googleusercontent.com/d/${f.id}=s1600`,
    }))

  return NextResponse.json({ images })
}
