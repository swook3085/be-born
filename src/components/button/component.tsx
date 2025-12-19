import { cn } from '@beborn/lib/utils'
import { Slot } from '@radix-ui/react-slot'

import type { IButtonProps } from './interface'
import { buttonVariants } from './variants'

export const Button = ({
  className,
  variant,
  size,
  asChild = false,
  ref,
  ...props
}: IButtonProps) => {
  const Comp = asChild ? Slot : 'button'
  return (
    <Comp
      className={cn(buttonVariants({ variant, size, className }))}
      ref={ref}
      {...props}
    />
  )
}
