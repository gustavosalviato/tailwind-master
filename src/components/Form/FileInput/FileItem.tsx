import { Button } from '@/components/Button'
import { formatBytes } from '@/helpers/format-bytes'
import { CheckCircle2, Trash2, UploadCloud } from 'lucide-react'
import { tv, VariantProps } from 'tailwind-variants'

const fileItem = tv({
  slots: {
    container: 'flex items-start gap-3 rounded-md border border-zinc-200 p-4',
    icon: 'rounded-full border-4 border-violet-100 bg-violet-200 p-2 text-violet-600',
    deleteButton: '',
  },

  variants: {
    state: {
      progress: {
        container: 'dark:bg-zinc-800 dark:border-zinc-700',
        icon: 'border-violet-50 bg-violet-100 dark:bg-zinc-800 dark:border-transparent',
        deleteButton: 'text-zinc-500',
      },
      error: {
        container:
          'bg-error-25 border-error-300 dark:bg-zinc-800 dark:text-error-800',
        icon: 'border-error-50 bg-error-100 text-error-600 dark:bg-error-400 dark:border-transparent',
        deleteButton: 'text-error-500',
      },
      complete: {
        container: 'border-violet-300',
        icon: '',
      },
    },
  },

  defaultVariants: {
    state: 'progress',
  },
})

interface FileItemProps extends VariantProps<typeof fileItem> {
  name: string
  size: number
}

export function FileItem({ name, size, state }: FileItemProps) {
  const { container, icon, deleteButton } = fileItem({ state })
  return (
    <div key={name} className={container()}>
      <div className={icon()}>
        <UploadCloud size={20} />
      </div>

      {state === 'error' ? (
        <div className="flex flex-1 flex-col space-y-1">
          <span className="text-sm font-medium text-error-800 dark:text-error-300">
            Upload failed, please try again.
          </span>
          <span className="text-sm text-error-200">{name}</span>

          <button className="w-fit text-sm dark:text-error-300">
            Try again
          </button>
        </div>
      ) : (
        <div className="flex flex-1 flex-col">
          <span className="text-sm font-medium text-zinc-700 dark:text-zinc-100">
            {name}
          </span>
          <span className="text-sm text-zinc-500 dark:text-zinc-400">
            {formatBytes(size)}
          </span>

          <div className="mt-3">
            <div className="flex items-center">
              <div className="w-full rounded-full bg-zinc-100 dark:bg-zinc-600">
                <div
                  className="h-2 w-4/5 rounded-full bg-violet-600"
                  style={{ width: state === 'complete' ? '100%' : '80%' }}
                />
              </div>
              <p className="ml-2 text-sm font-medium text-zinc-700 dark:text-zinc-400">
                {state === 'complete' ? '100%' : '80%'}
              </p>
            </div>
          </div>
        </div>
      )}

      <Button
        type="button"
        className="ml-auto rounded-md p-2 hover:bg-zinc-50"
        variant="ghost"
      >
        {state === 'complete' ? (
          <CheckCircle2 className="h-5 w-5 fill-violet-500 text-white" />
        ) : (
          <Trash2 className={deleteButton()} size={20} />
        )}
      </Button>
    </div>
  )
}
