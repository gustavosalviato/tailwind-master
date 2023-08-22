import { Logo } from '../Logo'
import { LifeBuoy, Search, Settings } from 'lucide-react'
import { MainNavigation } from '../MainNavigation'
import { NavItem } from '../NavItem'
import { WidgetUsedSpace } from '../WidgetUsedSpace'
import { Profile } from '../Profile'
import * as Input from '../Input'

export function Sidebar() {
  return (
    <aside className="flex flex-col gap-6 border-r border-zinc-200 px-5 py-8">
      <Logo />
      <Input.Root>
        <Input.Prefix>
          <Search className="text-zinc-500" />
        </Input.Prefix>

        <Input.Control placeholder="Search" />
      </Input.Root>

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
