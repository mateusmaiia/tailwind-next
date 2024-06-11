import {
  BarChart,
  CheckSquare,
  Cog,
  Flag,
  HomeIcon,
  LifeBuoy,
  Search,
  SquareStack,
  Users,
} from 'lucide-react'
import { Logo } from './Logo'
import { NavItem } from '../MainNavigation/NavItem'
import { UsedSpaceWidget } from './UsedSpaceWidget'
import { Profile } from './Profile'
import * as Input from '../Input'

export function Sidebar() {
  return (
    <aside className="border-r border-zinc-200 px-5 py-8 flex flex-col gap-6 ">
      <Logo />
      <Input.Root>
        <Input.Prefix>
          <Search className="h-5 w-5 text-zinc-500" />
        </Input.Prefix>
        <Input.Control placeholder="Search" />
      </Input.Root>
      <nav className="space-y-0.5">
        <NavItem name="Home" icon={HomeIcon} />
        <NavItem name="Dashboard" icon={BarChart} />
        <NavItem name="Projects" icon={SquareStack} />
        <NavItem name="Tasks" icon={CheckSquare} />
        <NavItem name="Reporting" icon={Flag} />
        <NavItem name="Users" icon={Users} />
      </nav>
      <div className="mt-auto flex flex-col space-y-0.5">
        <nav>
          <NavItem name="Support" icon={LifeBuoy} />
          <NavItem name="Setting" icon={Cog} />
        </nav>
        <UsedSpaceWidget />
      </div>
      <div className="h-px bg-zinc-200"></div>
      <Profile />
    </aside>
  )
}
