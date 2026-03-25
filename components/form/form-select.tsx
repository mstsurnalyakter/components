"use client"

import type { Control, FieldPath, FieldValues } from "react-hook-form"
import { FormControl, FormField, FormItem, FormMessage } from "./form"

interface SelectOption {
  value: string
  label: string
}

interface FormSelectProps<T extends FieldValues> {
  control: Control<T>
  name: FieldPath<T>
  placeholder: string
  options: SelectOption[]
  disabled?: boolean
  showFilterIcon?: boolean // Ensure this property is included
  className?: string
}

export function FormSelect<T extends FieldValues>({ 
  control, 
  name, 
  placeholder, 
  options, 
  disabled = false,
  showFilterIcon = false,
  className = "",
}: FormSelectProps<T>) {
  return (
    <FormField
      control={control}
      name={name}
      render={({ field }) => (
        <FormItem className="w-full">
          <FormControl>
            <select
              value={field.value || ""}
              onChange={(e: React.ChangeEvent<HTMLSelectElement>) => field.onChange(e.target.value)}
              disabled={disabled}
              className={`w-full bg-white border border-gray-300 rounded-md shadow-sm pl-3 pr-10 py-2 text-left focus:outline-none focus:ring-1 focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm ${className}`}
            >
              <option value="" disabled>
                {placeholder}
              </option>
              {options.map((option) => (
                <option key={option.value} value={option.value}>
                  {option.label}
                </option>
              ))}
            </select>
          </FormControl>
          <FormMessage />
        </FormItem>
      )}
    />
  )
}