import { NextResponse } from 'next/server'
import { fetchDriveFiles } from '../_lib/driveService'

export const revalidate = 3600

export async function GET() {
  const result = await fetchDriveFiles('landing')

  if (result.error) {
    return NextResponse.json(
      { error: result.error, details: result.details },
      { status: result.status }
    )
  }

  return NextResponse.json({ files: result.files })
}
