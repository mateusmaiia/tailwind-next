import { ChevronDown, Home } from 'lucide-react'

export function MainNavigationq() {
  return (
    <nav className="space-y-0.5">
      <a
        href=""
        className="flex rounded px-3 py-2 hover:violet-50 items-center gap-3"
      >
        <Home className="h-5 w-5 text-zinc-500" />
        <span className="font-medium text-zinc-700 ">Home</span>
        <ChevronDown className="h-5 w-5 text-zinc-400" />
      </a>
    </nav>
  )
}
