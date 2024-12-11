import * as React from 'react'

import { cn } from '~/lib/utils'
import { Button } from './button'

export interface InputProps
  extends React.InputHTMLAttributes<HTMLInputElement> {
  suffix?: React.ReactNode
  prefix?: React.ReactNode
  iconClick?: (value: string) => void
}

const Input = React.forwardRef<HTMLInputElement, InputProps>(
  ({ className, type, suffix, prefix, iconClick, ...props }, ref) => {
    return (
      <div className='relative w-full'>
        {prefix && (
          <Button
            variant='ghost'
            className='absolute left-0 top-0 h-full flex items-center justify-center'
            onClick={() =>
              iconClick &&
              ref &&
              'current' in ref &&
              ref.current &&
              iconClick(ref.current.value)
            }
          >
            {prefix}
          </Button>
        )}
        <input
          type={type}
          className={cn(
            'flex h-9 w-full rounded-md border bg-white border-neutral-200 px-3 py-1 text-sm shadow-sm transition-colors file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-neutral-500 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-neutral-950 disabled:cursor-not-allowed disabled:opacity-50',
            suffix && 'pr-10',
            prefix && 'pl-10',
            className,
          )}
          ref={ref}
          {...props}
        />
        {suffix && (
          <Button
            variant='ghost'
            className='absolute right-0 top-0 h-full flex items-center justify-center'
            onClick={() =>
              iconClick &&
              ref &&
              'current' in ref &&
              ref.current &&
              iconClick(ref.current.value)
            }
          >
            {suffix}
          </Button>
        )}
      </div>
    )
  },
)
Input.displayName = 'Input'

export { Input }
