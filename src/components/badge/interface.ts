import * as React from 'react'
import type { VariantProps } from 'class-variance-authority'

import type { badgeVariants } from './variants'

export interface IBadgeProps
  extends React.HTMLAttributes<HTMLDivElement>,
    VariantProps<typeof badgeVariants> {}

