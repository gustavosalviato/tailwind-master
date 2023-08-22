/* eslint-disable @next/next/no-img-element */

import { LogOut } from 'lucide-react'

export function Profile() {
  return (
    <div className="flex gap-3">
      <img
        src="https://github.com/gustavosalviato.png"
        alt=""
        className="h-10 w-10 rounded-full object-cover"
      />
      <div className="flex flex-col gap-0.5 truncate">
        <span className="text-sm font-semibold text-zinc-700">Gustavo</span>
        <span className="truncate text-sm text-zinc-500">
          gustavosalviato@gmail.com
        </span>
      </div>
      <button className="flex items-center justify-center rounded-md p-2 transition-colors duration-300 hover:bg-zinc-50">
        <LogOut size={20} className="text-zinc-500" />
      </button>
    </div>
  )
}
