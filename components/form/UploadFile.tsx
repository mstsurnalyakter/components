"use client"

import { useState } from "react"
import { FormControl, FormField, FormItem, FormMessage } from "./form"

interface Props {
  control: any
  name: string
  accept?: string
  maxSizeMB?: number
  label?: string
  disabled?: boolean
}

export function UploadFile({
  control,
  name,
  accept,
  maxSizeMB,
  label = "",
  disabled = false,
}: Props) {
  const [fileName, setFileName] = useState<string | null>(null)

  return (
    <FormField
      control={control}
      name={name}
      render={({ field }) => (
        <FormItem>
          <FormControl>
            <div className="space-y-2">
              <label className="block text-sm font-medium text-gray-700">
                {label}
              </label>
              <input
                type="file"
                accept={accept}
                disabled={disabled}
                onChange={(e) => {
                  const file = e.target.files?.[0] || null
                  if (file && maxSizeMB && file.size > maxSizeMB * 1024 * 1024) {
                    alert(`File size exceeds ${maxSizeMB}MB`)
                    return
                  }
                  setFileName(file?.name || null)
                  field.onChange(file)
                }}
                className="block w-full text-sm text-gray-500 file:mr-4 file:py-2 file:px-4 file:rounded file:border file:border-gray-300 file:bg-gray-50 file:text-gray-700 hover:file:bg-gray-100"
              />
              {fileName && (
                <p className="text-sm text-gray-500">Selected file: {fileName}</p>
              )}
            </div>
          </FormControl>
          <FormMessage />
        </FormItem>
      )}
    />
  )
}


