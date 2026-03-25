'use client'

import * as React from 'react'
import {
  Controller,
  FormProvider,
  useFormContext,
  useFormState,
  type ControllerProps,
  type FieldPath,
  type FieldValues,
} from 'react-hook-form'

const Form = FormProvider

type FormFieldContextValue<
  TFieldValues extends FieldValues = FieldValues,
  TName extends FieldPath<TFieldValues> = FieldPath<TFieldValues>,
> = {
  name: TName
}

const FormFieldContext = React.createContext<FormFieldContextValue>(
  {} as FormFieldContextValue,
)

const FormField = <
  TFieldValues extends FieldValues = FieldValues,
  TName extends FieldPath<TFieldValues> = FieldPath<TFieldValues>,
>({
  ...props
}: ControllerProps<TFieldValues, TName>) => {
  return (
    <FormFieldContext.Provider value={{ name: props.name }}>
      <Controller {...props} />
    </FormFieldContext.Provider>
  )
}

const useFormField = () => {
  const fieldContext = React.useContext(FormFieldContext)
  const itemContext = React.useContext(FormItemContext)
  const { getFieldState } = useFormContext()
  const formState = useFormState({ name: fieldContext.name })
  const fieldState = getFieldState(fieldContext.name, formState)

  if (!fieldContext) {
    throw new Error('useFormField should be used within <FormField>')
  }

  const { id } = itemContext

  return {
    id,
    name: fieldContext.name,
    formItemId: `${id}-form-item`,
    formDescriptionId: `${id}-form-item-description`,
    formMessageId: `${id}-form-item-message`,
    ...fieldState,
  }
}

type FormItemContextValue = {
  id: string
}

const FormItemContext = React.createContext<FormItemContextValue>(
  {} as FormItemContextValue,
)

function FormItem({
  children,
  className,
  ...props
}: React.ComponentProps<'div'>) {
  return (
    <div
      className={`grid gap-2 ${className}`}
      {...props}
    >
      {children}
    </div>
  )
}

function FormControl({
  children,
  className,
  ...props
}: React.ComponentProps<'div'>) {
  return (
    <div
      className={`relative ${className}`}
      {...props}
    >
      {children}
    </div>
  );
}

function FormDescription({ className, ...props }: React.ComponentProps<'p'>) {
  const { formDescriptionId } = useFormField()

  return (
    <p
      data-slot="form-description"
      id={formDescriptionId}
      className={`text-muted-foreground text-sm ${className}`}
      {...props}
    />
  )
}

function FormMessage({
  children,
  className,
  ...props
}: React.ComponentProps<'p'>) {
  return (
    <p
      className={`text-sm text-gray-500 ${className}`}
      {...props}
    >
      {children}
    </p>
  );
}

/**
 * Example usage of Form components:
 *
 * import { Form, FormField, FormItem, FormControl, FormDescription, FormMessage } from './form';
 * import { useForm } from 'react-hook-form';
 *
 * function ExampleForm() {
 *   const form = useForm({
 *     defaultValues: {
 *       username: '',
 *     },
 *   });
 *
 *   const onSubmit = (data) => {
 *     console.log(data);
 *   };
 *
 *   return (
 *     <Form {...form}>
 *       <form onSubmit={form.handleSubmit(onSubmit)}>
 *         <FormField
 *           name="username"
 *           control={form.control}
 *           render={({ field }) => (
 *             <FormItem>
 *               <FormControl>
 *                 <input {...field} placeholder="Enter your username" />
 *               </FormControl>
 *               <FormDescription>
 *                 Your unique username for the platform.
 *               </FormDescription>
 *               <FormMessage />
 *             </FormItem>
 *           )}
 *         />
 *         <button type="submit">Submit</button>
 *       </form>
 *     </Form>
 *   );
 * }
 */

export { Form, FormControl, FormDescription, FormField, FormItem, FormMessage, useFormField }

