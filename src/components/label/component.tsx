'use client'

import * as LabelPrimitive from '@radix-ui/react-label'
import { cn } from '@beborn/lib/utils'

import type { ILabelProps } from './interface'
import { labelVariants } from './variants'

export const Label = ({ className, ref, ...props }: ILabelProps) => (
  <LabelPrimitive.Root ref={ref} className={cn(labelVariants(), className)} {...props} />
)

