import { ComponentProps } from 'react'

type inputPrefixProps = ComponentProps<'div'>
export function Prefix(props: inputPrefixProps) {
  return <div {...props} />
}

type inputControlProps = ComponentProps<'input'>

export function Control(props: inputControlProps) {
  return (
    <input
      className="flex-1 border-0 bg-transparent p-0 outline-none text-zinc-900 placeholder:zinc-600"
      type="text"
      {...props}
    />
  )
}

type InputRootProps = ComponentProps<'div'>
export function Root(props: InputRootProps) {
  return (
    <div
      className="flex w-full items-center gap-2 rounded-lg border border-zinc-300 px-3 py-2 shadow-sm "
      {...props}
    />
  )
}
