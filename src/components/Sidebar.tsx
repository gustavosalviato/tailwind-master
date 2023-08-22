import { Logo } from './Logo'
import { LifeBuoy, Search, Settings } from 'lucide-react'
import { MainNavigation } from './MainNavigation'
import { NavItem } from './NavItem'
import { WidgetUsedSpace } from './WidgetUsedSpace'
import { Profile } from './Profile'

export function Sidebar() {
  return (
    <aside className="flex flex-col gap-6 border-r border-zinc-200 px-5 py-8">
      <Logo />
      <div className="flex w-full items-center gap-2 rounded-lg border border-zinc-300 px-3 py-2">
        <Search size={20} className="text-zinc-500" />

        <input
          type="text"
          className="boder-0 bg-transparent p-0 text-zinc-900 outline-none placeholder:text-zinc-600"
          placeholder="Search"
        />
      </div>

      <MainNavigation />

      <div className="mt-auto">
        <nav className="space-y-0.5">
          <NavItem title="Support" icon={LifeBuoy} />
          <NavItem title="Settings" icon={Settings} />
        </nav>
      </div>

      <WidgetUsedSpace />

      <div className="h-px w-full bg-zinc-200" />

      <Profile />
    </aside>
  )
}
