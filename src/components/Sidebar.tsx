import { Logo } from './Logo'
import { Search } from 'lucide-react'

export function Sidebar() {
  return (
    <aside className="border-r border-zinc-200 px-5 py-8 space-y-6">
      <Logo />
      <div className="flex items-center gap-2 w-full rounded-lg border border-zinc-300 px-3 py-2">
        <Search size={20} className="text-zinc-500" />

        <input
          type="text"
          className="boder-0 outline-none text-zinc-900 bg-transparent p-0 placeholder:text-zinc-600"
          placeholder="Search"
        />
      </div>
    </aside>
  )
}
