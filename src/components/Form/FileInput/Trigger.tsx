'use client'

import { UploadCloud } from 'lucide-react'
import { useFileInput } from './Root'

export function Trigger() {
  const { id } = useFileInput()
  return (
    <label
      htmlFor={id}
      className="hover:bg-violet-25 group flex flex-1 cursor-pointer flex-col items-center gap-3 rounded-lg border border-zinc-300 px-6 py-4 text-center text-zinc-500 shadow-sm hover:border-violet-200 hover:text-violet-500 dark:border-zinc-700 dark:bg-zinc-800 dark:hover:border-violet-600 dark:hover:bg-zinc-900"
    >
      <div className="flex items-center justify-center rounded-full bg-zinc-100 p-2 dark:bg-zinc-800">
        <UploadCloud size={20} className="text-zinc-600 dark:text-violet-300" />
      </div>

      <div className="space-y-1">
        <span className="text-sm text-zinc-500 dark:text-zinc-400">
          <span className="text-sm font-semibold text-violet-600 dark:text-violet-300">
            Click to upload
          </span>{' '}
          or drag and drop
        </span>
        <p className="text-xs text-zinc-500 dark:text-zinc-400">
          SVG, PNG, JPG or GIF (max. 800x400px)
        </p>
      </div>
    </label>
  )
}
