'use client'
import * as Tabs from '@radix-ui/react-tabs'

interface TabItemProps {
  title: string
  value: string
  isSelected?: boolean
}
export function TabItem({ title, value, isSelected }: TabItemProps) {
  return (
    <Tabs.Trigger
      value={value}
      className="px-1 pb-4 text-sm font-medium text-zinc-500 hover:text-violet-700 "
    >
      <span>{title}</span>

      {isSelected && (
        <span className="aboluste -bottom-px left-0 right-0 h-0.5 bg-violet-700"></span>
      )}
    </Tabs.Trigger>
  )
}
