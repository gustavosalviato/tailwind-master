import { ComponentProps } from 'react'

type InputPrefixProps = ComponentProps<'div'>

export function Prefix(props: InputPrefixProps) {
  return <div {...props} />
}

type InputControlProps = ComponentProps<'input'>

export function Control(props: InputControlProps) {
  return (
    <input
      type="text"
      className="boder-0 bg-transparent p-0 text-zinc-900 outline-none outline-none placeholder:text-zinc-600"
      placeholder="Search"
      {...props}
    />
  )
}

type InputRootProps = ComponentProps<'div'>

export function Root(props: InputRootProps) {
  return (
    <div
      className="focus-within: flex w-full items-center gap-2 rounded-lg border border-zinc-300 px-3
      py-2 focus-within:border-violet-300 focus-within:ring-4 focus-within:ring-violet-50"
      {...props}
    />
  )
}
