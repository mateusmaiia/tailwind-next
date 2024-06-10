import { Logo } from './Logo'

export function Sidebar() {
  return (
    <aside className="border-r border-zinc-200 px-5 py-8 ">
      <Logo />
      <div className="flex w-full items-center gap-2 rounded-lg border border-zinc-300 px-3 py-2 shadow-sm"></div>
    </aside>
  )
}
