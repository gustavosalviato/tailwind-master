'use client'

import { Logo } from '../Logo'
import { LifeBuoy, Menu, Search, Settings } from 'lucide-react'
import { MainNavigation } from '../MainNavigation'
import { NavItem } from '../NavItem'
import { WidgetUsedSpace } from '../WidgetUsedSpace'
import { Profile } from '../Profile'
import * as Input from '../Input'
import * as Collapsible from '@radix-ui/react-collapsible'
import { Button } from '../Button'

export function Sidebar() {
  return (
    <Collapsible.Root className="fixed left-0 right-0 top-0 z-20 flex flex-col gap-6 overflow-hidden overflow-y-auto border-b border-zinc-200 bg-white p-4 scrollbar-thin scrollbar-track-zinc-950 scrollbar-thumb-zinc-800 data-[state=open]:bottom-0 dark:border-zinc-900 dark:bg-zinc-800 lg:right-auto lg:h-auto lg:w-80 lg:overflow-auto lg:border-b-0 lg:border-r lg:border-zinc-200 lg:px-5 lg:py-8">
      <div className="flex items-center justify-between">
        <Logo />

        <Collapsible.Trigger asChild className="lg:hidden">
          <Button variant="ghost">
            <Menu />
          </Button>
        </Collapsible.Trigger>
      </div>

      <Collapsible.Content
        forceMount
        asChild
        className="data-[state=closed]:hidden data-[state=open]:animate-slideDownAndFade lg:data-[state=closed]:flex"
      >
        <div className="flex flex-1 flex-col gap-6">
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

          <div className="h-px w-full bg-zinc-200 dark:bg-zinc-700" />

          <Profile />
        </div>
      </Collapsible.Content>
    </Collapsible.Root>
  )
}
