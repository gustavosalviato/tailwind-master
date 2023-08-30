'use client'

import * as Tabs from '@radix-ui/react-tabs'
import { TabItem } from './TabItem'
import { useState } from 'react'
import * as ScrollArea from '@radix-ui/react-scroll-area'
import { Scroll } from 'lucide-react'

export function SettingsTabs() {
  const [currentTab, setCurrentTab] = useState('my-details')

  return (
    <Tabs.Root
      defaultValue={currentTab}
      onValueChange={(value) => setCurrentTab(value)}
    >
      <ScrollArea.Root type="scroll" className="w-full">
        <ScrollArea.Viewport className="w-full overflow-x-scroll">
          <Tabs.List className="mt-6 flex w-full items-center gap-4 border-b border-zinc-200">
            <TabItem
              title="My Details"
              value="my-details"
              isSelected={currentTab === 'my-details'}
            />
            <TabItem
              title="Profile"
              value="profile"
              isSelected={currentTab === 'profile'}
            />
            <TabItem
              title="Password"
              value="password"
              isSelected={currentTab === 'password'}
            />
            <TabItem
              title="Team"
              value="team"
              isSelected={currentTab === 'team'}
            />
            <TabItem
              title="Email"
              value="email"
              isSelected={currentTab === 'email'}
            />
          </Tabs.List>
        </ScrollArea.Viewport>

        <ScrollArea.Scrollbar
          className="flex h-0.5 translate-y-1.5 touch-none select-none flex-col bg-zinc-100"
          orientation="horizontal"
        >
          <ScrollArea.Thumb className="relative flex-1 rounded-lg bg-zinc-300" />
        </ScrollArea.Scrollbar>
      </ScrollArea.Root>
    </Tabs.Root>
  )
}
