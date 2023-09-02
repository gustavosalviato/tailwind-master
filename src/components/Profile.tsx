/* eslint-disable @next/next/no-img-element */

import { LogOut } from 'lucide-react'
import { Button } from './Button'

export function Profile() {
  return (
    <div className="flex gap-3">
      <img
        src="https://github.com/gustavosalviato.png"
        alt=""
        className="h-10 w-10 rounded-full object-cover"
      />
      <div className="flex flex-col gap-0.5 truncate">
        <span className="text-sm font-semibold text-zinc-700 dark:text-zinc-100">
          Gustavo
        </span>
        <span className="truncate text-sm text-zinc-500 dark:text-zinc-400">
          gustavosalviato@gmail.com
        </span>
      </div>
      <Button variant="ghost">
        <LogOut size={20} className="text-zinc-500" />
      </Button>
    </div>
  )
}
