'use client'

import {
  ComponentProps,
  createContext,
  useContext,
  useId,
  useState,
} from 'react'

type RootProps = ComponentProps<'div'>

type FileContextType = {
  id: string
  files: File[]
  onSelectedFiles: (files: File[], multiple: boolean) => void
}

const FileInputContext = createContext({} as FileContextType)

export function Root(props: RootProps) {
  const [files, setFiles] = useState<File[]>([])
  const id = useId()

  function onSelectedFiles(files: File[], multiple: boolean) {
    if (multiple) {
      setFiles((prevState) => [...prevState, ...files])
    }

    setFiles(files)
  }
  return (
    <FileInputContext.Provider value={{ id, files, onSelectedFiles }}>
      <div {...props} />
    </FileInputContext.Provider>
  )
}

export const useFileInput = () => useContext(FileInputContext)
