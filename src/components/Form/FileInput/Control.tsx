'use client'

import { ChangeEvent, ComponentProps } from 'react'
import { useFileInput } from './Root'

export type ControlProps = ComponentProps<'input'>
export function Control({ multiple = false, ...props }: ControlProps) {
  const { id, onSelectedFiles } = useFileInput()

  function handleChangeFile(event: ChangeEvent<HTMLInputElement>) {
    if (!event.target.files) {
      return
    }

    const files = Array.from(event.target.files)

    onSelectedFiles(files, multiple)
  }

  return (
    <input
      type="file"
      className="sr-only"
      id={id}
      multiple={multiple}
      onChange={handleChangeFile}
      {...props}
    />
  )
}
