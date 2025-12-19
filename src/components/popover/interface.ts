import * as React from 'react'
import * as PopoverPrimitive from '@radix-ui/react-popover'

export interface IPopoverContentProps
  extends React.ComponentPropsWithoutRef<typeof PopoverPrimitive.Content> {
  ref?: React.Ref<React.ElementRef<typeof PopoverPrimitive.Content>>
}


