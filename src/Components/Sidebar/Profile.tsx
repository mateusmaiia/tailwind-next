import { LogOut } from 'lucide-react'

export function Profile() {
  return (
    <div className="flex items-center gap-3">
      <img
        src="https://github.com/mateusmaiia.png"
        alt="profileImage"
        className="h-10 w-10 rounded-full"
      />
      <div className="flex flex-col ">
        <span className="text-sm font-semibold text-zinc-700">Mateus Maia</span>
        <span className="text-sm  text-zinc-500">mateusssmaia@gmail.com</span>
      </div>

      <button type="button" className="ml-auto">
        <LogOut className="w-5 h-5 text-zinc-500" />
      </button>
    </div>
  )
}
