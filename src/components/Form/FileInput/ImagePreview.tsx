'use client'

import { User } from 'lucide-react'
import { useFileInput } from './Root'
import { useMemo } from 'react'
export function ImagePreview() {
  const { files } = useFileInput()

  const previewURl = useMemo(() => {
    if (files.length === 0) {
      return null
    }

    return URL.createObjectURL(files[0])
  }, [files])

  if (previewURl === null) {
    return (
      <div className="flex h-16 w-16 items-center justify-center rounded-full">
        <User size={32} className="bg-violet-50 text-violet-600" />
      </div>
    )
  }

  return (
    // eslint-disable-next-line @next/next/no-img-element
    <img
      src={previewURl}
      alt=""
      className="flex h-16 w-16 items-center justify-center rounded-full"
    />
  )
}
