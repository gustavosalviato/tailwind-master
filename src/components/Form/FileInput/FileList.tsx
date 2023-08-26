'use client'

import { Trash2, UploadCloud } from 'lucide-react'
import { useFileInput } from './Root'
import { formatBytes } from '@/helpers/format-bytes'

export function FileList() {
  const { files } = useFileInput()
  return (
    <div className="mt-4 flex flex-col gap-3">
      {files.map((file) => {
        return (
          <div
            key={file.name}
            className="flex items-start gap-3 rounded-md border border-zinc-200 p-4"
          >
            <div className="flex items-center justify-center rounded-full border border-violet-50 bg-violet-100 p-2">
              <UploadCloud className="text-violet-600" />
            </div>

            <div className="flex flex-1 flex-col">
              <span className="text-sm font-medium text-zinc-700">
                {file.name}
              </span>
              <span className="text-sm text-zinc-500">
                {formatBytes(file.size)}
              </span>

              <div className="mt-3">
                <div className="flex items-center">
                  <div className="w-full bg-zinc-100">
                    <div className="h-2 w-4/5 rounded-full bg-violet-600" />
                  </div>
                  <p className="text-sm font-medium text-zinc-700">80%</p>
                </div>
              </div>
            </div>

            <button
              type="button"
              className="ml-auto rounded-md p-2 hover:bg-zinc-50"
            >
              <Trash2 className="h-5 w-5 text-zinc-500" />
            </button>
          </div>
        )
      })}
    </div>
  )
}
