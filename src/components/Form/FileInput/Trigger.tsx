import { UploadCloud } from 'lucide-react'

export function Trigger() {
  return (
    <label
      htmlFor="photo"
      className="hover:bg-violet-25 group flex flex-1 cursor-pointer flex-col items-center gap-3 rounded-lg border border-zinc-300 px-6 py-4 text-center text-zinc-500 shadow-sm hover:border-violet-200 hover:text-violet-500"
    >
      <div className="flex items-center justify-center bg-zinc-100 p-2">
        <UploadCloud size={20} className="text-zinc-600" />
      </div>

      <div className="space-y-1">
        <span className="text-sm text-zinc-500">
          <span className="text-sm font-semibold text-violet-600">
            Click to upload
          </span>{' '}
          or drag and drop
        </span>
        <p className="text-xs text-zinc-500">
          SVG, PNG, JPG or GIF (max. 800x400px)
        </p>
      </div>
    </label>
  )
}
