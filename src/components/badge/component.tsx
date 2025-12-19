import { cn } from '@beborn/lib/utils'

import type { IBadgeProps } from './interface'
import { badgeVariants } from './variants'

export const Badge = ({ className, variant, ...props }: IBadgeProps) => {
  return (
    <div className={cn(badgeVariants({ variant }), className)} {...props} />
  )
}
