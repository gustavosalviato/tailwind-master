import { ComponentProps } from 'react'

type TextAreaProps = ComponentProps<'textarea'>

export function TextArea(props: TextAreaProps) {
  return (
    <textarea
      className="dark:bg-zinc-800first-letter: col-span-2 min-h-[120px] resize-y rounded-lg border border-zinc-300 p-4 px-3 py-2 text-zinc-900 shadow-sm outline-none focus:border-violet-300 focus:ring-2 focus:ring-violet-50 dark:border-zinc-700
      dark:bg-zinc-800 dark:focus:border-violet-500 dark:focus:ring-violet-500/20"
      {...props}
    />
  )
}
