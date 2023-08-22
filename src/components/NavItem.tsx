import { ChevronDown } from "lucide-react";
import { ElementType } from "react";


interface NavItemProps {
    title: string
    icon: ElementType
}
export function NavItem({ title, icon: Icon }: NavItemProps) {
    return (
        <a href="/" className="flex items-center gap-3 group duration-300 transition-colors hover:bg-violet-50 px-3 py-2 hover:text-violet-500 rounded ">
            <Icon size={20} className="text-zinc-500" />
            {title}
            <ChevronDown className="ml-auto group-hover:text-violet-400" />
        </a>
    )
}