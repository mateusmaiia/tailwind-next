import {
  BarChart,
  CheckSquare,
  Flag,
  HomeIcon,
  Search,
  SquareStack,
  Users,
} from 'lucide-react'
import { Logo } from './Logo'
import { NavItem } from '../MainNavigation/NavItem'

export function Sidebar() {
  return (
    <aside className="border-r border-zinc-200 px-5 py-8 flex flex-col gap-6 ">
      <Logo />
      <div className="flex w-full items-center gap-2 rounded-lg border border-zinc-300 px-3 py-2 shadow-sm ">
        <Search size={24} color="blue" className="h-5 w-5 text-zinc-500" />
        <input
          className="flex-1 border-0 bg-transparent p-0 outline-none text-zinc-900 placeholder:zinc-600"
          type="text"
          placeholder="Search"
        />
      </div>
      <nav className="space-y-0.5">
        <NavItem name="Home" icon={HomeIcon} />
        <NavItem name="Dashboard" icon={BarChart} />
        <NavItem name="Projects" icon={SquareStack} />
        <NavItem name="Tasks" icon={CheckSquare} />
        <NavItem name="Reporting" icon={Flag} />
        <NavItem name="Users" icon={Users} />
      </nav>
      <div className="mt-auto">kldsjmlkdsa</div>
    </aside>
  )
}
