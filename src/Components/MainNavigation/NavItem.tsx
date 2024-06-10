import { ChevronDown } from 'lucide-react'
import { ElementType } from 'react'

interface Props {
  name: string
  icon: ElementType
}

export function NavItem({ name, icon: Icon }: Props) {
  return (
    <a
      href=""
      className="group flex rounded px-3 py-2 hover:violet-50 items-center gap-3"
    >
      <Icon className="h-5 w-5 text-zinc-500" />
      <span className="font-medium text-zinc-700 group-hover:text-violet-500 ">
        {name}
      </span>
      <ChevronDown className="h-5 w-5 ml-auto  text-zinc-400 group-hover:text-violet-300" />
    </a>
  )
}
