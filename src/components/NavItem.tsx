import { ChevronDown } from 'lucide-react'
import { ElementType } from 'react'

interface NavItemProps {
  title: string
  icon: ElementType
}
export function NavItem({ title, icon: Icon }: NavItemProps) {
  return (
    <a
      href="/"
      className="group flex items-center gap-3 rounded px-3 py-2 transition-colors duration-300 hover:bg-violet-50 hover:text-violet-500 "
    >
      <Icon size={20} className="text-zinc-500" />
      {title}
      <ChevronDown className="ml-auto group-hover:text-violet-400" />
    </a>
  )
}
