import { SettingsTabs } from '@/components/SettingsTabs'
import * as Input from '@/components/Input'
import { Bold, Italic, Link, List, ListOrdered, Mail } from 'lucide-react'
import * as InputFile from '@/components/Form/FileInput'
import { Select } from '@/components/Form/Select'
import { SelectItem } from '@/components/Form/Select/SelectItem'
import { TextArea } from '@/components/TextArea'
import { Button } from '@/components/Button'

export default function Home() {
  return (
    <>
      <h1 className="mb-6 text-3xl font-medium text-zinc-900 dark:text-zinc-100">
        Settings
      </h1>

      <SettingsTabs />

      <div className="mt-8 flex items-center justify-between border-b border-zinc-200 pb-5">
        <div className="space-y-1">
          <h2 className="text-lg font-medium text-zinc-900 dark:text-zinc-100">
            Personal Info
          </h2>
          <p className="text-sm text-zinc-500 dark:text-zinc-400">
            Update your photo and personal details here.
          </p>
        </div>

        <div className="flex items-center gap-2">
          <Button variant="secondary">Cancel</Button>
          <Button variant="primary">Save</Button>
        </div>
      </div>

      <form
        id="formSubmit"
        className="mt-6 flex w-full flex-col space-y-5 divide-y divide-zinc-200"
      >
        <div className="grid gap-3 lg:grid-cols-form">
          <label
            htmlFor="firstName"
            className="text-sm font-medium text-zinc-700 dark:text-zinc-300"
          >
            Name
          </label>

          <div className="grid gap-6 lg:grid-cols-2">
            <Input.Root>
              <Input.Control id="firstName" defaultValue="Olivia" />
            </Input.Root>

            <Input.Root>
              <Input.Control defaultValue="Rodrigo" />
            </Input.Root>
          </div>
        </div>

        <div className="grid grid-cols-1 gap-3 pt-5 lg:grid-cols-form">
          <label className="text-sm font-medium text-zinc-700 dark:text-zinc-300">
            Email
          </label>

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

        <div className="grid gap-3 pt-5 lg:grid-cols-form">
          <div className="space-y-1">
            <span className="text-sm font-medium text-zinc-700 dark:text-zinc-300">
              Your Photo
            </span>

            <p className="text-sm text-zinc-500 dark:text-zinc-400">
              This will be displayed on your profile.
            </p>
          </div>

          <InputFile.Root className="items-start gap-5 lg:flex">
            <InputFile.ImagePreview />
            <InputFile.Trigger />
            <InputFile.Control />
          </InputFile.Root>
          <div />
        </div>

        <div className="grid gap-3 pt-5 lg:grid-cols-form">
          <label className="text-sm font-medium text-zinc-700 dark:text-zinc-300">
            Role
          </label>

          <Input.Root>
            <Input.Control placeholder="Role" defaultValue="Product Designer" />
          </Input.Root>
        </div>

        <div className="grid gap-3 pt-5 lg:grid-cols-form">
          <label className="text-sm font-medium text-zinc-700 dark:text-zinc-300">
            Country
          </label>
          <Select placeholder="Select a country">
            <SelectItem value="br" text="Brasil" />
            <SelectItem value="us" text="United States" />
          </Select>
          <div />
        </div>

        <div className="grid gap-3 pt-5 lg:grid-cols-form">
          <label className="text-sm font-medium text-zinc-700 dark:text-zinc-300">
            Timezone
          </label>
          <Select placeholder="Select a timezone">
            <SelectItem
              value="utc8"
              text="Pacific Standard Time (PST) UTC−08:00"
            />
            <SelectItem value="utc3" text="America/ São Paulo (UTC−03:00)" />
          </Select>
          <div />
        </div>

        <div className="grid gap-3 pt-5 lg:grid-cols-form">
          <div className="space-y-1">
            <span className="text-sm font-medium text-zinc-700 dark:text-zinc-300">
              Bio
            </span>
            <p className="text-sm text-zinc-500">Write a short introduction.</p>
          </div>

          <div className="grid grid-cols-1 gap-3">
            <Select placeholder="" defaultValue="normal">
              <SelectItem value="normal" text="Normal text" defaultChecked />
              <SelectItem value="md" text="Mark Down" defaultChecked />
            </Select>

            <div className="flex items-center gap-3">
              <Button
                type="button"
                variant="ghost"
                className="rounded-md p-2 hover:bg-zinc-50"
              >
                <Bold className="h-4 w-4 text-zinc-500" strokeWidth={3} />
              </Button>
              <Button
                type="button"
                variant="ghost"
                className="rounded-md p-2 hover:bg-zinc-50"
              >
                <Italic className="h-4 w-4 text-zinc-500" strokeWidth={3} />
              </Button>
              <Button
                type="button"
                variant="ghost"
                className="rounded-md p-2 hover:bg-zinc-50"
              >
                <Link className="h-4 w-4 text-zinc-500" strokeWidth={3} />
              </Button>
              <Button
                type="button"
                variant="ghost"
                className="rounded-md p-2 hover:bg-zinc-50"
              >
                <List className="h-4 w-4 text-zinc-500" strokeWidth={3} />
              </Button>
              <Button
                type="button"
                variant="ghost"
                className="rounded-md p-2 hover:bg-zinc-50"
              >
                <ListOrdered
                  className="h-4 w-4 text-zinc-500"
                  strokeWidth={3}
                />
              </Button>
            </div>

            <TextArea />
          </div>

          <div />
        </div>

        <div className="grid gap-3 pt-5 lg:grid-cols-form">
          <div className="space-y-1">
            <span className="text-sm font-medium text-zinc-700 dark:text-zinc-300">
              Portfolio projects
            </span>
            <p className="text-sm text-zinc-500">
              Share a few snippets of yourk work.
            </p>
          </div>

          <InputFile.Root>
            <InputFile.Trigger />
            <InputFile.FileList />
            <InputFile.Control multiple />
          </InputFile.Root>
        </div>

        <div className="flex items-center justify-end gap-2 pt-5">
          <Button variant="secondary">Cancel</Button>
          <Button variant="primary">Save</Button>
        </div>
      </form>
    </>
  )
}
