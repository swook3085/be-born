import { Slot } from '@radix-ui/react-slot'
import { cn } from '@beborn/lib/utils'
import { forwardRef } from 'react'

import type { IButtonProps } from './interface'
import { buttonVariants } from './variants'

export const Button = forwardRef<HTMLButtonElement, IButtonProps>(
  ({ className, variant, size, asChild = false, ...props }, ref) => {
    const Comp = asChild ? Slot : 'button'
    return (
      <Comp
        className={cn(buttonVariants({ variant, size, className }))}
        ref={ref}
        {...props}
      />
    )
  }
)
Button.displayName = 'Button'
