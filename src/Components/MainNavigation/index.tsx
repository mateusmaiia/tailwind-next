import { ChevronDown, Home } from 'lucide-react'

export function MainNavigationq() {
  return (
    <nav className="space-y-0.5">
      <a
        href=""
        className=" group flex rounded px-3 py-2 hover:violet-50 items-center gap-3"
      >
        <Home className="h-5 w-5 text-zinc-500" />
        <span className="font-medium text-zinc-700 group-hover:text-violet-500 ">
          Home
        </span>
        <ChevronDown className="h-5 w-5 text-zinc-400 group-hover:text-violet-300" />
      </a>
    </nav>
  )
}
