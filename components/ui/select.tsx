'use client'

import * as React from 'react';



function Select({
  children,
  className,
  ...props
}: React.ComponentProps<'select'>) {
  return (
    <select
      className={`border border-gray-300 rounded-md px-3 py-2 text-sm focus:ring-2 focus:ring-blue-500 focus:outline-none ${className}`}
      {...props}
    >
      {children}
    </select>
  );
}

function SelectGroup({
  children,
  className,
  ...props
}: React.ComponentProps<'optgroup'>) {
  return (
    <optgroup className={className} {...props}>
      {children}
    </optgroup>
  );
}

function SelectValue({
  value,
  className,
  ...props
}: React.ComponentProps<'option'>) {
  return (
    <option value={value} className={className} {...props} />
  );
}

function SelectTrigger({
  children,
  className,
  ...props
}: React.ComponentProps<'div'>) {
  return (
    <div
      className={`flex items-center justify-between border border-gray-300 rounded-md px-3 py-2 text-sm ${className}`}
      {...props}
    >
      {children}
    </div>
  );
}

function SelectContent({
  children,
  className,
  ...props
}: React.ComponentProps<'div'>) {
  return (
    <div
      className={`absolute bg-white border border-gray-300 rounded-md shadow-md ${className}`}
      {...props}
    >
      {children}
    </div>
  );
}

function SelectItem({
  children,
  className,
  ...props
}: React.ComponentProps<'option'>) {
  return (
    <option className={`px-3 py-2 text-sm ${className}`} {...props}>
      {children}
    </option>
  );
}

export {
  Select, SelectContent, SelectGroup, SelectItem, SelectTrigger, SelectValue
};

