"use client"

import { FormControl, FormField, FormItem, FormMessage } from "./form"

interface Option {
  label: string
  value: string
}

interface FormMultiSelectProps {
  control: any
  name: string
  options: Option[]
  placeholder?: string
  disabled?: boolean
  className?: string
}

export function FormMultiSelect({
  control,
  name,
  options,
  placeholder = "Select...",
  disabled = false,
  className = "",
}: FormMultiSelectProps) {
  return (
    <FormField
      control={control}
      name={name}
      render={({ field }) => (
        <FormItem className={`w-full ${className}`}>
          <FormControl>
            <div className="relative">
              <button
                type="button"
                className="w-full bg-white border border-gray-300 rounded-md shadow-sm pl-3 pr-10 py-2 text-left focus:outline-none focus:ring-1 focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                disabled={disabled}
              >
                {field.value?.length > 0
                  ? options
                      .filter((option) => field.value.includes(option.value))
                      .map((option) => option.label)
                      .join(", ")
                  : placeholder}
              </button>
              <ul className="absolute z-10 mt-1 w-full bg-white shadow-lg max-h-60 rounded-md py-1 text-base ring-1 ring-black ring-opacity-5 overflow-auto focus:outline-none sm:text-sm">
                {options.map((option) => (
                  <li
                    key={option.value}
                    className={`cursor-pointer select-none relative py-2 pl-3 pr-9 ${
                      field.value?.includes(option.value)
                        ? "text-white bg-indigo-600"
                        : "text-gray-900"
                    }`}
                    onClick={() => {
                      const newValue = field.value?.includes(option.value)
                        ? field.value.filter((v: string) => v !== option.value)
                        : [...(field.value || []), option.value]
                      field.onChange(newValue)
                    }}
                  >
                    {option.label}
                  </li>
                ))}
              </ul>
            </div>
          </FormControl>
          <FormMessage />
        </FormItem>
      )}
    />
  )
}

export default FormMultiSelect
