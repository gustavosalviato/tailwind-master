export function WidgetUsedSpace() {
  return (
    <div className="flex flex-col gap-6 bg-violet-50 px-4 py-5 dark:bg-zinc-800">
      <div className="space-y-0.5">
        <span className="text-sm font-semibold leading-tight text-violet-700 dark:text-zinc-100">
          Used space
        </span>
        <p className="text-sm leading-relaxed text-violet-700 dark:text-zinc-400">
          Your team has used 80% of your available space. Need more?
        </p>
      </div>

      <div className="h-2 w-full rounded-full dark:bg-zinc-600">
        <div className="h-2 w-4/5 rounded-full bg-violet-600 dark:bg-violet-400" />
      </div>

      <div className="space-x-3">
        <button className="text-sm font-semibold text-violet-500 transition-colors duration-300 hover:text-violet-700">
          Dismiss
        </button>
        <button className="text-sm font-semibold text-violet-500 transition-colors duration-300 hover:text-violet-700">
          Upgrade
        </button>
      </div>
    </div>
  )
}
