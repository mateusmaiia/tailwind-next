import {
  BarChart,
  CheckSquare,
  Flag,
  HomeIcon,
  SquareStack,
  Users,
} from 'lucide-react'
import { NavItem } from './NavItem'

export function MainNavigation() {
  return (
    <nav className="space-y-0.5">
      <NavItem name="Home" icon={HomeIcon} />
      <NavItem name="Dashboard" icon={BarChart} />
      <NavItem name="Projects" icon={SquareStack} />
      <NavItem name="Tasks" icon={CheckSquare} />
      <NavItem name="Reporting" icon={Flag} />
      <NavItem name="Users" icon={Users} />
    </nav>
  )
}
