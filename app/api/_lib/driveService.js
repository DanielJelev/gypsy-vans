const API_KEY = process.env.GOOGLE_API_KEY || ''

const FOLDERS = {
  landing: process.env.GOOGLE_DRIVE_LANDING_FOLDER_ID || '',
  gallery: process.env.GOOGLE_DRIVE_FOLDER_ID || '',
}

/**
 * Fetch files from a Google Drive folder.
 * @param {'landing'|'gallery'} folder
 * @returns {Promise<{files?: Array, error?: string, status?: number}>}
 */
export async function fetchDriveFiles(folder) {
  if (!API_KEY) {
    return { error: 'GOOGLE_API_KEY is not configured', status: 500 }
  }

  const folderId = FOLDERS[folder]
  if (!folderId) {
    return { error: `Unknown folder: ${folder}`, status: 400 }
  }

  const fields = 'files(id,name,mimeType,thumbnailLink,imageMediaMetadata)'
  const q = encodeURIComponent(`'${folderId}' in parents and trashed = false`)
  const url = `https://www.googleapis.com/drive/v3/files?q=${q}&key=${API_KEY}&fields=${fields}&pageSize=200&orderBy=name`

  const res = await fetch(url, { next: { revalidate: 60 } })

  if (!res.ok) {
    const text = await res.text()
    return { error: 'Google Drive API error', details: text, status: res.status }
  }

  const data = await res.json()

  const files = (data.files || []).map((f) => ({
    id: f.id,
    name: f.name,
    mimeType: f.mimeType,
    src: f.mimeType?.startsWith('video/')
      ? `/api/video/${f.id}`
      : `https://lh3.googleusercontent.com/d/${f.id}=s1600`,
    full: `https://lh3.googleusercontent.com/d/${f.id}=s1600`,
    thumbnail: f.mimeType?.startsWith('image/')
      ? `https://lh3.googleusercontent.com/d/${f.id}=w800`
      : undefined,
  }))

  return { files }
}
