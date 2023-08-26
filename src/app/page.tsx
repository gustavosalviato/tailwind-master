import { SettingsTabs } from '@/components/SettingsTabs'
import * as Input from '@/components/Input'
import { Mail } from 'lucide-react'
import * as InputFile from '@/components/Form/FileInput'

export default function Home() {
  return (
    <>
      <h1 className="mb-6 text-3xl font-medium text-zinc-900">Settings</h1>

      <SettingsTabs />

      <div className="mt-8 flex items-center justify-between border-b border-zinc-200 pb-5">
        <div className="space-y-1">
          <h2 className="text-lg font-medium text-zinc-900">Personal Info</h2>
          <p className="text-sm text-zinc-500">
            Update your photo and personal details here.
          </p>
        </div>

        <div className="flex items-center gap-2">
          <button
            type="button"
            className="rounded-md border border-zinc-300 px-3 py-2 text-sm font-semibold text-zinc-700 transition-colors duration-300 hover:bg-zinc-50"
          >
            Cancel
          </button>
          <button
            form="formSubmit"
            type="submit"
            className="rounded-md border bg-violet-600 px-3 py-2 text-sm font-semibold text-white transition-colors duration-300 hover:bg-violet-500            "
          >
            Save
          </button>
        </div>
      </div>

      <form
        id="formSubmit"
        className="mt-6 flex w-full flex-col space-y-5 divide-y divide-zinc-200"
      >
        <div className="grid grid-cols-form gap-3">
          <label
            htmlFor="firstName"
            className="text-sm font-medium text-zinc-700"
          >
            Name
          </label>

          <div className="grid grid-cols-2 gap-6">
            <Input.Root>
              <Input.Control id="firstName" defaultValue="Olivia" />
            </Input.Root>

            <Input.Root>
              <Input.Control defaultValue="Rodrigo" />
            </Input.Root>
          </div>
        </div>

        <div className="grid grid-cols-form gap-3 pt-5">
          <label className="text-sm font-medium text-zinc-700">Email</label>

          <Input.Root>
            <Input.Prefix>
              <Mail size={20} className="text-zinc-500" />
            </Input.Prefix>
            <Input.Control
              placeholder="email"
              defaultValue="johndoe@gmail.com"
            />
          </Input.Root>

          <div />
        </div>

        <div className="grid grid-cols-form gap-3 pt-5">
          <div className="space-y-1">
            <span className="text-sm font-medium text-zinc-700">
              Your Photo
            </span>

            <p className="text-sm text-zinc-500">
              This will be displayed on your profile.
            </p>
          </div>

          <InputFile.Root className="flex items-start gap-5">
            <InputFile.ImagePreview />
            <InputFile.Trigger />
            <InputFile.Control />
          </InputFile.Root>
          <div />
        </div>

        <div className="grid grid-cols-form gap-3 pt-5">
          <label className="text-sm font-medium text-zinc-700">Role</label>

          <Input.Root>
            <Input.Control placeholder="Role" defaultValue="Product Designer" />
          </Input.Root>
        </div>

        <div className="grid grid-cols-form gap-3 pt-5">
          <label className="text-sm font-medium text-zinc-700">Country</label>

          <div />
        </div>

        <div className="grid grid-cols-form gap-3 pt-5">
          <label className="text-sm font-medium text-zinc-700">Timezone</label>

          <div />
        </div>

        <div className="grid grid-cols-form gap-3 pt-5">
          <div className="space-y-1">
            <span className="text-sm font-medium text-zinc-700">Bio</span>
            <p className="text-sm text-zinc-500">Write a short introduction.</p>
          </div>

          <div />
        </div>

        <div className="grid grid-cols-form gap-3 pt-5">
          <div className="space-y-1">
            <span className="text-sm font-medium text-zinc-700">
              Portfolio projects
            </span>
            <p className="text-sm text-zinc-500">
              Share a few snippets of yourk work.
            </p>
          </div>

          <InputFile.Root className="flex items-start gap-5">
            <InputFile.Trigger />
            <InputFile.Control />
          </InputFile.Root>

          <div />
        </div>
      </form>
    </>
  )
}
