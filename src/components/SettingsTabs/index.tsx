'use client'

import * as Tabs from '@radix-ui/react-tabs'
import { TabItem } from './TabItem'
import { useState } from 'react'

export function SettingsTabs() {
  const [currentTab, setCurrentTab] = useState('my-details')

  return (
    <Tabs.Root
      defaultValue={currentTab}
      onValueChange={(value) => setCurrentTab(value)}
    >
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
        <TabItem title="Team" value="team" isSelected={currentTab === 'team'} />
      </Tabs.List>
    </Tabs.Root>
  )
}
